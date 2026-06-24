// DARK MODE

document
.getElementById("darkModeBtn")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});


// UNIVERSITY COMPARISON

const universities = {

NUST:{
fee:"200,000+/Semester",
ranking:"Top 1",
field:"Engineering & Computing",

},

FAST:{
fee:"200,000+/Semester",
ranking:"Top 1",
field:"Computing",

},

COMSATS:{
fee:"120,000+/Semester",
ranking:"Top 3",
field:"Computing",

},

GIKI:{
fee:"250,000+/Semester",
ranking:"Top 5",
field:"Engineering",

},
AIR:{
fee:"150,000+/Semester",
ranking:"Top 4",
field:"computing",

}

};

function compareUniversities(){

const u1 =
document.getElementById("uni1").value;

const u2 =
document.getElementById("uni2").value;

document
.getElementById("comparisonResult")
.innerHTML =

`
<table>

<tr>
<th>Feature</th>
<th>${u1}</th>
<th>${u2}</th>
</tr>

<tr>
<td>Fee</td>
<td>${universities[u1].fee}</td>
<td>${universities[u2].fee}</td>
</tr>

<tr>
<td>Ranking</td>
<td>${universities[u1].ranking}</td>
<td>${universities[u2].ranking}</td>
</tr>

<tr>
<td>Field</td>
<td>${universities[u1].field}</td>
<td>${universities[u2].field}</td>
</tr>



</table>
`;

}




// SCHOLARSHIP FINDER

function findScholarship(){

let income =
document.getElementById("income")
.value;

let result = "";

if(income==="low"){

result =
"HEC Need Based Scholarship, Ehsaas Scholarship, University Financial Aid";

}

else if(income==="medium"){

result =
"Merit Scholarship, PEEF Scholarship";

}

else{

result =
"Merit Scholarships Available";

}

document
.getElementById("scholarshipResult")
.innerHTML = result;

}


// AI FIELD RECOMMENDATION

function recommend(){

let interest =
document.getElementById("interest")
.value;

let University = "";

switch(interest){

case "BS Software engineering, AI, Computer Science, Data Science or Computer engineering":
University =
"NUST Islamabad, FAST NUCES, COMSATS University (Islamabad) ";
break;

case "Cyber Security":
University =
"AIR University Islamabad";
break;

case "Electrical Engineering, Civil Engineering or other Engineering programs":
University =
"NUST, UET Lahore/Texla";
break;

case "Buisness studies":
University =
"IBA Karachi, NUMS Islamabad, LUMS (Lahore)";
break;

case "Social Sciences":
University =
"Qaid-e-Azam University, Punjab University, Peshawar University";
break;

}

document
.getElementById("recommendation")
.innerHTML =

`Recommended University:
<strong>${University}</strong>`;

}

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Carousel: auto slide every 3 seconds
(function initCarousel(){
    const slidesContainer = document.querySelector('.carousel .slides');
    const slides = document.querySelectorAll('.carousel .slide');
    if(!slidesContainer || slides.length === 0) return;
    let index = 0;
    setInterval(()=>{
        index = (index + 1) % slides.length;
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
})();
