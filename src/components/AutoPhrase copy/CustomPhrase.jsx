import { Breadcrumb, Button, Drawer } from "antd";
import React, { useState } from "react";
import { IconCoppy, IconCopySaved } from "../../shared/assets/images";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

import { DownOutlined, RightOutlined } from "@ant-design/icons";

import "./CustomPhrase.scss";
import { Link, useNavigate } from "react-router-dom";

const arr = [
  {
    text: "",
    link: "/",
  },
  {
    text: "Create New Wallet",
    link: "",
  },
];

const data = [];
for (let i = 1; i <= 24; i++) {
  data.push({
    key: i,
    name: "Word",
  });
}

const CustomPhrase = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleCustom = () => {
    navigate("/custom");
  };
  return (
    <>
      <Breadcrumb separator="<" className="breadcrumb">
        {arr.map((bred, index) => (
          <Breadcrumb.Item key={index}>
            <Link to={bred.link}>{bred.text}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <div className="main">
        <Link to="/custom" className="main__title">
          Auto Gen Seed Phrase?
        </Link>
        <div className="tag">
          {data.map((e, index) => (
            <div className="tag__item" key={index}>
              <span>{e.key}</span>
              <p>{e.name}</p>
            </div>
          ))}
        </div>
        <div className="saved">
          <p>
            Tap to Copy or Carefully write down your seed phrase and store it in
            a safe place
          </p>
          <img src={IconCoppy} alt="" onClick={() => setOpen(true)} />
          <Drawer placement="bottom" onClose={onClose} open={open} height={281}>
            <div className="content-drawer">
              <img src={IconCopySaved} alt="coppy" />
              <p className="content-drawer__title">Saved to clipboard</p>
            </div>
            <div></div>
          </Drawer>
        </div>
      </div>

      <div className="submit">
        <div className="submit__title">
          <h5>How does this work?</h5>
          <RightOutlined />
        </div>
        <Button type="primary" className="submit--blue">
          next
        </Button>
      </div>
    </>
  );
};

export default CustomPhrase;
