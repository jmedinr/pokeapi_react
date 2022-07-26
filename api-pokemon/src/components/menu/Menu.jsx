import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TabMenu } from "primereact/tabmenu";
import { Image } from "primereact/image";
import { List } from "../list/List";
import "./Menu.css";

const Menu = () => {
  const userName = "user";
  const items = [
    { label: "Pokemon List", icon: "pi pi-fw pi-list", url : ["/list"] },
    { label: "Search", icon: "pi pi-fw pi-search" },
    { label: "Favoritos", icon: "pi pi-fw pi-star" },
    {
      separator: true,
    },
    {
      label: userName,
      icon: "pi pi-fw pi-user",
    },
    {
      label: "Quit",
      icon: "pi pi-fw pi-sign-out",
    },
  ];

  return (
    <BrowserRouter>
      <div className="card">
        <Image
          src="https://media.vandal.net/i/1200x630/10-2021/2021105724573_1.jpg"
          alt="Image"
          width="250"
        />
        <TabMenu model={items} />
      </div>
      <Routes>
        <Route path="/list" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Menu;
