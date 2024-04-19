function setBackgroundOnFriday() {
    var now = new Date();
    
    if (now.getDay() === 5 && now.getHours() === 12 && now.getMinutes() >= 30 ||
        now.getDay() === 5 && now.getHours() === 13 ||
        now.getDay() === 5 && now.getHours() === 14 && now.getMinutes() === 0) {
        
        var div = document.getElementById("racoonParty");
        
        if (div !== null) {
            div.style.backgroundImage = "url(img/racoons.jpg)";
            div.style.backgroundPosition = "center";
            div.style.backgroundRepeat = "no-repeat";
            div.style.backgroundSize = "cover";
        } else {
            console.error("El elemento con ID 'racoonParty' no fue encontrado.");
        }

    } else {
        var div = document.getElementById("racoonParty");
        
        if (div !== null) {
            div.style.backgroundImage = "url(img/work.jpg)";
            div.style.backgroundPosition = "center";
            div.style.backgroundRepeat = "no-repeat";
            div.style.backgroundSize = "cover";
        } else {
            console.error("El elemento con ID 'racoonParty' no fue encontrado.");
        }
    }
}

// setBackgroundOnFriday();
