document.addEventListener("DOMContentLoaded", function () {
    fetch("../../header/header.html")
        .then(response => response.text())
        .then(html => {
            document.querySelector("body").insertAdjacentHTML("afterbegin", html);
        });
});

