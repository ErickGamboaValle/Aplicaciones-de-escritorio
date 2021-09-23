declare let axios;

export class photo {
    getAll(): Promise<any> {
        const url = "https://jsonplaceholder.typicode.com/photos?albumID=1";
        return axios.get(url);
    }
}