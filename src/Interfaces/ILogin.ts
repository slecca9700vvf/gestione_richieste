import { IUser } from "./IUser"
import { IMenuItem } from "./IMenu"

export interface ILoginCall {
    accountName: string,
    password?: string,
}

export interface ILoginResponse {
    utente: IUser,
    menuObject: IMenuItem,
    token: string,
    note?: string,
}