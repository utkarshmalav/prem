import React from 'react';
import './Procedure.css'; 

const Procedure = () => {
  return (
    <div className="procedure-content">
      <h3>Procedure</h3>
      <p>Follow these steps to complete the experiment using Node.js File System module:</p>
      <ol>
        <li>
          <strong>Read Node.js Documentation:</strong> Understand the available file system operations and methods.
        </li>
        <li>
          <strong>Import the 'fs' module:</strong> Use <code>require('fs')</code> to include the file system module in your code.
        </li>
        <li>
          <strong>Create or Open a File:</strong> Use <code>fs.open()</code> to create or open a file with appropriate flags.
        </li>
        <li>
          <strong>Read File Contents:</strong> Use <code>fs.readFileSync()</code> or <code>fs.readFile()</code> to read the contents of a file.
        </li>
        <li>
          <strong>Write Data to a File:</strong> Use <code>fs.writeFile()</code> to write data to the file.
        </li>
        <li>
          <strong>Check File Status:</strong> Use <code>fs.stat()</code> to retrieve information about the file, such as its size and modification time.
        </li>
        <li>
          <strong>Delete a File:</strong> Use <code>fs.unlink()</code> to delete a file from the system.
        </li>
        <li>
          <strong>Observe Code Execution:</strong> Pay attention to the code execution in your editor/IDE and check the console output for any errors or logs.
        </li>
        <li>
          <strong>Handle Errors:</strong> Always handle potential errors using <code>try-catch</code> or error-first callbacks to ensure smooth operation.
        </li>
      </ol>
    </div>
  );
};

export default Procedure;
