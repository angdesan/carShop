import React from 'react'
import {tabsHeader,data} from '../../../constants/constantes'
export const Tab = ({ title, active, onClick }) => {
    const tabClass = active ? "border-b-2 border-blue-500" : "";
    const textClass = active ? "text-blue-500" : "text-gray-500";
  
    return (
      <div
        className={`cursor-pointer py-2 px-4 ${tabClass} ${textClass}`}
        onClick={onClick}
      >
        {title}
      </div>
    );
  };