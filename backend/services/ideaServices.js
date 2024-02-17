// Import your Idea model
const Idea = require('../models/Idea');

// Define a function to fetch all ideas
async function fetchIdeas() {
  try {
    console.log('Fetching ideas...'); // Log that the fetching process has started
    const ideas = await Idea.find();
  //  console.log('Fetched ideas:', ideas); 
    // Log the fetched ideas
    return ideas;
  } catch (error) {
    // Handle any errors
    console.error('Error fetching ideas:', error);
    throw error;
  }
}



module.exports = {
  fetchIdeas
};
