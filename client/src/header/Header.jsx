import "./header.css";
import React from 'react';
import { Link } from 'react-router-dom';
import memoriesText from '../header/3.jpg';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span id="arab99" className="headerTitleSm">ذكريات وصور</span>
        <span id="arab99" className="headerTitleLg"> منشية الكعيبر</span>
      </div>
      <div className="headerImgContainer">
        <Link to="/">
          <img src={memoriesText} alt="icon" className="headerImg" />
        </Link>
      </div>
    </div>
  );
}
