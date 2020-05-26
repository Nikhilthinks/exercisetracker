const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({  /* userSchema is a document */

userName: {   /* userName is a field */
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
}
},
{timestamps: true,
}
);

const User = mongoose.model('User Details', userSchema);

module.exports = User;