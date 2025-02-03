function highlight() {
    document.querySelectorAll("strong").forEach(element => {
        element.style.color = "green";
    });
}

function return_normal() {
    document.querySelectorAll("strong").forEach(element => {
        element.style.color = "black";
    });
}
