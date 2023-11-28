import { Suscripcion } from "./suscripcion"

export interface RegisterData {
    UserName: string,
    Email: string,
    Password: string,
    
}

export interface UserForConversion{
    userName: string,
    tiros: number,
    role: string,


}

export interface UserForAdmin{
    userName: string,
    email: string,
    role: string,
    categoriaId: number,

}



export interface User{
    UserName: string,
    Email: string,
    Password: string,
    Tiros: number,
    Role: number,
    CategoriaId: number,
    Suscripcion: Suscripcion,
}

export interface LoginData {
    name: string,
    password: string
}

export interface esAdmin {
    esadmin: boolean
}