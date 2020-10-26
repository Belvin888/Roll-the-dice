function myFunction() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomImage1 = "images/dice" + randomNumber1 + ".png";

    var dice1 = document.querySelectorAll("img")[2].setAttribute("src", randomImage1);


    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImage2 = "images/dice" + randomNumber2 + ".png";

    var dice2 = document.querySelectorAll("img")[3].setAttribute("src", randomImage2);

    if (randomNumber1 > randomNumber2) {
        var result = document.querySelector("h1").innerHTML = "Tom Won!!";

    } else if (randomNumber1 < randomNumber2) {
        var result = document.querySelector("h1").innerHTML = "Jerry Won!!"

    } else {
        var result = document.querySelector("h1").innerHTML = "Draw"
    }

    alert(result);
}

alert(result);






// if (randomNumber1 > randomNumber2) {
//     alert("Tom Won")

// } else if (randomNumber1 < randomNumber2) {
//     alert("Jerry Won!")

// } else {
//     alert("Draw!")
// }