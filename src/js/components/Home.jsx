import React, { Component } from 'react';
import '../../assets/css/home.scss';
import onComputer from '../../images/onComputer.jpg';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="body-container">
                <div className= "intro">
           
                    <div id="welcome">
                        <h1>Welcome to Banka</h1>
                        <p>Banka is a light-weight core banking application that powers banking operations like account
                        creation, customer deposit and withdrawals.</p>
                        <a href="/signup"><button>Get started</button></a>
                    </div>
                </div> 
  
                <div className="right-side">
                    <div id="photo">
                        <img src={onComputer} />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;