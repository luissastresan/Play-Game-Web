
// object to save features of games cards
var games = [
    { 
        name: "horse",
        image: "url('https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-hand-drawn-horse-racing-sport-poster-image_182937.jpg')",
        description: "Consigue llegar a la meta más rápido que los demas, siendo el más agil con el botón.",
        link: function changePage () {
            var section = document.getElementById("plays");
            var section1 = document.getElementById("horseGame")
            var user = document.getElementById("currentlyuserhorse");
            section.classList.add("hidden");
            section1.classList.remove("hidden");
            user.innerHTML = users.username;
            alert("El juego comienza cuando pulses el boton START. Pulsa el botón lo mas rapido que puedas para llegar al final lo más rapido posible.")

        }
    },
    { 
        name: "progressBar",
        image: "url('https://conceptdraw.com/a2246c3/p46/preview/640/pict--progress-bar--ms-windows-vista-user-interface-vector-stencils-library')",
        description: "Consigue acertar lo antes posible la ubicación del número en la barra de carga. Tienes que ser rápido si quieres ganar.",
        link: function changePage1 () {
            var section = document.getElementById("plays");
            var section1 = document.getElementById("horseGame");
            var section2 = document.getElementById("progressBar")
            var user = document.getElementById("currentlyuserbar");
            section.classList.add("hidden");
            section1.classList.add("hidden");
            section2.classList.remove("hidden")
            user.innerHTML = users.username;
            alert("Se genera un número aleatorio y la barra empezara a llenarse. Tienes que pararla cuando creas que alcanza el número.")
        }
    }
];

// Each input of the form
var p1 = document.getElementById("validateEmail");
var p2 = document.getElementById("validateName");
var p3 = document.getElementById("validatePassword");

// object to save the users
users = {
    username: [],
    mail: [],
    password: []
}

// function to validate form
function validate() {
    var mail = document.forms['myForm']['fmail'].value;
    var userName = document.forms['myForm']['fname'].value;
    var password = document.forms['myForm']['fpassword'].value;


    if (mail = "" || validateEmail(mail) === false) {
        p1.classList.remove("hidden");
    } else {
        p1.classList.add("hidden");
        users.mail.push(mail);
    }

    if (userName == "") {
        p2.classList.remove("hidden");
    } else {
        p2.classList.add("hidden");
        users.username.push(userName);
    };
        
    if (password == "" || validatePassword(password) === false) {
        p3.classList.remove("hidden");
    } else {
        p3.classList.add("hidden");
        users.password.push(password);
        containerLogin.classList.add("hidden");
        alert("Ya estas logeado");
        loadCards();
    };
};



// Function to validate each part of the form
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

function validatePassword (password) {
    var re = /[a-z]\d|\d[a-z]/i;
    return re.test(password) && password.length > 3;
};


// Function to load the game cards
function loadCards () {
    for (game of games) {
        var container = document.getElementById("plays"); 
        var cardContainer = document.createElement("div"); 

        container.appendChild(cardContainer).className = "container";

        var cardImage = document.createElement("div");
        var cardDescription = document.createElement("div"); 
        var p = document.createElement("p"); 
        var btn = document.createElement("button");
        btn.textContent = "Juega ahora";
        btn.addEventListener("click", game.link);
        p.textContent = game.description;
        cardImage.style.backgroundImage = game.image;

        cardDescription.appendChild(p).className = "description";
        cardDescription.appendChild(btn).className = "btn";
        cardContainer.appendChild(cardImage).className = "gameCard";
        cardContainer.appendChild(cardDescription).className = "info";
    };
};





var btnSpanish = document.querySelector(".english");
btnSpanish.addEventListener("click", changeEnglish);

function changeEnglish () {
    var x = document.getElementById("placeholder").placeholder = "Search games or users";
    var y = document.getElementById("entry").innerHTML = "Login";
    var a = document.getElementById("counttitle").innerHTML = "Create your minigames account";
    var b = document.getElementById("not").innerHTML = "There are no new notifications";
    var b = document.getElementById("free").innerHTML = "IS FREE";
    var c = document.getElementById("placeholder1").placeholder = "Email";
    var d = document.getElementById("placeholder2").placeholder = "Username";
    var e = document.getElementById("placeholder3").placeholder = "Password";
    var f = document.getElementById("validateEmail").innerHTML = "Insert a correct mail";
    var g = document.getElementById("validateName").innerHTML = "Insert a username";
    var h = document.getElementById("validatePassword").innerHTML = "Insert a password";
    var i = document.getElementById("ready").innerHTML = "¿Already have an account?";
    var j = document.getElementById("continue").innerHTML = "Continue";
}


// funcion to display the cardLogin
var entry = document.getElementById("login");
var containerLogin = document.getElementById("containerLogin");
entry.addEventListener("click", displayCardLogin);

var btnSubmit = document.getElementById("continue");
btnSubmit.addEventListener("click", validate);

var count = 0
function displayCardLogin () {
    if (count % 2 == 0) {
        containerLogin.classList.remove("hidden");
        count++;
    } else {
        containerLogin.classList.add("hidden");
        p1.classList.add("hidden");
        p2.classList.add("hidden");
        p3.classList.add("hidden");
        document.getElementById("myForm").reset();
        containerLoginReady.classList.add("hidden");
        document.getElementById("myForm1").reset();
        count++;
    };
}


// Display the notifications
var bell = document.getElementById("icon");
bell.addEventListener("mouseover", displayNotifications);
bell.addEventListener("mouseout", hiddenNotifications);

function displayNotifications () {
    var card = document.getElementById("Containernotifications");
    card.classList.remove("hidden");
};

function hiddenNotifications () {
    var card = document.getElementById("Containernotifications");
    card.classList.add("hidden");
}


// function to display the cardLogin if you already have login
var btnReady = document.getElementById("ready");
var containerLoginReady = document.getElementById("containerLoginReady");

btnReady.addEventListener("click", logready);

function logready () {
    containerLoginReady.classList.remove("hidden");
    containerLogin.classList.add("hidden");
};

var btnContinue = document.getElementById("continue1");
btnContinue.addEventListener("click", entry);

function entry () {
    var userName1 = document.forms['myForm1']['fname1'].value;
    var password1 = document.forms['myForm1']['fpassword1'].value;

    if (users.username.includes(userName1) && users.password.includes(password1)) {
        loadCards();
    };
};


