import React from "react";
import { Card, Row, Col, Dropdown, CardGroup } from "react-bootstrap";
import { BsLayers, BsStar } from "react-icons/bs";
import { FiArrowDownCircle, FiUser } from "react-icons/fi";

export default function Widgets() {
  return (

      <div className="widget-container">
     
            <div className="widgets-column">
              <div className="widget-item">
                  <div className="widget-title">+24K</div>
                  <div className="widget-title">View</div>
                  <div className="widget-content">+35K <BsLayers className="widget-icons" /></div>
              </div>
            </div>
            <div className="widgets-column">
              <div className="widget-item">
                  <div>+24K</div>
                  <div>Rated This App</div>
                  <div>+35K <BsStar className="widget-icons" /></div>
              </div>
            </div>
            <div className="widgets-column">
              <div className="widget-item">
                  <div>+24K</div>
                  <div>Visitors</div>
                  <div>+35K <FiUser className="widget-icons" /></div>
              </div>
            </div>
            <div className="widgets-column">
              <div className="widget-item">
                  <div>+24K</div>
                  <div>Visitors</div>
                  <div>+35K <FiUser className="widget-icons" /></div>
              </div>
            </div>
        </div>

  
  );
}
