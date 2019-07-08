const express = require('express');
const loanRouter = require('./routes/api/loan');
const mongoose = require('mongoose');
const path
const app = express();


//DB Connection
mongoose.connect('mongodb://localhost/loanCalculator', {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log("DB Connected successfully"));


//MIDDLEWARE
app.use(express.json())

app.get('/', (req, res) => {
    res.json({app:"iBudget"})
})
//SERVING ROUTES
app.use('/api/loan', loanRouter)


                  //====SERVING REACT SIDE OF THE APPLICATION

                  app.use(express.static(path.join(__dirname, "client", "build")))
                  // Right before your app.listen(), add this:
                  app.get("*", (req, res) => {
                      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
                  });
                  

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})