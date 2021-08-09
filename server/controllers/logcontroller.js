let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
const Logbook = require('../db').import('../models/log');

router.post('/create', validateSession, (req, res) => {
    const logEntry = {
        description: req.body.logbook.description,
        definition: req.body.logbook.definition,
        result: req.body.logbook.result,
        owner_id: req.user.id
    }
    Logbook.create(logEntry)
    .then(logbook => res.status(200).json(logbook))
    .catch(err => res.status(500).json({error: err}))
});

router.get("/", (req, res) => {
    Logbook.findAll()
    .then(logs => res.status(200).json(logs))
    .catch(err => res.status(500).json({ error: err }))
});

router.post("/", (req, res) => {
    Logbook.findAll()
    .then(logs => res.status(200).json(logs))
    .catch(err => res.status(500).json({ error: err }))
});

// router.get("/mine", validateSession, (req, res) => {
//     let userid = req.user.id
//     Logbook.findAll({
//         where: { owner_id: userid }
//     })
//     .then(logs => res.status(200).json(logs))
//     .catch(err => res.status(500).json({ error: err}))
// });

router.put("/update/:entryId", validateSession, function (req, res) {
    const updateLogEntry = {
        description: req.body.logbook.description,
        definition: req.body.logbook.definition,
        result: req.body.logbook.result,
        owner_id: req.user.id,
    };

    const query = { where: { id: req.params.entryId, owner_id: req.user.id } };

    Logbook.update(updateLogEntry, query)
    .then((logs) => res.status(200).json(logs))
    .catch((err) => res.status(500).json({ error: err}));
});

router.delete("/delete/:id", validateSession, function (req, res) {
    const query = { where: { id: req.params.id, owner_id: req.user.id } };

    Logbook.destroy(query)
    .then(() => res.status(200).json({ message: "Log Entry is GONE!"}))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;