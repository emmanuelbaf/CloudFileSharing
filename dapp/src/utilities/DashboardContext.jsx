// DashboardContext.js
import React, { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [uploadCount, setUploadCount] = useState(0);

  return (
    <DashboardContext.Provider value={{ uploadCount, setUploadCount }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
