import Signin from "./components/Signin/signin";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import List from "./components/List/list";
import NotFound from "./components/notfound";
function App() {
  
  localStorage.setItem("auth",false)
  
  // const [auth, setAuth] = useState(false);
  
  function ProtectedRoute({  children }) {
    let auth=localStorage.getItem("auth")
    
    console.log(auth)
    if (auth) {
      console.log(auth)
      return children;
    }
    else return "Not Having Access";
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<NotFound></NotFound>}></Route>
          <Route path="/" element={<Signin></Signin>}></Route>
          <Route
            path="/list"
            element={
              <ProtectedRoute>
                <List></List>
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* <div className="App">
      <br></br>
      <br></br>
      <List></List>
    </div> */}
    </>
  );
}

export default App;
