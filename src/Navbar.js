import {Link} from "react-router-dom";


function Navbar(){
  return(
    <nav className="navbar">
        <h1>Aniket's Blog</h1>
        <div className="links">
            <Link to = "/">Home</Link>
            <Link to = "/Create">New Blog</Link>
            <Link to = "/howto">How To</Link>

        </div>
    </nav>
  );
}

export default Navbar;