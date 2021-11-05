export default function apiSrevice(seach) {
    const KEY = '24201171-f795c334c12b489d5c6645c6d';

    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${seach}&page=1&per_page=12&key=${KEY}`)
        .then(response => response.json())
        .then(data => data);
    }