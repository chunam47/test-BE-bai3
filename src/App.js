import "antd/dist/antd.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NewWallet from "./pages/NewWallet";

import "./shared/assets/scss/main.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NewWallet />} />
      </Routes>
    </div>
  );
}

export default App;
