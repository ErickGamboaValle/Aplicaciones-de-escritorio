export class Noticia {
    getAll() {
        const busqueda = document.getElementById("site-search")["value"];
        console.log(busqueda);
        const url = "https://newsapi.org/v2/everything?q=" + busqueda + "&sortBy=popularity&apiKey=45cc4febdcfd4fe59738f0cc9beaecb0";
        return axios.get(url);
    }
}
