import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Avengers Power -->!!').status(200)
})

app.listen(3000, () => {
    console.log('connect successfully');
})