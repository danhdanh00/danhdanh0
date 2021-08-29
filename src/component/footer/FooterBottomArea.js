import React, { Component } from 'react';

class FooterBottomArea extends Component {
    render() {
        return (
            <div>
                <div className="footer-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="copyright">
                <p>© 2015 uCommerce. All Rights Reserved. </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-card-icon">
                <i className="fa fa-cc-discover" />
                <i className="fa fa-cc-mastercard" />
                <i className="fa fa-cc-paypal" />
                <i className="fa fa-cc-visa" />
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
        );
    }
}

export default FooterBottomArea;