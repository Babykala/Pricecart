import React from 'react';
import './product.css';
import {useLocation} from 'react-router-dom';


export default function Checkout() {
  const Location=useLocation();
  var items=Location.state.cartItems;
  console.log(items)
  return(
    <div className="cart-items">
      <h3 style={{textAlign:'center'}}>Cart Items</h3>
      <div>
        <table border={1}>
          <thead>
            <tr>
              <td>Id</td>
              <td>Product Items</td>
              <td>Quantity</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {items.map((ele)=>{
              <tr>
                <td>ele[0].id</td>
                <td>ele[0].name</td>
                <td>ele[0].price</td>
                <td>ele[0].discount</td>
              </tr>
              
            })}
          </tbody>
        </table>
      </div>
      
    </div>
  )
}


