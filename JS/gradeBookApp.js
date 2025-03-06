const getAverage = (test) => {
    if (test.length === 0) return 0;
    let total = 0;
    let i = 0;
    while (i < test.length) {
      total += test[i];
      i++;
    }
    return total / test.length;
    }
    
    //console.log(getAverage([10, 20, 30]));
    
    const getGrade = (student) => {
    if (student <= 59) {
      return "F";
    } else if (student <= 69) {
      return "D";
    } else if (student <= 79) {
      return "C";
    } else if (student <= 89) {
      return "B";
    } else if (student <= 99) {
      return "A";
    } else if (student === 100) {
      return "A++";
    }
    }
    
    //console.log(getGrade(91))
    
    const hasPassingGrade = (is_score) => {
    let grade = getGrade(is_score);
    return grade !== "F";
    }
    
    //console.log(hasPassingGrade(80));
    //console.log(hasPassingGrade(40)); 
    
    const studentMsg = (scores, student_score) => {
    let points = getAverage(scores);
    let grade = getGrade(student_score);
    let pass = hasPassingGrade(student_score);
    if (pass) { 
      return `Class average: ${points}. Your grade: ${grade}. You passed the course.`;
    } else {
      return `Class average: ${points}. Your grade: ${grade}. You failed the course.`;
    }
    }
    console.clear();
    console.log("\x1b[36m")
    console.log("Antoinio")
    console.log(studentMsg([76, 45, 98, 23, 67], 91))
    console.log("Erika")
    console.log(studentMsg([76, 45, 98, 23, 67], 61))
    console.log("Marta")
    console.log(studentMsg([76, 45, 98, 23, 67], 100))
    console.log("Pedro")
    console.log(studentMsg([76, 45, 98, 23, 67], 49))
    console.log("\x1b[0m")