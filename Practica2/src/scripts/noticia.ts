declare let axios;
import 'dotenv';

export class Noticia {
    getAll(): Promise<any> {
        const busqueda = (document.getElementById("site-search") as HTMLTextAreaElement).value;
        console.log(busqueda);
        const url: string = `https://newsapi.org/v2/everything?q="+busqueda+"&sortBy=popularity&apiKey=`+process.env["APIKEY"];
        return axios.get(url);
    }
}