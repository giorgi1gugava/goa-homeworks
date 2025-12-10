let f = document.getElementById("form");

f.addEventListener('submit', function(e){
    e.preventDefault();

    const namev = e.target.name.value;
    const saurnamev = e.target.saurname.value;

    console.log(namev);
    console.log(saurnamev);
    


    let namee = document.getElementById("name");
    let saur = document.getElementById("saur");

    namee.innerHTML = "name:" + namev;
    saur.innerHTML = "saurname: " + saurnamev;
});