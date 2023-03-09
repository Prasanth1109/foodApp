import { Reply, Search, ShoppingCartOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import { Button } from "@mui/material";
import Logo from "../../assets/images/logo.png";
import "./SouthIndianFood.scss";
import { Col, Row } from "antd";
import { products } from "../../assets/foodData/foodDatas";
import ProductCard from "../product-card/ProductCard";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { Link } from "react-router-dom";

export default function SouthIndianFood() {
  const [foodInput, setCategory] = useState("ALL");
  const [allProducts] = useState(products);

  const headerContent = () => {
    return (
      <div className="headBarRow headbar-fixed">
        <div>
          <img className="logo" src={Logo} alt="Logo" />
          {/* <h4 className='logoname'>TamFood</h4> */}
        </div>
        <div className="flex-child">
          <h1>
            BROWSE <span className="h-color">MENU</span> &{" "}
            <span className="h-color">ADD</span> TO CART
          </h1>
        </div>
        <div className="flex-child1">
          <Reply className="block round1" />
          <Search className="block round2" />
          <Badge className="block shape" badgeContent={4} color="primary">
            <ShoppingCartOutlined className="cartallign" />
            <span className="content">CHECKOUT</span>
          </Badge>

          <Link to="/Login">
            <PersonRoundedIcon className="user" />
          </Link>
        </div>
      </div>
    );
  };

  const menuContent = () => {
    return (
      <div className="buttonOption Optionbar-fixed">
        <div className="optionAllign">
          <Button
            className={foodInput === "ALL" ? "button-all" : "button-all-1"}
            onClick={() => setCategory("ALL")}
            variant="contained"
          >
            ALL
          </Button>

          <Button
            className={
              foodInput === "BREAKFAST" ? "button-all" : "button-all-1"
            }
            onClick={() => setCategory("BREAKFAST")}
            variant="contained"
          >
            BREAKFAST
          </Button>

          <Button
            className={foodInput === "LUNCH" ? "button-all" : "button-all-1"}
            onClick={() => setCategory("LUNCH")}
            variant="contained"
          >
            LUNCH
          </Button>

          <Button
            className={foodInput === "DINNER" ? "button-all" : "button-all-1"}
            onClick={() => setCategory("DINNER")}
            variant="contained"
          >
            DINNER
          </Button>
        </div>
      </div>
    );
  };

  const bodyContent = () => {
    return (
      <div className="bodybackground">
        {foodInput === "ALL" && all()}
        {foodInput === "BREAKFAST" && breakFast()}
        {foodInput === "LUNCH" && lunch()}
        {foodInput === "DINNER" && dinner()}
      </div>
    );
  };

  const all = () => {
    return (
      <>
        <div className="foodHead">BREAKFAST</div>
        {breakFast()}
        <div className="foodHead">LUNCH</div>
        {lunch()}
        <div className="foodHead">DINNER</div>
        {dinner()}
      </>
    );
  };

  const breakFast = () => {
    let findBreakFast = allProducts.filter(
      (food) => food.category === "BREAKFAST"
    );
    return (
      <Row className="scrollmenu1" gutter={10}>
        {findBreakFast?.map((item: any) => (
          <Col className="body-of-contant" span={4}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    );
  };

  const lunch = () => {
    let findLunch = allProducts.filter((food) => food.category === "LUNCH");
    return (
      <Row className="scrollmenu1" gutter={10}>
        {findLunch?.map((item: any) => (
          <Col className="body-of-contant" span={4}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    );
  };

  const dinner = () => {
    let findDinner = allProducts.filter((food) => food.category === "DINNER");
    return (
      <Row className="scrollmenu1" gutter={10}>
        {findDinner?.map((item: any) => (
          <Col className="body-of-contant" span={4}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <>
      <div className="fixedbar">
        <div>{headerContent()}</div>
        <div>{menuContent()}</div>
      </div>
      <div>{bodyContent()}</div>
    </>
  );
}
