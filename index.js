const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/check', (req, res) => {
    res.send({hi: "Hello"})
})


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });    
}

app.listen(PORT, () => {
    console.log('Server started at port: ' + PORT +' !');
})

// https://floating-citadel-41183.herokuapp.com/ 