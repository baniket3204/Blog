import { useState } from "react";
import { useHistory } from "react-router-dom";

function Create(){

    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState("mario");
    const [isPending , setIsPending] = useState(false);
    
    const history = useHistory();
    const handleSubmit = (e) =>{
     e.preventDefault();
     const blog = {title , body , author};
     setIsPending(true);

     fetch("http://localhost:8000/blogs" , {

        method : "POST" ,
        body : JSON.stringify(blog) ,
        headers : {"content-Type" : "application/json"}
        }).then( ()=>
         {
            console.log("new blog added");
            setIsPending(false);
            history.push("/");
         }
        )}

    return(
    <div className="create">
     <h2>Add new Blog</h2>        
     <form onSubmit={handleSubmit}>
        <label>Blog title : </label>
        <input 
          type="text"
          required
          value = { title }
          onChange = {(e) => setTitle(e.target.value)}
        />
        <label>Blog body : </label>
        <textarea 
          required
          value = {body}
          onChange = {(e) => setBody(e.target.value)}
        />
        <select value ={author} onChange = {(e) => setAuthor(e.target.value)}>
             <option value="yoshi">yohsi</option>
             <option value="mario">mario</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding Blog</button>}
     </form>
    </div>
    );
}

export default Create;