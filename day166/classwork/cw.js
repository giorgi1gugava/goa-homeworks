function getData(){
    let http = new XMLHttpRequest();
    console.log(http);

    if(http.readyState == 4 && http.status == 200){
        if(http.status == 200){
            let date = http.responseText
            let parseDate =  JSON.parse(date);
            console.log(parseDate);
        }
    }
        http.open("GET","https://jsonplaceholder.typicode.com/todos");
        http.send();
    
}

getData();