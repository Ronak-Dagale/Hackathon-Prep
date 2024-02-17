const express = require('express');
const mongoose = require('mongoose');
const ideaServices=require('./services/ideaServices')
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
// Connect to MongoDB using mongoose
mongoose.connect('mongodb://localhost:27017/education')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));


  app.get('/ideas', async (req, res) => {
    console.log(1111)
    try {
      // Call the fetchIdeas function from the ideaService
      const ideas = await ideaServices.fetchIdeas();
      ideas.forEach((idea, index) => {
        console.log('Idea', index + 1, ':', idea);
    });
      res.json(ideas); // Send the fetched ideas as a JSON response
    } catch (error) {
      console.error('Error fetching ideas:', error);
      res.status(500).json({ error: 'Internal server error' }); // Send an error response if there's an error
    }
  });

app.listen(PORT, () => {
    
  console.log(`Server is running on port ${PORT}`);
});
