import React from "react";

export default function Card({ title, content, number }) {
  return (
    <>
      <h4>{title}</h4>
      <p>{content}</p>
      <p>{`Card #${number}`}</p>
    </>
  );
}
