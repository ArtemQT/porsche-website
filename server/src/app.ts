import express, {json} from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors';
import {authRoute} from "./routes/auth-route.js"
import {errorMiddleware} from "./middlewares/error-middleware.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

function startApp() {
	app.listen(port, () => {
		console.log(`Server start at PORT = ${port}`);
	})
}

startApp();

app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true,
}))
app.use(json())
app.use(cookieParser())

app.use('/auth', authRoute);

app.use(errorMiddleware)