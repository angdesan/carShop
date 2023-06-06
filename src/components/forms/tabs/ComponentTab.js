import React, { useState } from "react";
import { Tab } from "./Tab";
import {tabs} from '../../../constants/constantes'
const ComponentTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleNextClick = () => {
    setActiveTab((prevTab) => prevTab + 1);
  };


  return (
    <div>
      <div className="flex border-b mb-4">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            title={tab.title}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <div>{tabs[activeTab].component}</div>
      {activeTab < tabs.length - 1 && (
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
          onClick={handleNextClick}
        >
          Siguiente
        </button>
      )}
    </div>
  );
};

export default ComponentTab;
