const { mongoose } = require('../db/db');

const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = {
    Admin,
}