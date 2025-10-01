import type {IPayload} from "../services/token-service";

declare global {
	namespace Express {
		export interface Request {
			user?: IPayload;
		}
	}
}