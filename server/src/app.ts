import express from 'express'
import dotenv from 'dotenv'

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

function startApp() {
	app.listen(port, () => {
		console.log(`Server start at PORT = ${port}`);
	})
}

startApp();

app.get('/', (req, res) => {
	res.send('Server started!');
})