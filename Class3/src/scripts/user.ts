interface UserData{
    email: string;
    password: string;
    Login: string;
}

interface UserInterface{
    nombre: string;
    email: string;
    id?: number;
    password?: string;
    age?: number;
}
class User implements UserInterface{
    nombre: string;
    email: string;
    id: number;
    password: string;
    age: number;

    login(username: string,password:string): void {
        console.log('Iniciando Sesión');
    }

    logout(): void {
        console.log('Cerrando Sesión');
    }

    signup(data: UserData): UserData{
        return data;
    }

    findOne(id:number, options?:any):void{

    }
}