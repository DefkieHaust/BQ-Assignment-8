// Perform arithmatic operations 

let m1 = document.getElementById("m1");
let m2 = document.getElementById("m2");

let ms = document.getElementsByClassName("ms");

let mo = document.getElementById("mo");

function replaceOpr() {
    mo.innerHTML = this.innerHTML;
    doMath();
}

function doMath() {
    let opr = mo.innerHTML;
    let total = "-";

    if (m1.vlaue != "" && m2.value != "") {    
        if (opr == "add") {
            total = Number(m1.value) + Number(m2.value); 
        } else if (opr == "subtract") {
            total = Number(m1.value) - Number(m2.value);
        } else if (opr == "multiply") {
            total = Number(m1.value) * Number(m2.value);
        } else if (opr == "divide") {
            total = Number(m1.value) / Number(m2.value);
        } else if (opr == "modulus") {
            total = Number(m1.value) % Number(m2.value);
        }
    } 
        


    document.getElementById("ma").innerHTML = total;
}

m1.addEventListener("input", doMath);
m2.addEventListener("input", doMath);

for (let i = 0; i < ms.length; i++) {
    ms[i].addEventListener("click", replaceOpr);
  }