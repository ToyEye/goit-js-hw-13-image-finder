import './sass/main.scss';
import  apiSrevice  from "./partials/js/apiService.js";
import  gallery  from "./partials/templates/gallery.hbs";

const form = document.querySelector('#search-form');
const galleryContainer = document.querySelector('.gallery');
console.log("~ galleryContainer", galleryContainer)

form.addEventListener('submit', handler);

function handler(e) {
    e.preventDefault();
    const input = e.target.query;
    apiSrevice(input.value).then(data => {
        markUpCards(gallery(data));
        return;
    })
    

    function markUpCards(markup) {
        galleryContainer.innerHTML = '';
        if (markup) {
            galleryContainer.insertAdjacentHTML('afterbegin', markup);
            return;
        }
    }
}