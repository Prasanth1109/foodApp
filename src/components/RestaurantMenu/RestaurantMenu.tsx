import React from "react";
import "./RestaurantMenu.scss";
import tamfood from "../../assets/images/tamfood.svg";
import Icon1 from "../../assets/images/logo.png";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

export default function RestaurantMenu() {
  function RestaurantHeader() {
    return (
      <div className="headerdesign">
        {/* <div >  */}
        <img className="tamfood" src={tamfood} alt="tamfood" />
        {/* <h4 className='logoname'>TamFood</h4> */}
        {/* </div> */}
        <div className="flex-child2">
          <h1>
            SELECT<span className="head-color"> RESTAURANT </span>TO BROWSE MENU
          </h1>
        </div>
      </div>
    );
  }

  function RestaurantBody() {
    return (
      <div className="bodybackground1">
        <Row>
          <Col>
            <div className="cardData">
              <Link to="/SouthIndianFood">
                <img className="icon1" src={Icon1} alt="dwdd" />
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  return (
    <>
      <div>{RestaurantHeader()}</div>
      <div>{RestaurantBody()}</div>
    </>
  );
}
