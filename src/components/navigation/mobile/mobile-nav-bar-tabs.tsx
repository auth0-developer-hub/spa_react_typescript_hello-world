import React from "react";
import { MobileNavBarTab } from "./mobile-nav-bar-tab";

interface MobileNavBarTabsProps {
  handleClick: () => void;
}

export const MobileNavBarTabs: React.FC<MobileNavBarTabsProps> = ({
  handleClick,
}) => {
  return (
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab
        path="/profile"
        label="Profile"
        handleClick={handleClick}
      />
      <MobileNavBarTab
        path="/public"
        label="Public"
        handleClick={handleClick}
      />
      <MobileNavBarTab
        path="/protected"
        label="Protected"
        handleClick={handleClick}
      />
      <MobileNavBarTab path="/admin" label="Admin" handleClick={handleClick} />
    </div>
  );
};
