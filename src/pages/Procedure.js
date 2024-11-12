import React from 'react';
import './Procedure.css'; 

const Procedure = () => {
  return (
    <div className="procedure-content">
      <h3>Procedure</h3>
      <p>Follow these steps to complete the experiment using Express.js for handling HTTP requests and responses:</p>
      <ol>
        <li>
          <strong>Read Express.js Documentation:</strong> Understand how to handle HTTP requests and responses in Express.js.
        </li>
        <li>
          <strong>Set Up Express.js Server:</strong> Create an Express server using <code>const app = express();</code> and define routes for different HTTP methods (GET, POST, PUT, DELETE).
        </li>
        <li>
          <strong>Handle GET Requests:</strong> Use <code>app.get()</code> to define a route for handling GET requests. Send data or messages back using <code>res.json()</code>.
        </li>
        <li>
          <strong>Handle POST Requests:</strong> Use <code>app.post()</code> to handle POST requests. Extract data from the request body using <code>req.body</code> and send a response back.
        </li>
        <li>
          <strong>Handle PUT Requests:</strong> Use <code>app.put()</code> to handle PUT requests. Update resources or data using <code>req.body</code> and send a response.
        </li>
        <li>
          <strong>Handle DELETE Requests:</strong> Use <code>app.delete()</code> to handle DELETE requests and send a response indicating the resource deletion.
        </li>
        <li>
          <strong>Handle Errors:</strong> Use error handling middleware to catch errors and send appropriate error messages to the client.
        </li>
        <li>
          <strong>Test API Endpoints:</strong> Use tools like Postman or the frontend simulation to test the GET, POST, PUT, and DELETE API endpoints.
        </li>
        <li>
          <strong>Observe Code Execution:</strong> Monitor the server logs and client-side responses to ensure the API is working as expected.
        </li>
      </ol>
    </div>
  );
};

export default Procedure;
