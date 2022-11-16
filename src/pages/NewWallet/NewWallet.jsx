import React from "react";
import { Route, Routes } from "react-router-dom";

import AutoPhrase from "../../components/AutoPhrase";
import CustomPhrase from "../../components/CustomPhrase";
import ConfirmPhrase from "../../components/ConfirmPhrase";

import { data } from "./data";

function NewWallet() {
  const firstArr = [];
  data.forEach((element, index) => {
    if (index < 24 && !firstArr.includes(element)) {
      firstArr.push({ name: element, index });
    }
  });

  console.log(firstArr, "Lấy 24 phần tử trong data không trùng nhau");

  const secondArr = firstArr.slice(0, 18);

  console.log(secondArr, "Lấy 18 phần tử trong first arr không trùng nhau");
  const lastArr = [];

  let count = 0;
  for (let index = 0; index < 6; index++) {
    const obj = {
      list: secondArr.slice(count, count + 3).map((e) => e.name),
      primary: secondArr.at(count).index,
      "index-selected": -1,
    };
    count += 3;
    lastArr.push(obj);
  }

  console.log(lastArr, "Danh sách 6 phần tử");

  return (
    <Routes>
      <Route path="/" element={<AutoPhrase data={firstArr} />} />
      <Route path="/confirm" element={<ConfirmPhrase data={lastArr} />} />
      <Route path="/custom" element={<CustomPhrase data={firstArr} />} />
    </Routes>
  );
}

export default NewWallet;
