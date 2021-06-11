import React, { useContext, useState, useEffect } from 'react';
import './style.css';
import AppContext from './context';
import Widget from './Widget';
import StyleTheme from './styles';

const App = () => {
  const { example, setExample, theme, setTheme } = useContext(AppContext);
  const [formText, setFormText] = useState('');
  useEffect(() => {
    // console.log('CCC: ', example);
  }, [example]);

  const handleChange = e => {
    setExample(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setExample(formText);
    setFormText('');
  };

  return (
    <div className="App container" style={theme.container}>
      <form onSubmit={handleSubmit}>
        <div htmlFor="example" style={{ fontSize: 30, ...theme.text }}>
          Theme Manager
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here..."
            value={example}
            onChange={handleChange}
          />
        </div>
        {/* <button>DO IT</button> */}
      </form>
      {/* <div>{JSON.stringify(theme)}</div> */}
      <button
        style={theme.button}
        onClick={() => {
          if (StyleTheme.light === theme) {
            setTheme(StyleTheme.dark);
          } else {
            setTheme(StyleTheme.light);
          }
        }}
      >
        Toggle Theme
      </button>
      <div style={{ position: 'absolute', top: 10, right: 10, ...theme.text }}>
        Theme: {theme.name}
      </div>
      <div style={{ marginTop: 10 }}>
        <Widget />
        <Widget />
      </div>
    </div>
  );
};
export default App;
