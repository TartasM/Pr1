import React from "react";
import d from "./Post.module.css";


const Post = (props) => {
    return <div>
        <div>
            < img className = {d.image} src ='https://bipbap.ru/wp-content/uploads/2017/08/0447e02caa3a98459dcc5f7b5e8051cd.jpg' alt=" "/>
    </div>
        {props.message}

        <div className= {d.ithem} >Post</div>
        {props.Like}
        <span> Like </span>

        </div>
}
export default Post;