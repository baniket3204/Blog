
function Home(){

    const handleClick = () => {
        console.log("hello world");
    }

    return (

    <div className='home'>
    <h2>Home Page</h2>
    <button onClick = {handleClick}>click me</button>
   </div>   
 );
}

export default Home;