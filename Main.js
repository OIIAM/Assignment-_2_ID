// /* SOE Button */
// const toggleSOE = document.getElementById('soe')
// const SOE = document.getElementById('SOE')

// toggleSOE.addEventListener('click',() => {
//     SOE.classList.toggle('active');
// })

/* SOE */
var modalSOE = document.getElementById("SOEModals");

var btnSOE = document.getElementById("SOE");

var spanSOE = document.getElementsByClassName("SOE-close")[0];

btnSOE.onclick = function () {
    modalSOE.style.display = "block";
}
spanSOE.onclick = function() {
    modalSOE.style.display = "none";
}

window.onclick = function (event) {
if (event.target == modalSOE) {
    modalSOE.style.display = "none";
}
}
/* ICT */
var modalICT = document.getElementById("ICTModals");

var btnICT = document.getElementById("ICT");

var spanICT = document.getElementsByClassName("ICT-close")[0];

btnICT.onclick = function () {
    modalICT.style.display = "block";
}
spanICT.onclick = function() {
    modalICT.style.display = "none";
}

window.onclick = function (event) {
if (event.target == modalICT) {
    modalICT.style.display = "none";
}
}

/* FMS */
var modalFMS = document.getElementById("FMSM");

var btnFMS = document.getElementById("FMS");

var spanFMS = document.getElementsByClassName("FMS-close")[0];

btnFMS.onclick = function () {
    modalFMS.style.display = "block";
}
spanFMS.onclick = function() {
    modalFMS.style.display = "none";
}

window.onclick = function (event) {
if (event.target == modalFMS) {
    modalFMS.style.display = "none";
}
}
/* HMS */
var modalHMS = document.getElementById("HMSM");

var btnHMS = document.getElementById("HMS");

var spanHMS = document.getElementsByClassName("HMS-close")[0];

btnHMS.onclick = function () {
    modalHMS.style.display = "block";
}
spanHMS.onclick = function() {
    modalHMS.style.display = "none";
}

window.onclick = function (event) {
if (event.target == modalHMS) {
    modalHMS.style.display = "none";
}
}

/* LSCT */
var modalLSCT = document.getElementById("LSCTM");

var btnLSCT = document.getElementById("LSCT");

var spanLSCT = document.getElementsByClassName("LSCT-close")[0];

btnLSCT.onclick = function () {
    modalLSCT.style.display = "block";
}
spanLSCT.onclick = function() {
    modalLSCT.style.display = "none";
}

window.onclick = function (event) {
if (event.target == modalLSCT) {
    modalLSCT.style.display = "none";
}
}
/* BA */
var modalBA = document.getElementById("BAM");

var btnBA = document.getElementById("BA");

var spanBA = document.getElementsByClassName("BA-close")[0];

btnBA.onclick = function () {
    modalBA.style.display = "block";
}
spanBA.onclick = function() {
    modalBA.style.display = "none";
}

window.onclick = function (event) {
if (event.target == modalBA) {
    modalBA.style.display = "none";
}
}

/* HS */
var modalHS = document.getElementById("HSM");

var btnHS = document.getElementById("HS");

var spanHS = document.getElementsByClassName("HS-close")[0];

btnHS.onclick = function () {
    modalHS.style.display = "block";
}
spanHS.onclick = function() {
    modalHS.style.display = "none";
}

window.onclick = function (event) {
if (event.target == modalHS) {
    modalHS.style.display = "none";
}
}
/* DE */
var modalDE = document.getElementById("DEM");

var btnDE = document.getElementById("DE");

var spanDE = document.getElementsByClassName("DE-close")[0];

btnDE.onclick = function () {
    modalDE.style.display = "block";
}
spanDE.onclick = function() {
    modalDE.style.display = "none";
}

window.onclick = function (event) {
if (event.target == modalDE) {
    modalDE.style.display = "none";
}
}

/* IDS */
var modalIDS = document.getElementById("IDSM");

var btnIDS = document.getElementById("IDS");

var spanIDS = document.getElementsByClassName("IDS-close")[0];

btnIDS.onclick = function () {
    modalIDS.style.display = "block";
}
spanIDS.onclick = function() {
    modalIDS.style.display = "none";
}

window.onclick = function (event) {
if (event.target == modalIDS) {
    modalIDS.style.display = "none";
}
}


//API

// $(document).ready(function() {
//     const APIKEY = "63b6283b969f06502871a97d";
    

//     $("#submit").on("click", function(e) {
//         //prevent default action of the button 
//         e.preventDefault();
        
//         let Name = $("#nameT").val();
//         let Email = $("emailT").val();
//         let feedback = $("feedbackT").val();

//         let jsondata  = {
//             "name": Name,
//             "email": Email,
//             "Feedback": feedback
//         };

// let settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://interactivedev-9c9d.restdb.io/rest/assignment2",
//     "method": "POST",
//     "headers": {
//       "content-type": "application/json",
//       "x-apikey": APIKEY,
//       "cache-control": "no-cache"
//     },
//     "processData": false,
//       "data": JSON.stringify(jsondata),
//       "beforeSend": function() {
//         $("#submit").prop("disabled",true);
//         $("#add-contact-form").trigger("reset");
//       }
//   }
  
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//     $("#submit").prop("disabled", false);
//   })
// })
// });
