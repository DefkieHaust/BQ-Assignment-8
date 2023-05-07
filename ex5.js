// Get triangle type

let tv1 = document.getElementById("tv1");
let tv2 = document.getElementById("tv2");
let tv3 = document.getElementById("tv3");

function getTriangle() {
    let tv1l = Number(tv1.value);
    let tv2l = Number(tv2.value);
    let tv3l = Number(tv3.value);
    let tt = "-";
    let center1 = "≠";
    let center2 = "≠";

    if (tv1l != "" && tv2l != "") {
        if (tv1l > tv2l) {
            center1 = ">";
        } else if (tv1l < tv2l) {
            center1 = "<";
        } else {
            center1 = "=";
        }
    }
    if (tv2l != "" && tv3l != "") {
        if (tv2l > tv3l) {
            center2 = ">";
        } else if (tv2l < tv3l) {
            center2 = "<";
        } else {
            center2 = "=";
        }
    }

    if (tv1l != "" && tv2l != "" && tv3l != "") {
        // check if triangle is equilateral, isosceles or scalene
        if (tv1l == tv2l && tv2l == tv3l) {
            tt = "Equilateral triangle";
        } else if (tv1l == tv2l || tv2l == tv3l || tv1l == tv3l) {
            tt = "Isosceles triangle";
        } else {
            tt = "Scalene triangle";
        }
        console.log(tt);       
    }

    document.getElementById("tt").innerHTML = tt;
    document.getElementById("tcenter1").innerHTML = center1;
    document.getElementById("tcenter2").innerHTML = center2;
}

tv1.addEventListener("input", getTriangle);
tv2.addEventListener("input", getTriangle);
tv3.addEventListener("input", getTriangle);