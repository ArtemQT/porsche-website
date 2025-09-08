interface IModal {
	id: number;
	email: string;
	password: string;
}

export class UserDto{
	id: string;
	email: string;

	constructor(modal: IModal) {
		this.id = String(modal.id);
		this.email = modal.email;
	}
}