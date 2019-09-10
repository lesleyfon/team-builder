
const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();
//body parser
app.use(bodyParser.json());
//cors
app.use(CORS());

const team = [
	{
		id: 0,
		email: 'theGodfather@gmail.come',
		name: 'Francis Ford Coppola',
		role: 'full stack'
	},
	{
		id: 1,
		email: 'Star Wars',
		name: 'George Lucas',
		role: 'Web dev',
	},
	{
		id: 2,
		email: 'theLordofthe Rings@yahoo.com',
		name: 'Peter Jackson',
		role: 'front end',
	},
	{
		id: 3,
		email: 'Terminator2.JudgementDay@google.com',
		name: 'James Cameron',
		role: 'Agile Master',
	},
	{
		id: 4,
		email: 'TheFarelyBrothers@bacon.com',
		name: 'The Farely Brothers',
		role: 'Something Something',
	},
	{
		id: 5,
		email: 'Tombstone@gmail.com',
		name: 'George P. Cosmatos',
		role: 'full Stack',
	},
];

app.get('/api/team', (req, res) => {
	res.send(team);
});

app.get('/api/team/:id', (req, res) => {
	const movie = team.filter(movie => movie.id.toString() === req.params.id)[0];
	res.status(200).json(movie);
});

app.post('/api/team', (req, res) => {
	console.log('hello')
	if (req.body.id !== undefined) team.push(req.body);
	res.status(201).json(team);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});

