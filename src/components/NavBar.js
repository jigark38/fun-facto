import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (  
      <ul className="nav">
            <li>
               <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
               <NavLink to="/about" activeClassName="active" >About Us</NavLink>
            </li>
            <li>
               <NavLink to="/facts" activeClassName="active" >Fun facts</NavLink>
            </li>
         </ul>
  )
}
export default NavBar;