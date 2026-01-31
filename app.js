const express = require('express');
const cors = require('cors');
const env = require("dotenv").config().parsed
const app = express();
const adminRouter = require("./Routes/admin")

// // Middleware for parsing request bodies
app.use(express.json());
app.use(cors());

// Catch all routes that don't match any other routes and return 404 error 
// app.use((req, res, next) => {
//     next(createError(404, `Can't find ${req.originalUrl} on this server!`));
// });

app.use("/admin", adminRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
