
export class ApiError extends Error {
	status: number;

	constructor(status: number, message: string) {
		super(message);
		this.status = status;
	}

	static badRequest(message: string) {
		return new ApiError(400, message);
	}

	static conflict(message: string) {
		return new ApiError(409, message);
	}

	static unauthorized(message: string){
		return new ApiError(401, message);
	}
}