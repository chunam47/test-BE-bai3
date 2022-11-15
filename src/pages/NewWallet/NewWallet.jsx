import React from "react";
import { Routes, Route } from "react-router-dom";
import AutoPhrase from "../../components/AutoPhrase";
import CustomPhrase from "../../components/AutoPhrase copy";
import ConfirmPhrase from "../../components/ConfirmPhrase";

function NewWallet(props) {
  return (
    <Routes>
      <Route path="/" element={<AutoPhrase />} />
      <Route path="/confirm" element={<ConfirmPhrase />} />
      <Route path="/custom" element={<CustomPhrase />} />
    </Routes>
  );
}

export default NewWallet;
