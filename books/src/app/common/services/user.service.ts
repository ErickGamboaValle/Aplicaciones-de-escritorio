import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn : 'root'
})
export class UserService {
    constructor(private httpClient: HttpClient){}

    getItems(): Promise<any>{
        const url = 'https://jsonplaceholder.typicode.com/users'
        return this.httpClient.get(url).toPromise();
    }
}