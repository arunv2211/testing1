import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminlogin from "./components/login/Adminlogin";
import Home from "./components/Dashboard/Home/Home";
import Dashboard from "./components/Dashboard/Home/Dashboard";
import Create from "./components/Pages/Create";
import Detail from "./components/Dashboard/Detail";
import Edit from "./components/Dashboard/Edit";

function App() {
  return (
    <div className="App">

      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />

          <Route path="/Dashboard/create" element={<Create />}></Route>

          <Route path="/Dashboard/detail" element={<Detail />}></Route>
          <Route path="/Dashboard/edit" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter> */}


      {/* <Home /> */}
      {/* <Adminlogin />      */}
      <Dashboard />
      {/* <Create /> */}
      {/* <Detail /> */}
      {/* <Edit /> */}
    </div>
  );
}

export default App;
