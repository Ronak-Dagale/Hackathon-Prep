const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define the schema for your data
const IdeaSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  solved: {
    type: Boolean,
    default: false
  } 
});

// Create a model using the schema
const Idea = mongoose.model('Idea', IdeaSchema);

module.exports = Idea;
