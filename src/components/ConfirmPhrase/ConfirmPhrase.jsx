import { Breadcrumb, Button, Checkbox, Drawer, Form } from "antd";
import Link from "antd/lib/typography/Link";
import React, { useState } from "react";
import "react-spring-bottom-sheet/dist/style.css";
import { IconTick } from "../../shared/assets/images";

import { DownOutlined, RightOutlined } from "@ant-design/icons";

import CheckableTag from "antd/lib/tag/CheckableTag";
import "./ConfirmPhrase.scss";

const ConfirmPhrase = (props) => {
  const { data } = props;
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

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

  const onChange = (checkedValues) => {};

  const options = [
    {
      label:
        "Metanode cannot recover your seed phrase. You should back up your seed phrase and keep it safe, it's your responsibility.",
      value: 1,
    },
    {
      label:
        "Your transaction data is one of the most important security keys which is needed for every incurred transaction. You should back up your data automatically and secure back up file with a strong pasword.",
      value: 2,
    },
    {
      label:
        "To keep your backup file safe, you should also keep secret your back up location and secure it.",
      value: 3,
    },
  ];

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

  const onFinish = (values) => {
    console.log(values);
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
          {data.map((item, index) => (
            <div className="card-tag" key={index}>
              <p>{item.primary}</p>
              {item.list.map((tag, index) => (
                <CheckableTag
                  key={index}
                  checked={selectedTags.indexOf(tag) > -1}
                  onChange={(checked) => handleChange(tag, checked)}
                >
                  {tag}
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
        <Drawer
          placement="bottom"
          onClose={onClose}
          open={open}
          height="auto"
          closable
          closeIcon={
            <DownOutlined style={{ fontSize: "16px", color: "red" }} />
          }
        >
          <div className="content-drawer">
            <img src={IconTick} alt="coppy" />
            <p className="content-drawer__title">
              Your wallet has been created!
            </p>
          </div>
          <Form
            form={form}
            initialValues={{
              name: "",
            }}
            onFinish={onFinish}
          >
            <Form.Item name="name">
              <Checkbox.Group options={options} onChange={onChange} />
            </Form.Item>
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !form.isFieldsTouched(true) ||
                    form.getFieldValue("name").length < 3
                  }
                  className="submit--blue submit-drawer"
                >
                  i understand
                </Button>
              )}
            </Form.Item>
          </Form>
        </Drawer>
      </div>
    </>
  );
};

export default ConfirmPhrase;
