import React, { useContext } from 'react';
import AppContext from './context';

export default function Widget() {
  const { example, setExample } = useContext(AppContext);
  return (
    <div style={{ color: 'green', marginBottom: 12 }}>
      /* comment: {example} */
    </div>
  );
}
