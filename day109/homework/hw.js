function disemvowel(str) {
    let text = ''
    for (let i = 0; i < str.length; i++){
      if (!"aeiouAEIOU".includes(str[i])){
        text += str[i]
  }
    }
    return text
  }