import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Invoices() {
  console.log("Invoices");
  return (
    <>
      <h2>Invoices Page</h2>
      <p>
        <Link to={"/invoices/contact"}> Create new invoice name</Link>
      </p>
      <div className="invoices-page">
        {/* <Routes>
          <Route path="/contact" elment={<Contact />}></Route> */}
        <div id="invoices-left">
          <ul>
            <li>
              <Link to={"/invoices/1"}>Google</Link>
            </li>
            <li>
              <Link to={"/invoices/2"}>Apple</Link>
            </li>
          </ul>
        </div>
        {/* </Routes> */}

        <div id="invoices-right">
          Select an Invoice
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
