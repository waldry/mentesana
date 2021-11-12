let posting = articles.length;
let posted = 0;
const container = document.querySelector('.list-articles');

const button = document.querySelector('.btn-mente');
const searchArticle = document.getElementById('search-article');

button.addEventListener('click', generateNewEntrys)

function generateNewEntrys() {
  if (posted !== posting) {
    const html = document.createElement('div');
    html.className = 'row justify-content-center my-5';
    html.innerHTML = articles[posted].post;
    container.appendChild(html)
    posted++;
  } 
  if (posted === posting) {
    button.className = 'collapse'
    searchArticle.classList.remove('collapse')
  }
}

function  generateNewEntryx(){
	const entry = document.createElement('div');
	entry.className = 'row justify-content-center my-5';
	entry.innerHTML = `<div class="col-12 col-sm-8">
  <div class="container">
    <article class="articulo my-5">
      <h3 class="article-title">
        <a href="#" class="article-link text-center">Ley De Atracción</a>
      </h3>
      <p class="article-content">
        Dedícate a aquello que te apasiona. Un consejo bien intencionado
        que encontrarás cada vez que vayas a Google y busques cómo
        encontrar tu propósito de vida, pero que cada día nos confunde
        más. Uno que yo misma he dado y que proviene del deseo de que,
        así como yo encontré aquello que en este momento de mi vida me
        llena de satisfacciones y me permite multiplicar mis ingresos,
        tú también puedas...
      </p>
      <button class="btn btn-dark article-hero-button">Leer Más</button>
      <div class="section-separator my-5"></div>
    </article>
  </div>
</div>`;
	container.appendChild(entry);
}



