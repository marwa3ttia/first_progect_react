import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
export const Navbar = () => {
    return (
        <div className = "navbar__section container d-flex">
            <h3> logo</h3>
            <ul className = " d-flex">
                <li className = "px-3 text-capitalize"><Link to ="/"> home</Link></li>
                {/* <li className = "px-3 text-capitalize"><Link to ="/about"> about</Link>  </li> */}
                <li className = "px-3 text-capitalize"><Link to ="/shop"> shop</Link> </li>
                <li className = "px-3 text-capitalize"> <Link to ="/count"> counter</Link></li>
                <li className = "px-3 text-capitalize"> <Link to ="/todo"> todo_list</Link></li>
  
            </ul>
        </div>
    )
}

export default  Navbar