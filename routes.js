const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	next(new Error('custom error'));
	// res.json({
	// 	message: 'hello world',
	// });
});

router.get('/a*r', (req, res) => {
	res.send('router a?r');
});

router.get('/params/:name', (req, res) => {
	res.json({
		params: req.params,
		host: req.host,
		headers: req.headers,
	});
});

router.post('/body', (req, res) => {
	res.status(201).json(req.body.name);
});

module.exports = router;
