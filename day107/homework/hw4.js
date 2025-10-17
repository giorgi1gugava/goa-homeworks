function howMuchILoveYou(nbPetals) {
    let name = ["I love you","a little","a lot","passionately","madly","not at all"]
    let count = 0
    for (let i = 1;i < nbPetals; i +=1){
      count += 1
      if (count == name.length){
        count = 0
      }
      
}
  return name[count]
}