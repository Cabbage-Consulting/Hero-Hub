const express = require('express');

const router = express.Router();

router.use(/*middleware for this router*/);
// we could make router templates for various endpoints
// and this might come in handy as our app grows in complexity

router.get(/*path, callback*/);

router.post(/*path, callback*/);

module.exports = router;
