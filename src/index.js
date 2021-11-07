import './sass/main.scss';
import  ApiService  from "./partials/js/apiService.js";
import  gallery  from "./partials/templates/gallery.hbs";

const form = document.querySelector('#search-form');
const galleryContainer = document.querySelector('.js-container__gallery');

form.addEventListener('submit', onSearchFormSubmit);

// function handler(e) {
//     e.preventDefault();
//     const input = e.target.query;
//     apiSrevice(input.value).then(data => {
//         markUpCards(gallery(data));
//         return;
//     })
    

//     function markUpCards(markup) {
//         galleryContainer.innerHTML = '';
//         if (markup) {
//             galleryContainer.insertAdjacentHTML('beforeend', markup);
//             return;
//         }
//     }
// }


// function onSearchFormSubmit(e){
//     e.preventDefault();
//     ApiService.query =  e.currentTarget.elements.query.value;
    
//     // loadMoreBtn.show();
//     // ApiService.resetPage();
//     clearPhotosContainer();
//     onLoadMore();
// }

//  function  onLoadMore(){

//     // loadMoreBtn.disable();
    
//     ApiService.fetchPhoto()
//     .then(photos =>{
//       const photosListMarkup = photosMap(photos);
//       galleryContainer.insertAdjacentHTML('beforeend', photosListMarkup);
//       scrollPage();
//       loadMoreBtn.enable();
//     })
 
// }


// function clearPhotosContainer() {
//     galleryContainer.innerHTML = '';
//   }

// function photosMap(photos){
//   return  photos.map(gallery).join('');
// }
// function scrollPage(){
//   window.scrollTo({
//     top: window.pageYOffset + documentHeight,
//     width: 0,
//     behavior: "smooth",
//   });
// }