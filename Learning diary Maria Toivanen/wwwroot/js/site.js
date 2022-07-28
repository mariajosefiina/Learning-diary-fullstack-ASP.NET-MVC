function helpPopUp() {

    document.getElementById("popup-1").classList.toggle("active"); 

};

function ConfirmDeletion() {

    let confirmAction = confirm("Are you sure you want to delete this topic?");

    if (confirmAction) {
        alert('Topic was saved to the database.');
    }
    else {
        alert('Deletion cancelled.');
    }

};