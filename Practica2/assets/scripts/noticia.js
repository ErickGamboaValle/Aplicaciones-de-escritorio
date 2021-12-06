export class Noticia {
    getAll() {
        const busqueda = document.getElementById("site-search").value;
        //const url = `https://newsapi.org/v2/everything?q= ${busqueda}&sortBy=popularity&apiKey= ${process.env.APIKEY}`; //no pude leer aqui el process.env.APIKEY
        const url = `https://newsapi.org/v2/everything?q=${busqueda}&sortBy=popularity&apiKey=c59c512f8a3f41c8b0f13600cafc7caf`; //el apikey debería de ser privado
        return axios.get(url);
    }
}
