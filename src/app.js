const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(process.cwd() + '/uplaods'));
app.use(cors());


// Define your mock data
const mockData = {
  message: 'Hello, this is a mock server response!',
  data: [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    // Add more mock data as needed
  ],
};

// Define a route to handle API requests
app.get('/api/data', (req, res) => {
  res.json(mockData);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Mock server is running at http://localhost:${port}`);
});
