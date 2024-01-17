const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/task', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Create a Mongoose schema and model
const YourSchema = new mongoose.Schema({
  // Define your schema fields here
  field1: String,
  field2: Number,
});

const YourModel = mongoose.model('YourModel', YourSchema);

// Example of reading a document
YourModel.findOne({ /* your query criteria */ }, (err, document) => {
  if (err) {
    console.error(err);
  } else {
    console.log(document);
  }
});
