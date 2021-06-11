import React, { useState } from 'react';
import AppContext from '.';
const ContextProvider = ({ children }) => {
  const [example, setExample] = useState('Default value');
  const context = {
    setExample,
    example
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
export default ContextProvider;
