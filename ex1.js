//  Check if value is even or odd

let eoro = document.getElementById("eoro");

eoro.addEventListener("input", function() {
    let eorol = eoro.value;

    if (eorol == "") {
        eorol = "-";
        console.log(`Number input is Empty`);
    } else {
        if (eorol % 2 == 0) {
            eorol = "Even";
        } else {
            eorol = "Odd";
        }
        console.log(`Number is ${eorol}`);
    }

    document.getElementById("eorol").innerHTML = eorol;
})