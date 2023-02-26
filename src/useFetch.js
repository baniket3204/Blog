import {useState , useEffect} from 'react';

const useFetch = (url) =>{
     
   const [data , setData] = useState(null)
   const [isPending , setIsPending] = useState(true);
   const [error , setError] = useState(null);

    useEffect(()=>{
      setTimeout( () => {
        fetch(url)
      .then(response => {
        if(!response.ok)
        {
          throw Error("could not fetch resource")
        }
        return response.json(); 
      })
      .then((data) => {
      setData(data)
      setIsPending(false)
      })
      .catch( err =>{
        setIsPending(false);
        setError(err.message);
      })
      } , 1000);
      
    } ,[url]);

    return {data , isPending , error};

}
export default useFetch;