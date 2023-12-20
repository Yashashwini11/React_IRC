import React from 'react';
import { Link } from 'react-router-dom';
import flood from "../Assets/Images/flood.jpg";
import education from '../Assets/Images/education.webp';
import women from '../Assets/Images/women.jpg';
import poverty from '../Assets/Images/poverty.jpg';
import medical from '../Assets/Images/medical.webp';
import nonprofit from '../Assets/Images/nprofit.jpg';

function Dashboard() {
  return (
    <>
        <div className='entire'>

          <div className='sideapp'>
            <ul>.
              <Link to='/home'><li>HOME</li></Link>
              <li>DONATE MONEY</li>
              <li>START A FUNDRAISER</li>
            </ul>
            <div>
              <button className='logout'>LOG OUT</button>
            </div>
          </div>
        </div>
        <div>
          <nav className="navigation">
            <ul>
              <li className="sample"><a href="#">HopeHarvest</a></li>
              <li><a href="#">USER</a></li>
            </ul>
          </nav>
        </div>
        <div className='mainbox'>
         
        <div className="product-grid">
            <div className="product">
                <div className="zoom">
                    <img src={flood} alt="Product Image 1" style={{ height: '190px', width: '190px' }}/>
                <h2>NATURAL DISASTERS</h2>
                </div>
            </div>
            <div className="product">
                <div className="zoom">
                    <img src={education} alt="Product Image 2" style={{ height: '190px', width: '190px' }} />
                <h2>EDUCATION</h2>
                </div>
            </div>
            <div className="product">
                <div className="zoom">
                    <img src={women} alt="Product Image 3" style={{ height: '190px', width: '190px' }} />
                <h2>WOMEN</h2>
                </div>
            </div>
            <div className="product">
                <div className="zoom">
                    <img src={poverty} alt="Product Image 4" style={{ height: '190px', width: '190px' }} />
                <h2>POVERTY</h2>
                </div>
            </div>
            <div className="product">
                <div className="zoom">
                    <img src={medical} alt="Product Image 5" style={{ height: '190px', width: '190px' }} />
                <h2>MEDICAL CARE</h2>
                </div>
            </div>
            <div className="product">
                <div className="zoom">
                    <img src={nonprofit} alt="Product Image 6" style={{ height: '190px', width: '190px' }} />
                <h2>NON-PROFIT</h2>
                </div>
            </div>
        </div>

        </div>
    </>
  );
}

export default Dashboard;
