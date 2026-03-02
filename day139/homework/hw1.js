function gradeCategory(score) {
    return score < 0 || score > 100 ? "Invalid score"
         : score >= 90 ? "Excellent"
         : score >= 75 ? "Good"
         : score >= 50 ? "Average"
         : "Fail";
  }
  
  console.log(gradeCategory(95));  
  console.log(gradeCategory(80));  
  console.log(gradeCategory(60));  
  console.log(gradeCategory(30));  
  console.log(gradeCategory(-5));  
  console.log(gradeCategory(120)); 