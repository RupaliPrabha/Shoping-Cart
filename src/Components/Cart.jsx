import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {  removecart,incrementquantity,decrementquantity, clearAll} from '../Features/ProductSlice';
import '../CSS/Cart.css'
import { Link } from 'react-router-dom';
const Cart = () => {
  const dispatch =useDispatch();
const cartItem=useSelector((state)=>state.product) ;
const subTotal=cartItem.cartvalue.reduce((total,item)=>total+ (item.price*item.quantity),0);




return (
 
  <>
  <h1>My Cart</h1>
{
  cartItem.cartvalue.length===0 ?(<p>Your Cart was Empty... 
    <p>Start Shopping<Link id='cartlink' to="/">Go to Home </Link> page</p> </p>):
   
  (
    <div className='cartdiv'>
    <div id='heading'>
    
    <button id='clearall' onClick={()=>dispatch(clearAll())}>Clear All</button>
    </div>
      {
      cartItem.cartvalue.map((val,indx)=>(
        <div  className='detailcart' key={indx}>
        <img src={val.image} alt="" />
        <div className='items'>
        <p> Title : {val.title}</p>
        <p>Price : {val.price}</p>
        </div >
        <div className='quantitydiv'> <button id='quantitybtn' onClick={()=>dispatch(incrementquantity(val.id))}>+</button>
        {val.quantity} 
        <button id='quantitybtn' onClick={()=>dispatch(decrementquantity(val.id))} >–</button></div>
        <p>Rs : {val.price*val.quantity}</p>
        <button id='deletebtn' onClick={()=>{dispatch(removecart(val.id))}}>X</button>
        </div> 
        ))
      }
      <p id='subtotal'>SubTotal: Rs.{Math.round(subTotal)}</p>
      
    </div>
  )

}

   
    
    </>
  )

}

export default Cart
