import "./rightbar.css";
import Check from "./Check";
import Date from './Date'
import Locate from './Locate'
import Desc from './Desc'
// import { Link } from "react-router-dom";

import { useRef, useState } from "react";
import axios from 'axios' 

import { Button, Form, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

// import RightBoot from './RightBoot'
import { Dropdown } from 'semantic-ui-react'
import Select from 'react-select';
import Creatable from 'react-select/creatable';

const Options = [
    { value: 'Electrician ', label: 'Electrician' },
    { value: 'plumber ', label: 'plumber' },
    { value: 'Motor Mechanic ', label: 'Motor Mechanic' },
    { value: 'Cleaner ', label: 'Cleaner' },
    { value: 'IT Service ', label: 'IT Service' },
    { value: 'Other ', label: 'Other' },
  ]

export default function Rightbar() {

  const [cate, setCate] = useState([]);

  const saveData = (e) => {
    setCate(currentArray => [...currentArray, e[0].value]);
    // console.log(e)
  }
  console.log(cate);

  // const tcat = useRef();
  const tdesc = useRef();
  const tloca = useRef();
  const tavail = useRef();

  const postJob = async (e) => {
    e.preventDefault();

    const technician = {
      tcat: cate,
      tdesc: tdesc.current.value,
      tloca: tloca.current.value,
      tavail: tavail.current.value,
    }

    try{
      await axios.put("/service/technician/3", technician); 
    }
    catch(err) { 
      console.log(err); 
    }   

    window.location = '/technician';

  }

  const Rightbar = () => {
    return (
      <div className="rightbarmain">
        <h2 className="rightbarTitle">Job Information for Technician</h2>

        <Form className="rightbarInfo" onSubmit={postJob}>
          
        <div className="rightbarInfoItem">
          <Form.Group className="rightbarInfoKey" controlId="select" style={{width: 400, textDecoration: 'none'}}>        
            {/* <Form.Select isMulti ref={tcat} aria-label="Default select example" label="Select Category" style={{height: 60}}>
              <option value="Electrician ">Electrician</option>
              <option value="plumber ">plumber</option>
              <option value="Motor Mechanic ">Motor Mechanic</option>
              <option value="Cleaner ">Cleaner</option>
              <option value="IT Service ">IT Service</option>
              <option value="Other ">Other</option>
            </Form.Select> */}

          <Select
          onChange={e => {setCate(currentArray => [...currentArray, e[0].value])}} 
            options={Options} 
            isMulti   
            isSearchable  
            // onChange={e => {setCate(currentArray => [...currentArray, e[0].value])}} 
            // value={cate}
            // onChange={saveData}    
            placeholder='Select Category'           
          />

          </Form.Group>
        </div>

        <div className="rightbarInfoItem">
          <Form.Group className=" rightbarInfoKey" controlId="formBasicDescription">
            <FloatingLabel
              controlId="floatingInput"
              label="Description"
              className="mb-1"
              style={{width: 400, textDecoration: 'none'}}
            >
              <Form.Control ref={tdesc} style={{height: 60}} type="text"  placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>
        </div>

        <div className="rightbarInfoItem">
          <Form.Group className="rightbarInfoKey" controlId="formBasicLocation">
          <FloatingLabel
              controlId="floatingInput0"
              label="Location"
              className="mb-1"
              style={{width: 400}}
            >
              <Form.Control ref={tloca} style={{height: 60}} type="text" placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>
        </div> 

        <div className="rightbarInfoItem">
          <Form.Group className="rightbarInfoKey" controlId="formBasicLocation">
          <FloatingLabel
              controlId="floatingInput1"
              label="Available Days"
              className="mb-1"
              style={{width: 400}}
            >
              <Form.Control ref={tavail} style={{height: 60}} type="text" placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>
        </div> 

        <Button type="submit" className="sidebarButton"><span>Update Job</span></Button>

      </Form>

        {/* <form className="rightbarInfo">
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <Check />
              <RightBoot />
            </label>
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <Desc />
            </label>            
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <Locate />
            </label>
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              Select Available Date & Time Peroid: 
              <br/>
              <Date name="From"/>
              <Date name="To" />
            </label>
            
          </div>
          <button className="sidebarButton"><span>Update Job +</span></button>
        </form> */}

        {/* <form className="rightbarInfo" onSubmit={postJob}>

          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">tname</label>
            <input placeholder="tname" ref={tname}></input>
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">description</label>
            <input placeholder="tdesc" ref={tdesc}></input>
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">type</label>
            <input placeholder="ttype" ref={ttype}></input>
          </div>

          <button type="submit" style={{padding:15, margin: 10}}>job</button>

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