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
        <label htmlFor="example">Widget Content</label>
        <div>
          <input
            type="text"
            placeholder="Type here..."
            value={example}
            onChange={handleChange}
          />
        </div>
        <button>DO IT</button>
      </form>
      {/* <div>{JSON.stringify(theme)}</div> */}
      <button
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
      <div style={{ marginTop: 10 }}>
        <Widget />
        <Widget />
        <Widget />
      </div>
    </div>
  );
};
export default App;
