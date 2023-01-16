const tasImage = document.querySelector(".tas")
const kagitImage = document.querySelector(".kagit");
const makasImage = document.querySelector(".makas");

tasImage.addEventListener('click',(e)=>{
    console.log(e)
    yourChoice.innerHTML = `<img src="./assets/tas.png"></img>`
})

kagitImage.addEventListener('click',(e)=>{
    console.log(e)
    yourChoice.innerHTML = `<img src="./assets/kagit.png"></img>`;
})

makasImage.addEventListener('click',(e)=>{
    console.log(e)
    yourChoice.innerHTML = `<img src="./assets/makas.png"></img>`;
}) 