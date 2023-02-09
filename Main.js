// /* SOE Button */
// const toggleSOE = document.getElementById('soe')
// const SOE = document.getElementById('SOE')

// toggleSOE.addEventListener('click',() => {
//     SOE.classList.toggle('active');
// })

/* SOE */
var modal = document.getElementById("Modals");

var btn = document.getElementById("SOE");

var span = document.getElementsByClassName("SOE-close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function (event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}
