import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

const FormContextProvider = ({ children }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);

  return (
    <MyContext.Provider value={{ 
        errors, 
        setErrors,
        userData,
        setUserData,
        finalData,
        setFinalData }}>
      {children}
    </MyContext.Provider>
  );
};

const useFormContext = () => {
    const context = useContext(MyContext);
    if (!context) {
      throw new Error('useMyContext debe ser utilizado dentro de un MyContextProvider');
    }
    return context;
  };
  
  export { FormContextProvider, useFormContext };
