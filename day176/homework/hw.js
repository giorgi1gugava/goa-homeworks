
let mainDiv = document.getElementById("main-div");


const title = document.getElementById("title");
const backpackImg = document.getElementById("backpack-img");
const description = document.getElementById("description");
const price1 = document.getElementById("price1");
const rating = document.getElementById("rating");

// 
const title1 = document.getElementById("title1");
const backpackImg1 = document.getElementById("black-img");
const description1 = document.getElementById("description1");
const price2 = document.getElementById("price2");
const rating1 = document.getElementById("rating1");
//

const title2 = document.getElementById("title2");
const backpackImg2 = document.getElementById("yellow-img");
const description2 = document.getElementById("description2");
const price3 = document.getElementById("price3");
const rating2 = document.getElementById("rating2");


//
const title3 = document.getElementById("title3");
const backpackImg3 = document.getElementById("end-img");
const description3 = document.getElementById("description3");
const price4 = document.getElementById("price4");
const rating3 = document.getElementById("rating3");
//
// Box 5
const title4 = document.getElementById("title4");
const backpackImg4 = document.getElementById("img4");
const description4 = document.getElementById("description4");
const price5 = document.getElementById("price5");
const rating4 = document.getElementById("rating4");

// Box 6
const title5 = document.getElementById("title5");
const backpackImg5 = document.getElementById("img5");
const description5 = document.getElementById("description5");
const price6 = document.getElementById("price6");
const rating5 = document.getElementById("rating5");

// Box 7
const title6 = document.getElementById("title6");
const backpackImg6 = document.getElementById("img6");
const description6 = document.getElementById("description6");
const price7 = document.getElementById("price7");
const rating6 = document.getElementById("rating6");

// Box 8
const title7 = document.getElementById("title7");
const backpackImg7 = document.getElementById("img7");
const description7 = document.getElementById("description7");
const price8 = document.getElementById("price8");
const rating7 = document.getElementById("rating7");

// Box 9
const title8 = document.getElementById("title8");
const backpackImg8 = document.getElementById("img8");
const description8 = document.getElementById("description8");
const price9 = document.getElementById("price9");
const rating8 = document.getElementById("rating8");

// Box 10
const title9 = document.getElementById("title9");
const backpackImg9 = document.getElementById("img9");
const description9 = document.getElementById("description9");
const price10 = document.getElementById("price10");
const rating9 = document.getElementById("rating9");

// Box 11
const title10 = document.getElementById("title10");
const backpackImg10 = document.getElementById("img10");
const description10 = document.getElementById("description10");
const price11 = document.getElementById("price11");
const rating10 = document.getElementById("rating10");


// Product 12
const title11 = document.getElementById("title11");
const backpackImg11 = document.getElementById("img11");
const description11 = document.getElementById("description11");
const price12 = document.getElementById("price12");
const rating11 = document.getElementById("rating11");

// Product 13
const title12 = document.getElementById("title12");
const backpackImg12 = document.getElementById("img12");
const description12 = document.getElementById("description12");
const price13 = document.getElementById("price13");
const rating12 = document.getElementById("rating12");

// Product 14
const title13 = document.getElementById("title13");
const backpackImg13 = document.getElementById("img13");
const description13 = document.getElementById("description13");
const price14 = document.getElementById("price14");
const rating13 = document.getElementById("rating13");

// Product 15
const title14 = document.getElementById("title14");
const backpackImg14 = document.getElementById("img14");
const description14 = document.getElementById("description14");
const price15 = document.getElementById("price15");
const rating14 = document.getElementById("rating14");

// Product 16
const title15 = document.getElementById("title15");
const backpackImg15 = document.getElementById("img15");
const description15 = document.getElementById("description15");
const price16 = document.getElementById("price16");
const rating15 = document.getElementById("rating15");

// Product 17
const title16 = document.getElementById("title16");
const backpackImg16 = document.getElementById("img16");
const description16 = document.getElementById("description16");
const price17 = document.getElementById("price17");
const rating16 = document.getElementById("rating16");

// Product 18
const title17 = document.getElementById("title17");
const backpackImg17 = document.getElementById("img17");
const description17 = document.getElementById("description17");
const price18 = document.getElementById("price18");
const rating17 = document.getElementById("rating17");

// Product 19
const title18 = document.getElementById("title18");
const backpackImg18 = document.getElementById("img18");
const description18 = document.getElementById("description18");
const price19 = document.getElementById("price19");
const rating18 = document.getElementById("rating18");

// Product 20
const title19 = document.getElementById("title19");
const backpackImg19 = document.getElementById("img19");
const description19 = document.getElementById("description19");
const price20 = document.getElementById("price20");
const rating19 = document.getElementById("rating19");



const home = document.getElementById("home-p");



async function getInfo() {
    try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();

        title.textContent = data[0].title;
        backpackImg.src = data[0].image;
        description.textContent = data[0].description;
        price1.textContent = "Price: $" + data[0].price;
        rating.textContent =
            `Rate: ${data[0].rating.rate}⭐, Count: ${data[0].rating.count}`;

        // 
        title1.textContent = data[1].title;
        backpackImg1.src = data[1].image;
        description1.textContent = data[1].description;
        price2.textContent = "Price: $" + data[1].price;
        rating1.textContent =
            `Rate: ${data[1].rating.rate}⭐, Count: ${data[1].rating.count}`;

        //
        title2.textContent = data[2].title;
        backpackImg2.src = data[2].image;
        description2.textContent = data[2].description;
        price3.textContent = "Price: $" + data[2].price;
        rating2.textContent = `Rate: ${data[2].rating.rate}⭐, Count: ${data[2].rating.count}`;




        //
        title3.textContent = data[3].title;
        backpackImg3.src = data[3].image;
        description3.textContent = data[3].description;
        price4.textContent = "Price: $" + data[3].price;
        rating3.textContent =
            `Rate: ${data[3].rating.rate}⭐, Count: ${data[3].rating.count}`;


        // Product 5
        title4.textContent = data[4].title;
        backpackImg4.src = data[4].image;
        description4.textContent = data[4].description;
        price5.textContent = "Price: $" + data[4].price;
        rating4.textContent =
            `Rate: ${data[4].rating.rate}⭐, Count: ${data[4].rating.count}`;

        // Product 6
        title5.textContent = data[5].title;
        backpackImg5.src = data[5].image;
        description5.textContent = data[5].description;
        price6.textContent = "Price: $" + data[5].price;
        rating5.textContent =
            `Rate: ${data[5].rating.rate}⭐, Count: ${data[5].rating.count}`;

        // Product 7
        title6.textContent = data[6].title;
        backpackImg6.src = data[6].image;
        description6.textContent = data[6].description;
        price7.textContent = "Price: $" + data[6].price;
        rating6.textContent =
            `Rate: ${data[6].rating.rate}⭐, Count: ${data[6].rating.count}`;

        // Product 8
        title7.textContent = data[7].title;
        backpackImg7.src = data[7].image;
        description7.textContent = data[7].description;
        price8.textContent = "Price: $" + data[7].price;
        rating7.textContent =
            `Rate: ${data[7].rating.rate}⭐, Count: ${data[7].rating.count}`;

        // Product 9
        title8.textContent = data[8].title;
        backpackImg8.src = data[8].image;
        description8.textContent = data[8].description;
        price9.textContent = "Price: $" + data[8].price;
        rating8.textContent =
            `Rate: ${data[8].rating.rate}⭐, Count: ${data[8].rating.count}`;

        // Product 10
        title9.textContent = data[9].title;
        backpackImg9.src = data[9].image;
        description9.textContent = data[9].description;
        price10.textContent = "Price: $" + data[9].price;
        rating9.textContent =
            `Rate: ${data[9].rating.rate}⭐, Count: ${data[9].rating.count}`;

        // Product 11
        title10.textContent = data[10].title;
        backpackImg10.src = data[10].image;
        description10.textContent = data[10].description;
        price11.textContent = "Price: $" + data[10].price;
        rating10.textContent =
            `Rate: ${data[10].rating.rate}⭐, Count: ${data[10].rating.count}`;

        // Product 12
        title11.textContent = data[11].title;
        backpackImg11.src = data[11].image;
        description11.textContent = data[11].description;
        price12.textContent = "Price: $" + data[11].price;
        rating11.textContent = `Rate: ${data[11].rating.rate}⭐, Count: ${data[11].rating.count}`;

        // Product 13
        title12.textContent = data[12].title;
        backpackImg12.src = data[12].image;
        description12.textContent = data[12].description;
        price13.textContent = "Price: $" + data[12].price;
        rating12.textContent = `Rate: ${data[12].rating.rate}⭐, Count: ${data[12].rating.count}`;

        // Product 14
        title13.textContent = data[13].title;
        backpackImg13.src = data[13].image;
        description13.textContent = data[13].description;
        price14.textContent = "Price: $" + data[13].price;
        rating13.textContent = `Rate: ${data[13].rating.rate}⭐, Count: ${data[13].rating.count}`;

        // Product 15
        title14.textContent = data[14].title;
        backpackImg14.src = data[14].image;
      
        price15.textContent = "Price: $" + data[14].price;
        rating14.textContent = `Rate: ${data[14].rating.rate}⭐, Count: ${data[14].rating.count}`;

        // Product 16
        title15.textContent = data[15].title;
        backpackImg15.src = data[15].image;
        description15.textContent = data[15].description;
        price16.textContent = "Price: $" + data[15].price;
        rating15.textContent = `Rate: ${data[15].rating.rate}⭐, Count: ${data[15].rating.count}`;

        // Product 17
        title16.textContent = data[16].title;
        backpackImg16.src = data[16].image;
        description16.textContent = data[16].description;
        price17.textContent = "Price: $" + data[16].price;
        rating16.textContent = `Rate: ${data[16].rating.rate}⭐, Count: ${data[16].rating.count}`;

        // Product 18
        title17.textContent = data[17].title;
        backpackImg17.src = data[17].image;
        description17.textContent = data[17].description;
        price18.textContent = "Price: $" + data[17].price;
        rating17.textContent = `Rate: ${data[17].rating.rate}⭐, Count: ${data[17].rating.count}`;

        // Product 19
        title18.textContent = data[18].title;
        backpackImg18.src = data[18].image;
        description18.textContent = data[18].description;
        price19.textContent = "Price: $" + data[18].price;
        rating18.textContent = `Rate: ${data[18].rating.rate}⭐, Count: ${data[18].rating.count}`;

        // Product 20
        title19.textContent = data[19].title;
        backpackImg19.src = data[19].image;
        description19.textContent = data[19].description;
        price20.textContent = "Price: $" + data[19].price;
        rating19.textContent = `Rate: ${data[19].rating.rate}⭐, Count: ${data[19].rating.count}`;



        console.log(data);

    } catch (error) {
        console.log("Error: " + error);
    }
}


getInfo();





