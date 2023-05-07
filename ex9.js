// Construct a triangle

let tp1 = document.getElementById("tp1");
let tp2 = document.getElementById("tp2");

let tbutton = document.getElementById("tbutton");

let pattern = document.getElementById("pattern");

function createTriangle(char, size) {
    let triangle = "";
    for (let i = 1; i <= size; i++) {
        triangle += (char + " ").repeat(i) + "<br>";
    }
    return triangle;
}

function testButton() {
    if (tp1.value && tp2.value) {
        tbutton.disabled = false;
        pattern.innerHTML = createTriangle(tp1.value, tp2.value);
    } else {
        tbutton.disabled = true;
    }
}

tp1.addEventListener("input", function () {
    if (tp1.value) {
        tp1.value = tp1.value[0];
        testButton();
    }
});

tp2.addEventListener("input", function () {
    if (tp2.value) {
        tp2.value = (parseInt(tp2.value) > 25) ? 25 : tp2.value;
        testButton();
    }
});