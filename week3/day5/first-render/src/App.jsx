import { useState } from "react";
import "./App.css";
import GoalsList from "./GoalsList";

function App() {
  const today = new Date();
  return (
    <>
      <p>{`Today's Date: ${today.toLocaleDateString()} `}</p>
      <h1 className="header">First Render</h1>
      <p>
        React is a JavaScript library for building user interfaces, especially
        for web applications with dynamic and interactive content. It was
        developed by Meta and is based on a component-driven architecture,
        meaning UIs are built from reusable, independent pieces called
        components. React uses a virtual DOM to efficiently update only the
        parts of the page that change, making applications fast and responsive.
        It follows a declarative approach, allowing developers to describe what
        the UI should look like based on the current state, rather than manually
        controlling how it updates.
      </p>
      <GoalsList />
    </>
  );
}

export default App;
