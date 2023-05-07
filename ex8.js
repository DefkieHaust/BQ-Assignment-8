//  Get largest from array

let la = document.getElementById("la");

la.addEventListener("input", function() {
    let cc = ""
    let lst = la.value.replace(/[^\d,]/g, "")
    let last = ",";
    
    for (let i = 0; i < lst.length; i++) {
        if (last == "," && lst[i] == ",") {
            continue
        }
        cc += lst[i];
        last = lst[i];
    }

    let lal = la.value = cc;

    if (lal == "") {
        lal = "-";
        console.log(`Array input is Empty`);
    } else {
        lalraw = lal.split(",");
        lal = [];
        
        lalraw.forEach(element => {
            let newElement = parseInt(element);
            if (!isNaN(newElement)) {
                lal.push(newElement);
            }
        });

        lal = Math.max(...lal);
    }

    if (isNaN(lal) || !isFinite(lal)) {
        lal = "-";
    } else {
        console.log(`Largest number is ${lal}`);
    }
    
    document.getElementById("lal").innerHTML = lal;
})

la.addEventListener("keypress", function(e) {
    const key = e.key;
  
    if (/\d|\,/.test(key)) {
      return true;
    }
  
    e.preventDefault();
  });