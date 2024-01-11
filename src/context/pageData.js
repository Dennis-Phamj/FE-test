import { createContext, useState } from "react";
import React from "react";

const pageDataContext = createContext([]);

export const PageDataProvider = ({ children }) => {
  const [pageData, setPageData] = useState([]);

  return (
    <pageDataContext.Provider value={{ pageData, setPageData }}>
      {children}
    </pageDataContext.Provider>
  );
};

export default pageDataContext;
