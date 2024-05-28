var mongoose = require("mongoose");

let PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [3, "Name must be at least 3 characters long"],
    maxlength: [50, "Name cannot be longer than 50 characters"],
    validate: {
      validator: (v) => {
        return /^[a-zA-Z ]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid name!`,
    },
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [18, "Player must be at least 18 years old"],
    max: [50, "Player cannot be older than 50 years"],
  },
  team: {
    type: String,
    required: [true, "Team is required"],
    enum: [
      "india",
      "australia",
      "england",
      "south africa",
      "new zealand",
      "west indies",
      "sri lanka",
      "pakistan",
      "bangladesh",
      "zimbabwe",
      "ireland",
      "afghanistan",
    ],
    lowercase: true,
  },
});

module.exports = PlayerSchema;
