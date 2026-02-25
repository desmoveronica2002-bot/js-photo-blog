//Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API,
//sfruttando la risposta per generare dinamicamente in pagina una serie di foto!


// variabile per il link 
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

const cardContainer = document.querySelector(".card-container"); //.card-container metto il punto perchè seleziono una classe e non un id


fetch(endpoint)
.then(res=>res.json())
.then(data=>{
    console.log(data);

    data.forEach(element => {
        console.log(element)

        const {title,date,url} = element;

        const markup = `
        <div class="col-12 col-md-6 col-lg-4">
            <img src="./img/pin.svg" alt="pallino" class="pallino">
            <div class="card">
                <img src="${url}" class="card-img-top" alt="${title}">
                <div class="card-body">
                    <p>${date}</p>
                    <p>${title}</p>
                </div>
            </div>
        </div>
        `;
        console.log(markup);
        cardContainer.insertAdjacentHTML('beforeend', markup);
        
    });
})
