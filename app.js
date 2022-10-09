const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const path = require('path');

// app.set('views', './views_dir');
app.set('view engine', 'pug');

app.use((req, res, next) => {
	req.name = 'Leandro';
	next();
});
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.render('index', {
		message: 'Hello world from express by Leandro',
	});
});

app.use('/hello', routes);
app.get('/world', (req, res) => {
	res.send('world');
});

app.use((err, req, res, next) => {
	res.status(500).json({ message: 'Something wrong happensbbbb' });
});

app.listen(3000, () => {
	console.log('Express Started');
});
