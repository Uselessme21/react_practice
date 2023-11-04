import "./style.css";
import React, { useState } from "react"
import Navbar from "./Navbar";
import Card from "./Card";
 import NavOptions from "./navoptions";
import Menu from "./menuApi";

const Restaurant = () => {
    const [menuData,setmenuData]= useState(Menu)
    const [menuOption,setmenuOption]= useState(NavOptions)
  return (

    <>
      <Navbar menu={menuOption} />
      <Card menuData={menuData}/>
    </>
  );
};

export default Restaurant;
