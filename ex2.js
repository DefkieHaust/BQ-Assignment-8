//  Check if value is a number or not

let norn = document.getElementById("norn");

norn.addEventListener("input", function() {
    let nornl = norn.value;

    if (nornl == "") {
        nornl = "-";
        console.log(`Text input is Empty`);
    } else {
        if (isNaN(nornl)) {
            nornl = "is not a number";
        } else {
            nornl = "is a number";
        }
        console.log(`Value ${nornl}`);
    }

    document.getElementById("nornl").innerHTML = nornl;
})