const env = require("dotenv").config().parsed
const jwt = require('jsonwebtoken')

authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization.replace(/^Bearer\s+/, '');
        const isVerified = jwt.verify(token, process.env.JWT_SECRET);
        if (isVerified.email) {
            req.id = isVerified.id;
            req.email = isVerified.email
            next();

        }
        else {
            res.json({
                message: "Not authorized"
            }).status(403);
        }
    } catch (error) {
        res.json({
            msg: "Unauthorize Access"
        })
    }

};
module.exports = authMiddleware;