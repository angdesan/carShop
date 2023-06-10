import React, { useState } from "react";
import { Tab } from "./Tab";
import {tabs} from '../../../constants/constantes'
import { MyForm } from "../MyForm";
import { FormCard } from "../FormCard";
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
      <div>
        {activeTab==0 && (tabs[activeTab].component)}
        {activeTab==1 && (tabs[activeTab].component)}
        {activeTab==2 && (tabs[activeTab].component)}
        
      </div>
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
{/* <div>{tabs[activeTab].component}</div> */}
export default ComponentTab;
