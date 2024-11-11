import React from 'react';
import './Aim.css'; 

const Theory = () => {
  return (
    <div className="theory-container">
      <h2 className="theory-heading">Theory of Express.js Request and Response</h2>
      <p>
        Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to build web and mobile applications. The core functionality of Express.js revolves around handling HTTP requests and responses, which is fundamental in building APIs and web servers.
      </p>
      <ol className="theory-list">
        <li>
          <strong>Introduction to Express.js Request and Response:</strong>
          <span> Express.js simplifies the process of handling HTTP requests and responses. The `request` object contains information about the HTTP request, while the `response` object allows you to send a response back to the client. These objects are passed as parameters to route handler functions in Express.js.</span>
        </li>
        <li>
          <strong>Request Object (`req`):</strong>
          <span> The `request` object is used to capture information about the HTTP request, such as parameters, query strings, body data, headers, and cookies. It provides methods to access data sent by the client.</span>
        </li>
        <li>
          <strong>Response Object (`res`):</strong>
          <span> The `response` object allows you to send data back to the client. It provides methods like `res.send()`, `res.json()`, and `res.status()` to control the HTTP response, including setting the status code and content type.</span>
        </li>
        <li>
          <strong>Handling HTTP Methods:</strong>
          <span> Express.js handles various HTTP methods (GET, POST, PUT, DELETE, etc.) to determine the action to take based on the request. Each method corresponds to a different type of HTTP operation.</span>
        </li>
        <li>
          <strong>Route Handling:</strong>
          <span> In Express.js, routes are defined for different HTTP methods and URLs. For example, `app.get()` handles GET requests, `app.post()` handles POST requests, and so on. Each route can have its own logic to process the request and send a response.</span>
        </li>
        <li>
          <strong>Sending Responses:</strong>
          <span> Express provides methods to send responses in different formats. You can send a plain text response using `res.send()`, a JSON response using `res.json()`, or an HTML response using `res.render()` if templates are used.</span>
        </li>
        <li>
          <strong>Middleware in Express:</strong>
          <span> Middleware functions can be used to modify the request and response objects before they are processed by route handlers. These functions can perform tasks like authentication, logging, and error handling.</span>
        </li>
      </ol>
      <p>
        Understanding how to handle requests and responses in Express.js is essential for building scalable and interactive web applications. It forms the foundation for creating APIs, handling client-server interactions, and sending dynamic content to users.
      </p>
    </div>
  );
};

export default Theory;
