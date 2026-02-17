import React from "react";

export default function Sidebar() {
  const navItems = [
    "The Best Component",
    "The Most Reliable Component",
    "The Reusable Component",
    "The Clean Code Component",
  ];

  return (
    <nav className="sidebar">
      <h2 className="sidebar-title">Components</h2>
      <ul className="sidebar-nav">
        {navItems.map((item, index) => (
          <li key={index} className="sidebar-nav-item">
            <span className="sidebar-nav-number">{index + 1}</span>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
