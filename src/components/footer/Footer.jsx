import React from "react";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="flex  items-center justify-center">
        <hr className="h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
      </div>
      <div className="flex items-center justify-around pt-4">
        <div>
          <img className="h-20" src={logo} alt="logo" />
        </div>
        <div>
          <p>Copyright &copy; {year} page by Hüseyin ERİKCİ</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
