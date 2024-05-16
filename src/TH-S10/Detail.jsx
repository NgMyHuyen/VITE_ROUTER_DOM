import React from "react";
import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  return (
    <>
      <h6>Invoice # {id}</h6>
    </>
  );
}
