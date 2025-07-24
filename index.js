const express = require('express');

const app = express();
const PORT = 4000;

app.get('/', (req,res) => {
    // This is the home route
    console.log('Home route accessed');
    // Sending a simple HTML response with a form
    res.send(`
        <h1>Hello from the home page!</h1>
        <form action="/hello" method="get">
            <label for="name">Enter your name: </label>
            <input type="text" id="name" name="name" required>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.get('/about', (req, res) => {
    // This is the about route
    console.log('About route accessed');
    res.send(`<h1>This is Stephens about page and there so much to tell you idk where to start!</h1>`);
});

app.get('/contact', (req, res) => {
    // This is the contact route
    console.log('Contact route accessed');
    res.send(`<h1>Hello from the contact page!</h1>`);
});

app.get('/hello', (req, res) => {
    // This is the hello route
    const name = req.query.name || 'stranger';
    if (name) {
        console.log('Hello route accessed');
        res.send(`<h1>Hello ${name}!</h1>`);
    } else {
        res.send(`<h1>Hello stranger!</h1>`);
    }
});

app.get('/:page', (req, res) => {
    // This is a dynamic route that captures any page name
    console.log('Dynamic route accessed for page:', req.params.page);
    console.log(req.params);
    res.send(`<h1>Hello from the ${req.params.page} page!</h1>`);
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});