const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.static('public'));


app.get('/about', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/about.html'))
);
app.get('/advertise', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/advertise.html'))
);
app.get('/affiliates', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/affiliates.html'))
);
app.get('/contact', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/contact.html'))
);
app.get('/donate', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/donate.html'))
);
app.get('/podcasts', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/podcasts.html'))
);
app.get('/schedule', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/schedule.html'))
);
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);