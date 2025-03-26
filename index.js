import express from 'express';
import mongoose from 'mongoose';

const app = express();

const dbUrl = 'mongodb+srv://shineinfosoft53:tzORBk7NAZg4LT5b@cluster0.ixcu6kc.mongodb.net/myDB';

mongoose.connect(dbUrl)
    .then(() => { console.log('Connected to MongoDB!') })
    .catch(err => { console.log('Error: ', err.message) });


app.get('/', (req, res) => {
    res.send('Hello Client!');
});

app.listen(3000, () => { console.log('Server is up on port 3000!') });
