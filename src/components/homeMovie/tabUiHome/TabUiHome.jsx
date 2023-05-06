import React from "react";
import "./TabUiHome.scss";

const TabUiHome = ({ tabs, currentTab, handleTabChange, TabsName }) => {
  return (
    <div className="TabUiHome">
      <ul className="tabs">
        <h3 className="TabUiHome__title">{TabsName}</h3>
        <div className="TabUiHome__name">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`tabui-item ${currentTab === tab.name ? "active" : ""}`}
              onClick={() => handleTabChange(tab.name)}
            >
              {tab.title}
            </li>
          ))}
        </div>
      </ul>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div key={index}>{currentTab === tab.name ? tab.content : null}</div>
        ))}
      </div>
    </div>
  );
};

export default TabUiHome;
