/*function changeName(type) {
    document.getElementById("nameText").value = type.value;
}*/

function changeName(nameParam) {

    console.log("debug " + nameParam);
    document.getElementById("nameText").innerHTML = document.getElementById("name").value;

    //if (nameParam.value == "English") {
    //    document.getElementById("nameText").innerHTML = "whatever";
    //} else if (type.value == "Japanese")

    //  document.getElementById("nameText").value = type.value;
}

function changeEffect(effectParam) {
    document.getElementById("effectText").innerHTML = document.getElementById("effect").value;
}

$(document).ready(function() {
    $("#packTable").tablesorter();
});