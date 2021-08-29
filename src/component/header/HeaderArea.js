import React, { Component } from 'react';

class HeaderArea extends Component {
    render() {
        return (
            <div>
                <div className="header-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="user-menu">
                <ul>
                  <li><a href="#"><i className="fa fa-user" /> My Account</a></li>
                  <li><a href="#"><i className="fa fa-heart" /> Wishlist</a></li>
                  <li><a href="cart.html"><i className="fa fa-user" /> My Cart</a></li>
                  <li><a href="checkout.html"><i className="fa fa-user" /> Checkout</a></li>
                  <li><a href="#"><i className="fa fa-user" /> Login</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
        );
    }
}

export default HeaderArea;