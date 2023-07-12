// This is the Express code for the SPA application.

const express = require('express');
const app = express();

app.get('/', routes.home);
app.get('/about', routes.about);
app.get('/contact', routes.contact);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
