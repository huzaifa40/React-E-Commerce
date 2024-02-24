import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Nav = () => {
  const [menu, setMenu] = useState("shop")
  const { getTotalItems } = useContext(ShopContext)
  return (
    <div className="navbar flex justify-around border-b-2 border-black py-3">
      <div className="nav-logo flex items-center gap-4">
        <img src={logo} alt="" />
        <p className="font-bold text-3xl text-gray-700">SHOPPER</p>
      </div>
      <ul className="nav-menu flex gap-8 items-center font-semibold text-gray-800 text-xl cursor-pointer">
        <li onClick = {() => {
          setMenu("shop")}}>
            <Link to="/">Shop</Link>
            { menu === "shop"?
            <hr className="mt-1 w-13 h-1 rounded-xl bg-red-600" />
            : <></> }
        </li>
        <li onClick = {() => { 
          setMenu("men")}}>
            <Link to="/mens">Men</Link>
            { menu === "men"?
            <hr className="mt-1 w-13 h-1 rounded-xl bg-red-600" />
            : <></> }
        </li>
        <li onClick = {() => { 
          setMenu("women")}}>
            <Link to="/womens">Women</Link>
            { menu === "women"?
            <hr className="mt-1 w-13 h-1 rounded-xl bg-red-600" />
            : <></> }
        </li>
        <li onClick = {() => { 
          setMenu("kids")}}>
            <Link to="/kids">Kid</Link>
            { menu === "kids"?
            <hr className="mt-1 w-13 h-1 rounded-xl bg-red-600" />
            : <></> }
        </li>
      </ul>
      <div className="nav-login-cart flex gap-7 items-center">
        <button className="border-2 border-gray-500 text-gray-600 text-lg font-medium rounded-[34px] px-7 py-2">
        <Link to="/login">Login</Link>
        </button>
        <Link to="/cart"><img className="h-8" src={cart} alt="" /></Link>
        <div className="nav-cart-count flex text-[12px] mt-[-35px] ml-[-35px] bg-red-700 text-white border rounded-3xl px-[10px] py-1">
          {getTotalItems()}
        </div>
      </div>
    </div>
  );
};

export default Nav;
