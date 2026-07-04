// العناصر

const envelope = document.getElementById("envelope");
const seal = document.getElementById("seal");


// عند الضغط على الختم

seal.addEventListener("click", () => {

    // تأثير صغير على الختم
    seal.style.transform = "translate(-50%,-50%) scale(.8) rotate(25deg)";
    seal.style.opacity = "0";

    // بعد قليل افتح الظرف
    setTimeout(() => {

        envelope.classList.add("open");

    },300);

});



/* ===========================
بتلات الورد
=========================== */

const petalsContainer = document.querySelector(".petals");

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=
    (5+Math.random()*5)+"s";

    petal.style.opacity=Math.random();

    petal.style.transform=
    `rotate(${Math.random()*360}deg)`;

    petalsContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },9000);

}

setInterval(createPetal,350);



/* ===========================
تأثير لمعان الختم
=========================== */

setInterval(()=>{

    seal.animate([

        {boxShadow:"0 0 10px gold"},

        {boxShadow:"0 0 35px #ffe49b"},

        {boxShadow:"0 0 10px gold"}

    ],{

        duration:1800

    });

},2000);
