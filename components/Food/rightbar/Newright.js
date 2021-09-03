import "./rightbar.css";
import FoodTime from './FoodTime'
import FoodType from './FoodType'
import Desc from './Desc'
import Locate from './Locate'
import Date from './Date'
import { Link } from "react-router-dom";
import { Cancel } from "@material-ui/icons";

import ButtonLink from './Button'

import { useRef, useState } from "react";
import axios from 'axios' 

import { Button, Form, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Rightbar() {

  const [file, setFile] = useState(null);

  const Rightbar = () => {

    const fcat = useRef();
    const ftype = useRef();
    const fdesc = useRef();
    const floca = useRef();
    const famount = useRef();
    const fprice = useRef();
    // const fimage = useRef();

  const postFood = async (e) => {
    e.preventDefault();

    const food = {
      fcat: fcat.current.value,
      ftype: ftype.current.value,
      fdesc: fdesc.current.value,
      floca: floca.current.value,
      famount: famount.current.value,
      fprice: fprice.current.value,
      // fimage: fimage.current.value,
    }

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      food.fimage = fileName;
      console.log(food);
      try {
        await axios.post("/service/upload", data);
      }
      catch (err) {
        console.log(err)
      }
    }

    try{
      await axios.post("/service/food/3", food); 
    }
    catch(err) { 
      console.log(err); 
    }   

    // window.location = '/food';

  }

    return (
      <div className="rightbarmain">
        <h2 className="rightbarTitle">Job Information for Food & Cuisine</h2>
        <Link to="/tablenew" style={{textDecoration: 'none'}}><ButtonLink /></Link>

        <Form className="rightbarInfo" onSubmit={postFood}>

        <div className="rightbarInfoItem">
          <Form.Group className="rightbarInfoKey" controlId="formBasicFile">          
              <Form.Control name="pic" type="file" onChange={(e) => setFile(e.target.files[0])} />
          </Form.Group>
        </div> 
          
        <div className="rightbarInfoItem">
          <Form.Group className="rightbarInfoKey" controlId="selectcat">        
            <Form.Select ref={fcat} aria-label="Default select example" label="Select Food Category" style={{height: 60, width: 200}}>
              {/* <option>Select Type</option> */}
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option> 
              <option value="Teat-Time">Teat-Time</option> 
              <option value="Seasonal Meals">Seasonal Meals</option>
              <option value="Other">Other</option>  
            </Form.Select>
          </Form.Group>
        </div>

        <div className="rightbarInfoItem">
          <Form.Group className="rightbarInfoKey" controlId="selecttype">        
            <Form.Select ref={ftype} aria-label="Default select example" label="Select Food Type" style={{height: 60, width: 200}}>
              {/* <option>Select Type</option> */}
              <option value="Vegetable">Vegetable</option>
              <option value="Chicken">Chicken</option>
              <option value="Fish">Fish</option> 
              <option value="Meat">Meat</option>
              <option value="Other">Other</option>  
            </Form.Select>
          </Form.Group>
        </div>

        <div className="rightbarInfoItem">
          <Form.Group className=" rightbarInfoKey" controlId="formBasicDescription">
            <FloatingLabel
              controlId="floatingInput0"
              label="Food Description"
              className="mb-1"
              style={{width: 400, textDecoration: 'none'}}
            >
              <Form.Control ref={fdesc} style={{height: 60}} type="text"  placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>
        </div>

        <div className="rightbarInfoItem">
          <Form.Group className="rightbarInfoKey" controlId="formBasicLocation">
          <FloatingLabel
              controlId="floatingInput1"
              label="Location"
              className="mb-1"
              style={{width: 400}}
            >
              <Form.Control ref={floca} style={{height: 60}} type="text" placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>
        </div> 

        <div className="rightbarInfoItem">
          <Form.Group className="rightbarInfoKey" controlId="formBasicAmount">
          <FloatingLabel
              controlId="floatingInput2"
              label="Amount"
              className="mb-1"
              style={{width: 400}}
            >
              <Form.Control ref={famount} style={{height: 60}} type="number" placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>
        </div> 

        <div className="rightbarInfoItem">
          <Form.Group className="rightbarInfoKey" controlId="formBasicPrice">
          <FloatingLabel
              controlId="floatingInput3"
              label="Price(LKR)"
              className="mb-1"
              style={{width: 400}}
            >
              <Form.Control ref={fprice} style={{height: 60}} type="text" placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>
        </div> 

        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}

        <Button type="submit" className="sidebarButton"><span>Post Food</span></Button>

      </Form>
        {/* <form className="rightbarInfo">

          <Link to="/tablenew" style={{textDecoration: 'none'}}><Button /></Link>
          
        <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <Locate />
            </label>
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <Date />
            </label>
          </div>
          
          <button className="sidebarButton"><span>Post Job +</span></button>
        </form> */}
      </div>
    );
  };

  return (
    <div className="main">
      <div className="rightbarWrapper">
        <Rightbar />
      </div>
    </div>
  );
}