const ratingsels = document.querySelectorAll(".ratings");

const btnel = document.getElementById("btn");
const containerel = document.getElementById("container");

let selectedRating = "";


ratingsels.forEach((ratingsel)=>{
    ratingsel.addEventListener("click", (event)=>{
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

btnel.addEventListener("click", ()=>{
    if (selectedRating !== ""){
containerel.innerHTML = `
<strong>Thank You!</strong>
<br>
<br>
<strong>Feedback: ${selectedRating}</strong>
<p>We will use your feedback to improve our customer support.</p>
`
    }
})


function removeActive(){
    ratingsels.forEach((ratingsel)=>{
        ratingsel.classList.remove("active");
    })
}