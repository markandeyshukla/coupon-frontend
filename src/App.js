import React from "react";
import AppRouter from "./AppRouter.js";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
