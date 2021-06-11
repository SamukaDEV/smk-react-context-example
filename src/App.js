import React, { useContext, useState, useEffect } from 'react';
import './style.css';
import AppContext from './context';
import Widget from './Widget';
const App = () => {
  const { example, setExample } = useContext(AppContext);
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
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="example">Example: </label>
        <input type="text" value={formText} onChange={handleChange} />
        <button>DO IT</button>
      </form>
      <Widget />
      <Widget />
      <Widget />
    </div>
  );
};
export default App;
