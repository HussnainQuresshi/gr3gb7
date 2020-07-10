const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const domainSchema = new Schema({
  domain: {
    type: String,
    required: true,
  },
  metrics: {
    length: {
      type: Number,
      required: true,
    },
    alphanumeric: {
      type: Number,
      required: true,
    },
    numeric: {
      type: Number,
      required: true,
    },
    hyphenated: {
      type: Number,
      required: true,
    },
    tld: {
      type: String,
      required: true,
    },
    wordcount: {
      type: Number,
      required: true,
    },
  },
  words: {
    type: [String],
    required: true,
  },
  sentiment_score: {
    type: Number,
    required: true,
  },
  is_favourite: { type: Boolean, default: false },
});
const Domain = mongoose.model('domain', domainSchema);

module.exports = Domain;
