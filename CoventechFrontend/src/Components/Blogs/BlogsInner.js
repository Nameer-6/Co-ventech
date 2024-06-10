import React from "react";
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

const BlogsInner = (props) =>{
    return(
        <div className="col-span-1 row-span-1 flex items-center justify-center">
            <Link to={`/blogs/${props.blog}`}>
            <div className="border hover:border-secondary rounded-lg py-8 px-4 w-full text-center h-96" >
            <img src={props.src} className="w-full rounded-lg"/>
            <h2 className="text-md md:text-md lg:text-md font-bold mt-4 text-left">{props.title}</h2>
            <div className="flex rounded-lg mt-8">
            <div className="">
                <img src={logo} className="w-8 mt-2" />
            </div>
            <div className="ml-4">
            <h3 className="text-md md:tex\t-md lg:text-md font-bold leading-8 md:leading-9 lg:leading-10 text-left m-0">
                Co-Ventech
            </h3>
                <p className="text-gray-500 font-normal leading-7 m-0">{props.date}</p>
            </div>
        </div>
            </div>
            </Link>
            
        </div>
    )
}
export default BlogsInner;