// HTML elements ko select karna
const button = document.getElementById("myButton");
const heading = document.getElementById("heading");

// Button click hone par kya hoga
button.addEventListener("click", function() {
    heading.textContent = "Button Click Ho Gaya!";
    heading.style.color = "#28a745";
    document.body.style.backgroundColor = "#e2f0d9";
});
