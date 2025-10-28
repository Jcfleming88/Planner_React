import React from "react";
import { Header } from "./navigation/header";
import { Menu } from "./navigation/menu";

export const PageLayout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="page-layout">
      <Header handleToggle={handleMenuToggle} />
      <Menu isOpen={isOpen} />
      <div className="main">
        {children}
      </div>
    </div>
  );
};
