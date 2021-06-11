import React, { useContext } from 'react';
import AppContext from './context';

export default function Widget() {
  const { example, setExample, theme } = useContext(AppContext);
  return (
    <div className="card" style={theme.card}>
      {example}
    </div>
  );
}
