import { Breadcrumb, Button, Drawer } from "antd";
import React, { useState } from "react";
import "react-spring-bottom-sheet/dist/style.css";
import { IconCoppy, IconCopySaved } from "../../shared/assets/images";

import { RightOutlined } from "@ant-design/icons";

import { Link, useNavigate } from "react-router-dom";
import "./AutoPhrase.scss";

const AutoPhrase = (props) => {
  const { data } = props;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const breadcrumbArr = [
    {
      text: "",
      link: "/",
    },
    {
      text: "Create New Wallet",
      link: "",
    },
  ];

  const onClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    navigate("/confirm");
  };

  return (
    <>
      <Breadcrumb separator="<" className="breadcrumb">
        {breadcrumbArr.map((bred, index) => (
          <Breadcrumb.Item key={index}>
            <Link to={bred.link}>{bred.text}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <div className="main">
        <h2 className="main__title">Auto Gen Seed Phrase?</h2>
        <div className="tag">
          {data.map((item, index) => (
            <div className="tag__item" key={index}>
              <span>{index + 1}</span>
              <p>{item.name}</p>
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
        <Button type="primary" className="submit--blue" onClick={handleNext}>
          next
        </Button>
      </div>
    </>
  );
};

export default AutoPhrase;
