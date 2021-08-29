import React, { Component } from 'react';

class FooterTopArea extends Component {
    render() {
        return (
            <div>
                <div className="footer-top-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="footer-about-us">
                <h2><span>About us</span></h2>
                <p>Apple Inc. is an American multinational art corporation headquartered in Cupertino, California, that designs, develops, and sells used electronics, computer software, and online services.</p>
                <div className="footer-social">
                  <a href="#" target="_blank"><i className="fa fa-facebook" /></a>
                  <a href="#" target="_blank"><i className="fa fa-twitter" /></a>
                  <a href="#" target="_blank"><i className="fa fa-youtube" /></a>
                  <a href="#" target="_blank"><i className="fa fa-linkedin" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-menu">
                <h2 className="footer-wid-title">User Navigation </h2>
                <ul>
                  <li><a href="#">My account</a></li>
                  <li><a href="#">Order history</a></li>
                  <li><a href="#">Wishlist</a></li>
                  <li><a href="#">Vendor contact</a></li>
                  <li><a href="#">Front page</a></li>
                </ul>                        
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-menu">
                <h2 className="footer-wid-title">Categories</h2>
                <ul>
                  <li><a href="#">IPhone</a></li>
                  <li><a href="#">Ipad</a></li>
                  <li><a href="#">AirPad</a></li>
                </ul>                        
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-newsletter">
                <h2 className="footer-wid-title">Newsletter</h2>
                <p>Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!</p>
                <div className="newsletter-form">
                  <form action="#">
                    <input type="email" placeholder="Type your email" />
                    <input type="submit" defaultValue="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
        );
    }
}

export default FooterTopArea;