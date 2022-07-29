function helpPopUp() {

    document.getElementById("popup-1").classList.toggle("active"); 

};

function ConfirmDeletion() {

    let confirmAction = confirm("Are you sure you want to delete this topic?");

    if (confirmAction) {
        alert('Topic was deleted from the database.');
    }
    else {
        event.preventDefault();
        alert('Deletion cancelled.');
    }

};

var color = document.querySelectorAll(".form-control");
color.forEach(color => color.addEventListener("focus", function () { color.style.backgroundColor = "#ffff99" }));
color.forEach(color => color.addEventListener("blur", function () { color.style.backgroundColor = ""}));



/*
function changeColorOnMouseDown() {

   
    color.addEventListener('focus', style.backgroundColor = "#ffff99");
};


function changeColorOnMouseUp() {
    var color = document.getElementById("formColor")
    color.addEventListener('blur', style.backgroundColor = "#FFFFFF");
    };
    */