import { Breadcrumb, Button, Checkbox, Drawer } from "antd";
import Link from "antd/lib/typography/Link";
import React, { useState } from "react";
import "react-spring-bottom-sheet/dist/style.css";
import { IconTick } from "../../shared/assets/images";

import { RightOutlined } from "@ant-design/icons";

import CheckableTag from "antd/lib/tag/CheckableTag";
import "./ConfirmPhrase.scss";

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

for (let i = 1; i <= 6; i++) {
  data.push({
    key: i,
  });
}

const tagsData = [
  {
    id: "1",
    name: "word",
  },
  {
    id: "2",
    name: "word",
  },
  {
    id: "3",
    name: "word",
  },
];

const onChange = (checkedValues) => {};

const options = [
  "Metanode cannot recover your seed phrase. You should back up your seed phrase and keep it safe, it's your responsibility.",
  "Your transaction data is one of the most important security keys which is needed for every incurred transaction. You should back up your data automatically and secure back up file with a strong pasword.",
  "To keep your backup file safe, you should also keep secret your back up location and secure it.",
];

const ConfirmPhrase = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [selectedTags, setSelectedTags] = useState([]);
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
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
        <div className="header">
          <h2 className="main__title">Confirm Your Seed Phrase</h2>
          <span>2/6</span>
        </div>

        <div className="main__content">
          {data.map((e, index) => (
            <div className="card-tag" key={index}>
              <p>{e.key}</p>
              {tagsData.map((tag, index) => (
                <CheckableTag
                  key={index}
                  checked={selectedTags.indexOf(tag) > -1}
                  onChange={(checked) => handleChange(tag, checked)}
                >
                  {tag.name}
                </CheckableTag>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="submit">
        <div className="submit__title">
          <h5>How does this work?</h5>
          <RightOutlined />
        </div>
        <Button
          type="primary"
          className="submit--blue"
          onClick={() => setOpen(true)}
        >
          Submit
        </Button>
        <Drawer placement="bottom" onClose={onClose} open={open} height="auto">
          <div className="content-drawer">
            <img src={IconTick} alt="coppy" />
            <p className="content-drawer__title">
              Your wallet has been created!
            </p>
          </div>
          <Checkbox.Group options={options} onChange={onChange} />
          <Button type="primary" className="submit--blue submit-drawer">
            i understand
          </Button>
        </Drawer>
      </div>
    </>
  );
};

export default ConfirmPhrase;
