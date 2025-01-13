// Import Express
const express = require('express');
const app = express();
const port = 3000

// Define a route
app.get('/', (req, res) => {
    res.send('Welcome to the Express.js Tutorial');
});
app.get('/my-app',(req,res)=>{
    res.send("welcome to my app")
})
// Start the server
app.listen(port, () => {
    console.log('Server is running on http://localhost:3000');
});