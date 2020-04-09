const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

const members = [
    {
        id: 1,
        name: 'jahinow ruben',
        email: 'ruben@email.fi',
        status: 'active'
    },
    {
        id: 2,
        name: 'jahet nob',
        email: 'nob@email.fi',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'morkow ebonah',
        email: 'ebonah@email.fi',
        status: 'active'
    }
]

//gets all members
app.get('/api/members', (req, res) =>{
    res.json(members);
})
//set a static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));