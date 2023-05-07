//  Find the largest value

let lv1 = document.getElementById("lv1");
let lv2 = document.getElementById("lv2");

function findLargest() {
    let lv1l = Number(lv1.value);
    let lv2l = Number(lv2.value);
    let lv = "-";
    let center = "≠";

    if (lv1l != "" && lv2l != "") {
        if (lv1l > lv2l) {
            lv = `${lv1l} is larger`;
            center = ">";
        } else if (lv1l < lv2l) {
            lv = `${lv2l} is larger`;
            center = "<";
        } else {
            lv = "Both are equal";
            center = "=";
        }
        console.log(`Value ${lv}`);
    }

    document.getElementById("lv").innerHTML = lv;
    document.getElementById("center").innerHTML = center;
}

lv1.addEventListener("input", findLargest);
lv2.addEventListener("input", findLargest);