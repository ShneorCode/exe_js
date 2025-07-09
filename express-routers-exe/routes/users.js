
import express from 'express';

const router = express.Router();


let users = [
    { id: 1, name: 'Alice' }
];

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/', (req, res) => {
    let newId = 1;
    if (users.length > 0) {
        newId = users[users.length - 1].id + 1;
    }
    const newUser = { id: newId, name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            foundUser = users[i];
            break;
        }
    }

    if (foundUser === null) {
        res.status(404).json({ error: 'User not found' });
    } else {
        res.json(foundUser);
    }
});

router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const newName = req.body.name;
    let updated = false;
    let updatedUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users[i].name = newName;
            updated = true;
            updatedUser = users[i];
            break;
        }
    }

    if (updated === false) {
        res.status(404).json({ error: 'User not found' });
    } else {
        res.json(updatedUser);
    }
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const originalLength = users.length;

    users = users.filter(user => user.id !== id);

    if (users.length === originalLength) {
        res.status(404).json({ error: 'User not found' });
    } else {
        res.status(204).send();
    }
});

export default router;
