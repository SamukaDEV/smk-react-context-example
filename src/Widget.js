import React, { useContext } from 'react';
import AppContext from './context';

export default function Widget(props) {
  const { example, setExample, theme } = useContext(AppContext);
  return (
    <div className="card" style={{ ...theme.card }}>
      <div style={{ minWidth: 30, alignItems: 'center', display: 'flex' }}>
        {props.enabled ? (
          <i className={'bi bi-lock' + theme.fill} />
        ) : (
          <i className={'bi bi-unlock' + theme.fill} />
        )}
      </div>
      <div>{example}</div>
    </div>
  );
}
