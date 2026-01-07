import React, { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatarImage from '../assets/images/portrait.jpeg';
import '../assets/styles/Main.scss';

function Main() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setResponse('');

    // Static response
    setTimeout(() => {
      setResponse("I'm currently employed and saving my LLM inference budget for another project. I'd be happy to connect and discuss on LinkedIn if you have any questions! Also, this RAG+FastAPI backend setup is open source on my GitHub if you want to have a look at it.");
      setLoading(false);
    }, 500);

    // Backend connection (currently disabled)
    /*
    try {
      const res = await fetch('https://mpepito-promptme-backend.hf.space/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) {
        throw new Error('Failed to get response');
      }

      const data = await res.json();
      setResponse(data.answer);
    } catch (err) {
      setError('Failed to get response. Please check if the backend is running.');
    } finally {
      setLoading(false);
    }
    */
  };

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatarImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/MPepito" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/maïk-pasquier" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Maïk Pasquier</h1>
          <p>Software Engineer with a passion for Data Science and Finance</p>

          <div className="prompt-section">
            <form onSubmit={handleSubmit}>
              <div className="prompt-input">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask me a question..."
                  disabled={loading}
                />
                <button type="submit" disabled={loading || !query.trim()}>
                  {loading ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>

            {error && <div className="error-message">{error}</div>}
            {response && <div className="response-display">{response}</div>}
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/MPepito" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/maïk-pasquier" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;