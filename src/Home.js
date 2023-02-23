import { useState } from 'react';
import BlogList from './BlogList';



function Home(){
    
    const [blogs , setBlogs] = useState([
        {title : "My work" , body : "lorem Ipsum" , id : 1 , author :"Aniket Bhura"} ,
        {title : "Web dev tips" , body : "lorem Ipsum" , id : 2 , author :"Aniket Bhura  "},
        {title : "My work" , body : "lorem Ipsum" , id : 3 , author :"Aniket Bhura"}
    ])
   
    return (
    <div className='home'>
      <BlogList blogs = {blogs} title = "All Blogs"></BlogList>
    </div>   

 );
}

export default Home;