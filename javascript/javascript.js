/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function showMenu() {

    var elements = document.getElementsByClassName("topnav-link");

    for (var i = 0; i < elements.length; i++) {

        if (elements[i].className === "topnav-link") {

            elements[i].className += " responsive";

        } else {

            elements[i].className = "topnav-link";

        }

    }

}

function myFunction() {
    console.log("here")
    var x = document.getElementById("mainTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function openCity(evt, cityName) {
    var i, tabcontent,
            tabcontent = document.getElementsByClassName('tabcontent');
    console.log(tabcontent);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    document.getElementById(cityName).style.display = 'block';

}
