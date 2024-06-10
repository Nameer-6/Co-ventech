import React from "react";
import Heading from "../../UI/Heading";
import articleImage from "../../assets/Article_Image.png";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";
import BlogsInner from "./BlogsInner";
const data = [
    {
        id : "FutureOfQAAutomationWithAI",
        image : blog1,
        title : "The Future of QA Testing: Integrating AI for Enhanced Efficiency",
        date : "Jan 10, 2022"
    },
    {
        id : "HowAICanMakeSoftwareTestingFaster",
        image : blog2,
        title : "How AI Can Make Software Testing Faster, Easier, and Better",
        date : "Jan 10, 2022"
    },
    {
        id : "EmbracingTheFullStackPath",
        image : blog3,
        title : "Embracing the Full Stack Path: A Software Engineer's Guide to Mastery",
        date : "Jan 10, 2022"
    },
    {
        id : "NavigatingTheFuture",
        image : blog4,
        title : "Navigating the Future: How to Excel as a QA Engineer in the World of Tech",
        date : "Jan 10, 2022"
    },
]
const Blogs = () =>{
    return(
        <div className="">
        <div className="w-[90%] mx-auto mt-[5%]">
            <Heading heading = "Featured Articles"/>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-8">
                  {data.map(blog => <BlogsInner key = {blog.id} src = {blog.image} title = {blog.title} date = {blog.date} blog = {blog.id}/>  )}
            </div>
        </div>
        </div>
    )
}
export default Blogs;