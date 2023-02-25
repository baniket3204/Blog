import { useState , useEffect} from 'react';
import BlogList from './BlogList';

function Home(){
    
   const [blogs , setBlogs] = useState(null)
   const [isPending , setIsPending] = useState(true);
   const [error , setError] = useState(null);

    useEffect(()=>{
      setTimeout( () => {
        fetch("http://localhost:8000/blogs")
      .then(response => {
        if(!response.ok)
        {
          throw Error("could not fetch resource")
        }
        return response.json(); 
      })
      .then((data) => {
      setBlogs(data)
      setIsPending(false)
      })
      .catch( err =>{
        setIsPending(false);
        setError(err.message);
      })
      } , 1000);
      
    } ,[]);
   
    return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Blogs are being loaded .. </div>}
      {blogs && <BlogList blogs = {blogs} title = "All Blogs"></BlogList> }
    </div>   

 );
}

export default Home;