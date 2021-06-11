import React, { useContext } from 'react';
import AppContext from './context';

export default function Widget(props) {
  const { example, setExample, theme } = useContext(AppContext);
  return (
    <div className="card" style={theme.card}>
      {props.enabled ? (
        <i className="bi bi-lock" />
      ) : (
        <i className="bi bi-unlock" />
      )}
      {example}
    </div>
  );
}
