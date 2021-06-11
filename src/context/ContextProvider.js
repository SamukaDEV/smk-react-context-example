import React, { useState } from 'react';
import StyleTheme from '../styles';

import AppContext from '.';
const ContextProvider = ({ children }) => {
  const [example, setExample] = useState('Default value');
  const [theme, setTheme] = useState(StyleTheme.light);
  const context = {
    setExample,
    example,
    theme,
    setTheme
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
export default ContextProvider;
