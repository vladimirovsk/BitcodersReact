export interface AuthData {
	email: string;
	password: string;
}

export interface AuthResponse {
	access_token: string;
}

export interface IAuthState {
	access_token:string;
	email: string;
	isAuth:boolean;
	loginErrorMessage?: string  | undefined;
}

export interface IAuthPayload {
	email:string,
	access_token: string,
}
