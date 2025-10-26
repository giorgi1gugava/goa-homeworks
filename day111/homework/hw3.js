function killcount(counselors, jason) {
    let victims = [];
    
    for (let i = 0; i < counselors.length; i++) {
      if (counselors[i][1] < jason) {
        victims.push(counselors[i][0]);
      }
    }
    
    return victims;
  }