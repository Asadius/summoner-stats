const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public', {index: 'home.html'}));

app.get('/stats', (req, res) => {
    let summoner = req.query.summoner;
    res.send(summoner);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));