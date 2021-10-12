import { Noticia } from './noticia.js';
document.getElementById("site-search").oninput = function () {
    const noticia = new Noticia();
    noticia.getAll().then(response => {
        console.log('Noticias', response.data);
        let source = document.getElementById('grid-source').innerHTML;
        const context = { noticias: response.data.articles };
        const template = Handlebars.compile(source);
        const resultHtml = template(context);
        document.getElementById('grid').innerHTML = resultHtml;
    }).catch(err => {
        console.error('Failed');
    });
};
