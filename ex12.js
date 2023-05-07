//  Reverse an array

let ra = document.getElementById("ra");

ra.addEventListener("input", function() {
    let cc = ""
    let lst = ra.value.replace(/[^\d,]/g, "")
    let last = ",";
    
    for (let i = 0; i < lst.length; i++) {
        if (last == "," && lst[i] == ",") {
            continue
        }
        cc += lst[i];
        last = lst[i];
    }

    let ral = ra.value = cc;

    if (ral == "") {
        ral = "-";
        console.log(`Array input is Empty`);
    } else {
        ralraw = ral.split(",");
        ral = [];
        
        ralraw.forEach(element => {
            let newElement = parseInt(element);
            if (!isNaN(newElement)) {
                ral.push(newElement);
            }
        });

        for (let i = 0; i < Math.floor(ral.length / 2); i++) {
            const temp = ral[i];
            ral[i] = ral[ral.length - 1 - i];
            ral[ral.length - 1 - i] = temp;
          }
    }

    console.log(ral);
    
    document.getElementById("ral").innerHTML = ral;
})

ra.addEventListener("keypress", function(e) {
    const key = e.key;
 
    console.log(key);
    if (/\d|\,/.test(key)) {
        return true;
    }
  
    e.preventDefault();
  });