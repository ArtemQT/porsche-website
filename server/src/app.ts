import express, {json} from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import {authRoute} from "./routes/auth-route.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

function startApp() {
	app.listen(port, () => {
		console.log(`Server start at PORT = ${port}`);
	})
}

startApp();

app.use(json())
app.use(cookieParser())
app.use('/auth', authRoute);