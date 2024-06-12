import React, { useState } from "react";
import logo from "../assets/navbar/logo.svg";
import search from "../assets/navbar/Search.svg";
import avatar from "../assets/navbar/Avatar.svg";
import heart from "../assets/navbar/Heart.svg";
import cart from "../assets/navbar/Shopping cart.svg";
import TemporaryDrawer from "./Drawer";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallIcon from "@mui/icons-material/CallOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import logo from '../assets/logo.png'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Login from "../components/dialogs/Login";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const logos = [
    { src: search, visible: false, link: "#" },
    { src: avatar, visible: false, link: "#" },
    { src: heart, visible: false, link: "#" },
    { src: cart, visible: true, link: "/cart" },
  ];

  const links = [
    { text: "Home", icon: HomeIcon, url: "./" },
    { text: "Shop", icon: ShoppingCartIcon, url: "./shop" },
    { text: "About", icon: InfoOutlinedIcon, url: "./about" },
    { text: "Contact", icon: CallIcon, url: "./contact" },
  ];

  const links2 = [
    { text: "Search", icon: SearchIcon, url: "./" },
    { text: "Favourite", icon: FavoriteBorderOutlinedIcon, url: "./" },
    { text: "Logout", icon: AccountCircleOutlinedIcon, url: "./" },
  ];

  const navigate = useNavigate();

  return (
    <div className="lg:px-10 px-2 py-3 mt-4 border-b border-primary-500 flex justify-between items-center">
      <div className="lg:hidden">
        <TemporaryDrawer links={links} links2={links2} />
      </div>
      <div>
        <img src={logo} onClick={() => navigate("/")} alt="Logo" />
      </div>
      <Login />
      <div className="lg:flex gap-4 justify-between hidden md:hidden md:block">
        {links.map((link, index) => (
          <Link key={index} to={link.url}>
            {link.text}
          </Link>
        ))}
      </div>
      <div className="flex gap-4">
        {logos.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt=""
            onClick={() => navigate(`${item.link}`)}
            className={`${
              !item.visible ? "hidden" : "block"
            } lg:block cursor-pointer`}
          />
        ))}
      </div>
      {showMenu && (
        <div
          className={`${"block absolute top-0 left-0 border bg-slate-100 border-red-300 pl-12 py-2 h-1/2 w-full"}`}
        >
          <div className="flex justify-end">
            <button onClick={() => setShowMenu(!showMenu)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
