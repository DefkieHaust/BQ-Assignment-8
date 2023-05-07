//  Find the largest of the three values

let l3v1 = document.getElementById("l3v1");
let l3v2 = document.getElementById("l3v2");
let l3v3 = document.getElementById("l3v3");

function findLargestOfThree() {
    let lv1l = Number(l3v1.value);
    let lv2l = Number(l3v2.value);
    let lv3l = Number(l3v3.value);
    let lv = "-";
    let center1 = "≠";
    let center2 = "≠";

    if (lv1l != "" && lv2l != "") {
        if (lv1l > lv2l) {
            center1 = ">";
        } else if (lv1l < lv2l) {
            center1 = "<";
        } else {
            center1 = "=";
        }
    }
    if (lv2l != "" && lv3l != "") {
        if (lv2l > lv3l) {
            center2 = ">";
        } else if (lv2l < lv3l) {
            center2 = "<";
        } else {
            center2 = "=";
        }
    }

    lv = Math.max(lv1l, lv2l, lv3l);
    if (lv == 0) {
        lv = "-";
    } else {
        lv = `${lv} is the largest`;
        console.log(lv);
    }

    document.getElementById("l3v").innerHTML = lv;
    document.getElementById("center1").innerHTML = center1;
    document.getElementById("center2").innerHTML = center2;
}

l3v1.addEventListener("input", findLargestOfThree);
l3v2.addEventListener("input", findLargestOfThree);
l3v3.addEventListener("input", findLargestOfThree);