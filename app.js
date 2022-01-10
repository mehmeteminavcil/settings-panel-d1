const darkBtn = document.querySelector("#dark-btn");

darkBtn.addEventListener("change", function() {
    if (this.checked) {
        document.body.classList.toggle("dark-mode");
        console.log("Checkbox is checked..");
    } else {
        console.log("Checkbox is not checked..");
    }
});