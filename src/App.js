import React, { useContext, useState, useEffect } from 'react';
import './style.css';
import AppContext from './context';
import Widget from './Widget';
import StyleTheme from './styles';

const App = () => {
  const { example, setExample, theme, setTheme } = useContext(AppContext);
  const [formText, setFormText] = useState('');
  useEffect(() => {
    console.log('context here: ', example);
  }, [example]);

  const handleChange = e => {
    setFormText(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setExample(formText);
    setFormText('');
  };

  return (
    <div className="App container" style={theme.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="example">Example: </label>
        <input type="text" value={formText} onChange={handleChange} />
        <button>DO IT</button>
      </form>
      <div>{JSON.stringify(theme)}</div>
      <button onClick={() => {}}>Toggle Theme</button>
      <Widget />
      <Widget />
      <Widget />
    </div>
  );
};
export default App;
