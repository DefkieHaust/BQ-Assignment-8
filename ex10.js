//  Get sum of two arrays

let sa1 = document.getElementById("sa1");
let sa2 = document.getElementById("sa2");

function arraySum(array) {
    arrayraw = array.split(",");
    array = [];
    
    arrayraw.forEach(element => {
        let newElement = parseInt(element);
        if (!isNaN(newElement)) {
            array.push(newElement);
        }
    });
    if (array.length == 0) {
        return "-";
    }

    let sa = array.reduce((partialSum, a) => partialSum + a, 0);

    if (isNaN(sa) || !isFinite(sa)) {
        return "-";
    } else {
        return sa;
    }
}

function arrayCorrector(text) {
    let cc = ""
    let lst = text.value.replace(/[^\d,]/g, "")
    let last = ",";
    
    for (let i = 0; i < lst.length; i++) {
        if (last == "," && lst[i] == ",") {
            continue
        }
        cc += lst[i];
        last = lst[i];
    }

    return cc;
}

function getSum() {
    let sa1l = sa1.value = arrayCorrector(sa1);
    let sa2l = sa2.value = arrayCorrector(sa2);

    let sa = "";

    if (sa1l == "" && sa2l == "") {
        sa = "-";
        console.log(`Array input is Empty`);
    } else {
        if (sa2l  == "") {
            sa = arraySum(sa1l);
        } else if (sa1l == "") {
            sa = arraySum(sa2l);
        } else {
            sa1l = arraySum(sa1l);
            sa2l = arraySum(sa2l);

            sa = `${sa1l} + ${sa2l} = ${sa1l + sa2l}`
        }
    }

    
    document.getElementById("sa").innerHTML = sa;
}

function keyRegex(e) {
    const key = e.key;
  
    if (/\d|\,/.test(key)) {
      return true;
    }
  
    e.preventDefault();
};

sa1.addEventListener("keypress", keyRegex);
sa2.addEventListener("keypress", keyRegex);
sa1.addEventListener("input", getSum);
sa2.addEventListener("input", getSum)