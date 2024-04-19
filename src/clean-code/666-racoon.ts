function setBackgroundOnFriday() {
    var now = new Date();

    if (now.getDay() === 5 && now.getHours() === 12 && now.getMinutes() >= 30 ||
        now.getDay() === 5 && now.getHours() === 13 ||
        now.getDay() === 5 && now.getHours() === 14 && now.getMinutes() === 0) {

        var div = document.getElementById("racoonParty");
        if (div !== null) {
            div.style.backgroundImage = "url(racoons.jpg)";
            div.style.backgroundSize = "cover"; // Ajustar la imagen para cubrir todo el fondo del div
        } else {
            console.error("El elemento con ID 'racoonParty' no fue encontrado.");
        }

        div.style.backgroundImage = "url(racoons.jpg)";
        div.style.backgroundSize = "cover"; // Ajustar la imagen para cubrir todo el fondo del div
    } else {
        var div = document.getElementsByTagName("h2");

        div.style.backgroundImage = "url(/racoons.jpg)";
        div.style.backgroundSize = "cover"; // Ajustar la imagen para cubrir todo el fondo del div
    }
}

// setBackgroundOnFriday();
