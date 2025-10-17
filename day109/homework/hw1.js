function filter_list(l) {
    let sum = [];
    for (let i = 0;i < l.length; i++){
      if (typeof l[i] === 'number'){
        sum.push(l[i]);
      }
  }
    return sum;
  }