// Zmienne przechowujące:
// Ilość kliknięć w karty
var numClick = 0;
// Indeks pierwszej wybranej karty
var first;
// Indeks drugiej wybranej karty
var second;
// Ilość dopasowań (domyślnie 0)
var match = 0;
// Defaultowe zdjęcie odwrotu
var back = "images/qmark.png";
//  tablicę zwracaną przez funkcję shuffle
var sh;
// tablicę przechowującą karty
var cardsArray = ["images/pwr.png", "images/pedro.png", "images/kredek.png", "images/kredek.png", "images/pwr.png", "images/pedro.png"];

// Funkcja wywołująca clearInterval
function stopTimer() {
    clearInterval();
}

// Funkcja "tasująca naszą tablicę"
// Tak zwany "Fisher-Yates Shuffle"
// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    
    var currentIndex = array.length, temporaryValue, randomIndex;
    // Jeżeli są jakieś elementy do potasowania
    while (0 !== currentIndex) {
        // Wybieramy ten element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // I go zamieniamy z aktualnym elementem
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// shufflujemy
sh = shuffle(cardsArray);

// Funkcja odpowiedzialna za wybieranie kart
// Jest wywoływana w pliku html, przyjmuje argumenty 0-5 (indeksy tablicy)
function choose(card) {
    
    document.getElementById("qmark00", "qmark01", "qmark02", "qmark10", "qmark11", "qmark12").src = back;
    document.getElementById("qmark00", "qmark01", "qmark02", "qmark10", "qmark11", "qmark12").onclick = function () {
        if (numClick == 0) {
            // Pierwsza karta
            first = card;
            // Zamiana dotychczasowo wyświetlanej karty na tą wybraną
            debugger;
            document.images[card].src = cardsArray[card];
            // Zliczenie kliknięcia
            numClick = 1;
        }
        else if (numClick == 1) {
            // Zliczenie kliknięcia
            numClick = 2;
            // Druga karta
            second = card;
            // Zmiana karty
            document.images[card].src = cardsArray[card];
            // przypisanie setInterval do timera
            timer = setInterval(control, 500);
        }
        else {
            alert("Możesz tylko raz kliknąć");
        }
 
    }
}

// Funkcja sprawdzająca czy karty do siebie pasują
function control() {
    document.getElementById("qmark00", "qmark01", "qmark02", "qmark10", "qmark11", "qmark12").src = back;
    document.getElementById("qmark00", "qmark01", "qmark02", "qmark10", "qmark11", "qmark12").onclick = function () {
        // Wywołanie funkcji stopTimer
        stopTimer();
        // Wyzerowanie ilości kliknięć
        numClick = 0;
        // Instrukcja warunkowa sprawdzająca, czy karty pasują (po indeksach tablicy, czy zdjęcie w danych komórkach są te same)
        if (cardsArray[first] == cardsArray[second]) {
            // Zliczenie spasowania 
            match++;
            // Wygranie gry w memory (3 dopasowania, wszystkie karty odsłonięte)
            if (match == 3) {
                alert("Udało się");

            }
        }
        // Jeśli nie pasująm odwracamy karty i wyświetlamy zamiast nich defaultowe zdjęcie
        else {
            document.images[first].src = back;
            document.images[second].src = back;
            return;
        }
    }
}