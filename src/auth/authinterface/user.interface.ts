export enum Role{
    Admin = 'admin',
    Customer = 'customer'
}

type User = {
    id: string;
    name: string;
    email:string;
    password: string;
    role: Role;
};

export interface IAuthenticate {
    readonly user: User;
    readonly token: string;
}