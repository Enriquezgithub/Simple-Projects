//Not finish

const search = document.getElementById('search');
const submit = document.getElementById('btn');
const form = document.querySelector('form');

const accessKey = "AtByw7xCFb88i0b84JcCUNztT1GZsg8rMz-BOWIExzQ";

let page = 1;
let inputData = "";

async function searchData(){

    inputData = search.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    // const dataFetch = await fetch(`https://api.unsplash.com/search/photos?page${page}&
    // query=${inputData}&client_id=${accesskey}`);

    // const data = await dataFetch.json();

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

   
}

form.addEventListener('submit', event => {
    event.preventDefault();

    console.log('This is working')

    searchData()    
})
