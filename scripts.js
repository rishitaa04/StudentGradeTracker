const submit = document.getElementById("button");

function GradeTracker(){

    const physics = document.getElementById("physics");
    const chemistry = document.getElementById("chemistry");
    const maths = document.getElementById("maths");
    const english = document.getElementById("english");
    const IT = document.getElementById("IT");

    Marks1 = parseFloat(physics.value);
    Marks2 = parseFloat(chemistry.value);
    Marks3 = parseFloat(maths.value);
    Marks4 = parseFloat(english.value);
    Marks5 = parseFloat(IT.value);

    let subjects = [Marks1,Marks2,Marks3,Marks4,Marks5];
    for(let i of subjects){
        if(isNaN(i) || i<0 || i>100){
            alert("Enter a valid number");
            return;
        }else{
            const TotalMarks = (Marks1+Marks2+Marks3+Marks4+Marks5);
            const len = subjects.length;

            const percentage = (TotalMarks / len);
    
            let grade;
            if (percentage >= 90) grade = "A+";
            else if (percentage >= 80) grade = "A";
            else if (percentage >= 70) grade = "B";
            else if (percentage >= 60) grade = "C";
            else if (percentage >= 50) grade = "D";
            else grade = "F";

            alert(`Total Marks: ${TotalMarks}\nPercentage: ${percentage.toFixed(2)}%\nGrade: ${grade}`);
            return;

        }
    }
}

submit.addEventListener("click",GradeTracker);