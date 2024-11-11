import React from 'react';
import './References.css';

const References = () => (
  <div className="references-container">
    <h2 className="references-heading">References</h2>
    
    <p>Here are some useful resources to learn more about Express.js:</p>

    <div className="section">
      <h3>URLs</h3>
      <ul>
        <li>
          <a href="https://expressjs.com/en/starter/installing.html" target="_blank" rel="noopener noreferrer">
            Express.js Official Documentation: Installation
          </a>
        </li>
        <li>
          <a href="https://www.tutorialspoint.com/expressjs/expressjs_quick_guide.htm" target="_blank" rel="noopener noreferrer">
            TutorialsPoint: Express.js Quick Guide
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction" target="_blank" rel="noopener noreferrer">
            MDN Web Docs: Express/Node.js Introduction
          </a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/expressjs/" target="_blank" rel="noopener noreferrer">
            GeeksforGeeks: Express.js Overview
          </a>
        </li>
      </ul>
    </div>

    <div className="section">
      <h3>Books</h3>
      <ul>
        <li>
          <strong>Pro Express.js</strong> by Azat Mardan - This book provides in-depth coverage of Express.js and its application in building real-world projects.
        </li>
        <li>
          <strong>Express in Action</strong> by Evan Hahn - A practical guide to building web applications using Express.js, focusing on real-world examples.
        </li>
        <li>
          <strong>Learning Node.js</strong> by Marc Wandschneider - This book covers Node.js and Express.js fundamentals, including creating web servers and working with APIs.
        </li>
      </ul>
    </div>
  </div>
);

export default References;
