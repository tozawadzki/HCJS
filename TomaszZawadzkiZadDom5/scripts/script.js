// Funkcja Decipher przyjmująca jako argument kolor. Zmienia kolor tła na wybrany
function Decipher(color) {
    document.getElementById("button").src = "images/Button_Play_Icon_128.png";
    document.getElementById("button").onclick = function () {
        // Ukrycie przycisku
        this.style.visibility = 'hidden';
        // Zmiana koloru tła
        document.body.style.backgroundColor = color;
        alert("Twoje pierwsze zadanie zaliczone!")
    }

}
