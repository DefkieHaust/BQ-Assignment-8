//  Check grade

let grade = document.getElementById("grade");

grade.addEventListener("input", function() {
    let gradel = grade.value;

    if (gradel == "") {
        gradel = "-";
        console.log(`Marks input is Empty`);
    } else {
        gradel = Number(gradel)
        if (gradel >= 90 && gradel <= 100) { 
            gradel = "S grade";
        } else if (gradel >= 80 && gradel <= 90) {
            gradel = "A grade";
        } else if (gradel >= 70 && gradel <= 80) {
            gradel = "B grade";
        } else if (gradel >= 60 && gradel <= 70) {
            gradel = "C grade";
        } else if (gradel >= 50 && gradel <= 60) {
            gradel = "D grade";
        } else if (gradel >= 40 && gradel <= 50) {
            gradel = "E grade";
        } else if (gradel >= 0 && gradel <= 40) { 
            gradel = "Student has failed ";
        } else {
            gradel = "Invalid marks";
        }

        console.log(`${gradel}`);
    }

    document.getElementById("gradel").innerHTML = gradel;
})