// Get range of even numbers 

let st1 = document.getElementById("st1");
let ed1 = document.getElementById("ed1");

let eobutton = document.getElementById("eobutton");

let eoo = document.getElementById("eoo");

function getRange(start, end) {
    let range = "";
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            range += i + "<br>";
        }
    }
    return range;
    
}

function buttonValidation() {
    if (st1.value && ed1.value) {
        eobutton.disabled = false;
        eoo.innerHTML = getRange(parseInt(st1.value), parseInt(ed1.value));
    } else {
        eobutton.disabled = true;
    }
}

st1.addEventListener("input", buttonValidation);
ed1.addEventListener("input", buttonValidation);