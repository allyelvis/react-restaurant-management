import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { askChatGPT, askGemini } from './helpers/ai';
import Home from './components/Home';
import About from './components/About';
import './styles.css'; // Global styles
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [data, setData] = useState([]);

  const handleAskChatGPT = async () => {
    const answer = await askChatGPT(question);
    setResponse(answer);
  };

  const handleAskGemini = async () => {
    const answer = await askGemini(question);
    setResponse(answer);
  };

  const fetchData = async () => {
    const result = await axios.get('http://localhost:5000/api/data');
    setData(result.data);
  };

  const submitData = async (newData) => {
    await axios.post('http://localhost:5000/api/data', newData);
    fetchData(); // Refresh data
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <h1>AI-Assisted Restaurant Management</h1>
        <input
          type="text"
          placeholder="Ask a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={handleAskChatGPT}>Ask ChatGPT</button>
        <button onClick={handleAskGemini}>Ask Gemini</button>
        <div>
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
        <div>
          <h2>Data:</h2>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{JSON.stringify(item)}</li>
            ))}
          </ul>
        </div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
