const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch('https://dog.ceo/api/breeds/list')
    .then(response => response.json())
    .then(data => /*console.log(data)*/ generateOptions(data.message))

fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => /*console.log(response)*/ response.json())
    .then(data => /*console.log(data)*/ /*console.log(data.message)*/ generateImage(data.message))


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function generateOptions(data){
    const options = data.map(item => ` 
        <option value='${item}'>${item}</option>
        `).join('');
        select.innerHTML = options;
}

function generateImage(data){
    const html = `
        <img src='${data}' alt>
        <p>Click to view images of ${select.value}s</p>
    `;
    card.innerHTML = html;
}


// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------

