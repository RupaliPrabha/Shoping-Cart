import React from 'react';
import {useSelector} from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom';
import '../CSS/Cart.css';

const Header = () => 
{
const productstate=useSelector((state)=>state.product);
  return (
    <div>
        <nav >
        <ul className="header">
        <li>
        <Link to="/">Home </Link>
        </li>
        <li>   
        <button id="cart"> 
        <Link to="/Cart" ><FaShoppingCart className='icon' /> {productstate.cartvalue.length}</Link> 
        </button>
        </li>
        </ul>
            
    </nav>
    </div>
  )
}

export default Header
