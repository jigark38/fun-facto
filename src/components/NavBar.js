import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (  
      <ul class="nav">
            <li>
               <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
               <NavLink to="/about" activeClassName="active" >About Us</NavLink>
            </li>
         </ul>
  )
}
export default NavBar;