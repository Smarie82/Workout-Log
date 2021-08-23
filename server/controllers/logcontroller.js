let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
const Log = require('../db').import('../models/log');

router.post('/log', validateSession, (req, res) => {
    const logEntry = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
        owner_id: req.user.id
    }
    Log.create(logEntry)
    .then(log => res.status(200).json(log))
    .catch(err => res.status(500).json({error: err}))
});

// router.get("/", (req, res) => {
//     Logbook.findAll()
//     .then(logs => res.status(200).json(logs))
//     .catch(err => res.status(500).json({ error: err }))
// });

// router.post("/", (req, res) => {
//     Logbook.findAll()
//     .then(logs => res.status(200).json(logs))
//     .catch(err => res.status(500).json({ error: err }))
// });

router.get("/", validateSession, (req, res) => {
    let userid = req.user.id
    Log.findAll({
        where: { owner_id: userid }
    })
    .then(logs => res.status(200).json(logs))
    .catch(err => res.status(500).json({ error: err}))
});

<<<<<<< HEAD
router.put("/update/:entryId", validateSession, (req, res) => {
=======
router.put("/update/:entryId", validateSession, function (req, res) {
>>>>>>> 30605ddb2e9055c2dab0b0ce9f1afd83e7bd64f5
    const updateLogEntry = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
        owner_id: req.user.id,
    };

    const query = { where: { id: req.params.entryId, owner_id: req.user.id } };

    Log.update(updateLogEntry, query)
<<<<<<< HEAD
    .then((log) => res.status(200).json(log))
    .catch((err) => res.status(500).json({ error: err}))
=======
    .then((logs) => res.status(200).json(logs))
    .catch((err) => res.status(500).json({ error: err}));
>>>>>>> 30605ddb2e9055c2dab0b0ce9f1afd83e7bd64f5
});

router.delete("/delete/:id", validateSession, (req, res) => {
    const query = { where: { id: req.params.id, owner_id: req.user.id } };

    Log.destroy(query)
    .then(() => res.status(200).json({ message: "Log Entry is GONE!"}))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;