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
        <div class="involucro_card">
            <img src="./img/pin.svg" alt="pallino" class="pallino">
            <div class="card card-body padding_basso">
                <img src="${url}" alt="..." class="imgOverlay" >
                <div class="card-body">
                    <p class="data">${date}</p>
                    <p class="titolo">${title}</p>
                </div>
            </div>
        </div>
    </div>
`;
        console.log(markup);
        cardContainer.insertAdjacentHTML('beforeend', markup);
        
    });

// PARTE 2     

//facciamo sì che cliccando una qualunque foto. L’overlay ricompaia
    const immaginiOverlay = document.querySelectorAll('.imgOverlay');

    immaginiOverlay.forEach(img => {
        img.addEventListener('click', () => {
            overlay.style.display = "block";
        });
    });

   

})


const overlay = document.getElementById('overlay');
const bottoneChiudiOverlay = document.getElementById('chiudiOverlay');

overlay.style.display = "none"; 


// Chiudi overlay
bottoneChiudiOverlay.addEventListener('click', () => {
    overlay.style.display = "none"; 
});

