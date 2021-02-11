var btnStar = document.getElementById("start1");
var btnStop = document.getElementById("stop");
var element = document.getElementById("myprogressBar");
var btnAgain = document.getElementById("again1");
var btnFinish = document.getElementById("finish1");
var num = 0;
var width = 0; 
btnStar.addEventListener("click", update);
btnStop.addEventListener("click", stop);


function update() {
    num = Math.floor((Math.random() * 100) + 1);
    alert("Tu número es " + num);
    btnStar.classList.add("hidden");
    btnStop.classList.remove("hidden");
    
    myVar = setInterval(scene, 100); 
    function scene() {
        if (width <= 100) {
            width++;
            element.style.width = `${width}%`;
        } else {
            width = 0;
            width++;
        };
    };
};




function stop () {
    element.style.width = `${width}%`;
    console.log(width);
    clearInterval(myVar);
    if (width == num) {
        alert("Has acertado!!!");
        replay();
    } else if (width < (num - 10) || width > (num + 10)) {
        alert("Estas lejos. Mejora la punteria");
        width = 0;
        element.style.width = `${width}%`
        btnStar.classList.remove("hidden");
        btnStop.classList.add("hidden");
    } else if (width > (num - 5) || width < (num + 5)) {
        alert("Estas cerca. Prueba otra vez");
        width = 0;
        element.style.width = `${width}%`
        btnStar.classList.remove("hidden");
        btnStop.classList.add("hidden");
    } else {
        alert("Creo que deberías jugar a otra cosa");
        width = 0;
        element.style.width = `${width}%`
        btnStar.classList.remove("hidden");
        btnStop.classList.add("hidden");
    };
};


btnAgain.addEventListener("click", replay);

function replay () {
    btnStar.classList.remove("hidden");
    btnStop.classList.add("hidden");
    width = 0;
    element.style.width = `${width}%`
    clearInterval(myVar);

};

btnFinish.addEventListener("click", close);

function close () {
    var horseGameSection = document.getElementById("horseGame");
    var plays = document.getElementById("plays");
    var bar = document.getElementById("progressBar")
    horseGameSection.classList.add("hidden");
    bar.classList.add("hidden");
    plays.classList.remove("hidden");
}