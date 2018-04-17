
let express = require('express');
let contacts = require('./routers/contacts');

const app = express();

// app.set('views', './views')
// app.set('view engine', 'hbs')

app.use("/contacts", contacts);


app.listen(3000, () => {
    console.log('listening at http://localhost:3000');
});