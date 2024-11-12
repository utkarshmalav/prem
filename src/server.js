const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Array to store request logs
let requestLogs = [];

// Root route to display requests and actions on http://localhost:5000/
app.get('/', (req, res) => {
  // Show the requests made by the user along with their actions
  res.send(`
    <h1>Welcome to the Express API server</h1>
    <h2>Actions performed by users:</h2>
    <ul>
      ${requestLogs.map(log => `<li>${log}</li>`).join('')}
    </ul>
  `);
});

// API Routes
app.get('/api/get', (req, res) => {
  // Log the action performed
  const actionLog = `GET request received at ${new Date().toLocaleString()}`;
  requestLogs.push(actionLog); // Store the log
  res.json({ message: 'GET request received!' });
});

app.post('/api/post', (req, res) => {
  const { data } = req.body;
  // Log the action performed along with the data
  const actionLog = `POST request received at ${new Date().toLocaleString()} with data: "${data}"`;
  requestLogs.push(actionLog); // Store the log
  res.json({ message: 'POST request received!', data });
});

app.put('/api/put', (req, res) => {
  const { data } = req.body;
  // Log the action performed along with the data
  const actionLog = `PUT request received at ${new Date().toLocaleString()} with updated data: "${data}"`;
  requestLogs.push(actionLog); // Store the log
  res.json({ message: 'PUT request received!', updatedData: data });
});

app.delete('/api/delete', (req, res) => {
  // Log the action performed
  const actionLog = `DELETE request received at ${new Date().toLocaleString()}`;
  requestLogs.push(actionLog); // Store the log
  res.json({ message: 'DELETE request received!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
