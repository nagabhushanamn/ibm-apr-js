let express = require('express');
let router = express.Router();

let contacts = [
    {
        id: 1,
        name: 'Nag',
        email: 'nagabhushanamn@gmail.com',
        mobile: '9945674228',
        address: 'chennai'
    },
    {
        id: 2,
        name: 'contact1',
        email: 'contact1@gmail.com',
        mobile: '1234567890',
        address: 'world'
    }
];

router.get("/", function (req, res, next) {
    //res.json(contacts); // application/json
    //res.render('contact-list', { contacts }); // text/html
    res.json(contacts);
})
router.get('/:id', function (req, res, next) {
    let contact = contacts.find(item => item.id === Number.parseInt(req.params.id))
    //res.render('contact-detail', { contacts, contact }); // text/html
    res.json(contact);
})


module.exports = router;