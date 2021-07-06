import React from 'react';
import { Link } from "react-router-dom";
import { useGlobalContext } from '../Context';

function Navbar() {         
  const {cart} = useGlobalContext()
            return (
              <div id="nav">

                <div className="header">
                  <h2> <Link className="link" to="/">JUMIA</Link></h2>
                </div>
                <p>Login</p>
                <p>Help</p>
                <div className="logo"><Link to="/cart"> <span className="link count">
                  {
                    cart.length < 1 ? <>🛒</> : <>🛒{cart.length}</> 
                  }

                  </span></Link>
                  </div>
              </div>
            )
          }

export default Navbar
