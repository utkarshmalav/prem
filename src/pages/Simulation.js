import React, { useState } from 'react';
import './Simulation.css';

function Simulation() {
  const [requestType, setRequestType] = useState('');
  const [requestData, setRequestData] = useState('');
  const [response, setResponse] = useState('');

  const handleRequest = async (e) => {
    e.preventDefault();

    if (!requestType) {
      setResponse('Please select a request type.');
      return;
    }

    let apiUrl = `http://localhost:5000/api/${requestType.toLowerCase()}`;

    const options = {
      method: requestType,
      headers: { 'Content-Type': 'application/json' },
      ...(requestType === 'POST' || requestType === 'PUT' ? { body: JSON.stringify({ data: requestData }) } : {}),
    };

    try {
      const res = await fetch(apiUrl, options);
      const data = await res.json();
      setResponse(data.message || data.updatedData || data.data || 'Success');
    } catch (error) {
      setResponse('Error occurred while performing the request.');
    }
  };

  return (
    <div className="simulation-container">
      {/* Request Section */}
      <div className="request-section">
        <h2>Request Simulation</h2>
        <form onSubmit={handleRequest}>
          <div className="form-group">
            <label>Select Request Type:</label>
            <select value={requestType} onChange={(e) => setRequestType(e.target.value)} required>
              <option value="">-- Select Request Type --</option>
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </div>

          {(requestType === 'POST' || requestType === 'PUT') && (
            <div className="form-group">
              <label>Data (for POST/PUT requests):</label>
              <textarea
                value={requestData}
                onChange={(e) => setRequestData(e.target.value)}
                rows="4"
                placeholder="Enter request data"
              />
            </div>
          )}

          <button type="submit" className="execute-button">Send Request</button>
        </form>
      </div>

      {/* Steps Section */}
      <div className="steps-section">
        <h2>Steps to Execution</h2>
        <p>1. Select the request type (GET, POST, PUT, DELETE).</p>
        <p>2. Optionally, provide data for POST or PUT requests.</p>
        <p>3. Click the "Send Request" button to execute the request.</p>
        <p>4. The response from the server will be displayed in the Response section.</p>
      </div>

      {/* Response Section */}
      <div className="response-section">
        <h2>Response</h2>
        <div className="result-box">
          {response ? <p>{response}</p> : <p>No request sent yet.</p>}
        </div>
      </div>
    </div>
  );
}

export default Simulation;
