import "./post.css";
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import { MoreVert } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { format } from "timeago.js";
const PF = process.env.PUBLIC_FOLDER;

export default function Mappost( {posts} ) {

  return (
    <div>      

      {posts.map((user) => (
        <div key={user.post_id}>
          <div className="post">
            <div className="postWrapper">                
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src="../../../assets/person/1.jpeg"
                            alt=""
                        />
                        <span className="postUsername"></span>
                        <span className="postDate">{format(user.ftime)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postcenterText">
                        <span className="postText">
                        <b>Request for a {user.category}</b><br/>
                        {user.description}<br/>
                        {/* Location : {user.caddress} <br/> */}
                        {/* Contact No : {user.cno}<br/> */}
                        {/* Location : {user.tloca} <br/> */}
                        {/* Available Day : {user.tavail}<br/> */}
                        </span>
                    </div>
                        {/* <img className="postImg" src={PF + user.image} alt="" />http://localhost:4000/images/ */}
                        <img className="postImg" src={"http://localhost:4000/images/"+ user.image}  alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                    </div>
                    <div className="postBottomRight">
                        <ViewAgendaIcon />
                        <span className="postCommentText">Comments</span>
                    </div>
                </div>
            </div>
        </div>
        </div>          
      ))}       

    </div>

  );
  
}