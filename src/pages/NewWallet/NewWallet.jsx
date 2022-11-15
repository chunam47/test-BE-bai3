import React from "react";
import { Route, Routes } from "react-router-dom";

import AutoPhrase from "../../components/AutoPhrase";
import CustomPhrase from "../../components/AutoPhrase copy";
import ConfirmPhrase from "../../components/ConfirmPhrase";

import { data } from "./data";

function NewWallet() {
  const firstArr = [];
  data.forEach((element, index) => {
    if (index < 24 && !firstArr.includes(element)) {
      firstArr.push({ name: element, index });
    }
  });

  const secondArr = firstArr.slice(0, 18);

  const lastArr = [];

  let count = 0;
  for (let index = 0; index < 6; index++) {
    const obj = {
      list: secondArr.slice(count, count + 3).map((e) => e.name),
      primary: secondArr.at(count).index,
    };
    count += 3;
    lastArr.push(obj);
  }

  return (
    <Routes>
      <Route path="/" element={<AutoPhrase data={firstArr} />} />
      <Route path="/confirm" element={<ConfirmPhrase data={lastArr} />} />
      <Route path="/custom" element={<CustomPhrase />} />
    </Routes>
  );
}

export default NewWallet;
