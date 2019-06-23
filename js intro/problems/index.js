// // // let food1 = "phở";
// // // let food2 = "chuối";
// // // let food3 = "bưởi";
// // // let food4 = "sữa chua";
// // // let food5 = "khoai";

// // // let foodArray = ["pho"]; // Emty array
// // let foodArray = ["Pho"];
// //     foodArray = [ 'Pho', "chuoi" ,"buoi" ,"khoai" ]

// // let i = 2
// //     console.log(foodArray[ i ]);// 1 => index 
// // // console.log(foodArray);
// // // console.log(foodArray.length)

// // let newItem = "sua chua"
// // foodArray.push(" newItem ");

// // // console.log(foodArray)
// // // console.log(foodArray.length)

// // Clarity
// //let person = ["Phuong" , 20 , "Ha Noi" , 3 , false , 475];

// // let person = {
// //     name: "Phuong", // < property value > : < value >
// //     age: 20,
// //     location: "Ha Noi"
// // }; // JSON
// // // console.log( person );
// // // console.log (person.location)
// // let p = prompt("Enter what to see");
// // console.log (person[p]);


// let company = {
//     name: "Iliat",
//     year: 2016,
//     location: "Thanh Cong"
//   };

// // console.log(company.name);
// // console.log(company.year);
// // console.log(company.location);

// //   In ra ca 3 thong tin
  
// //   let profile = {
// //     name: "X",
// //     age: 30,
// //     favoriteMovies: ["Black sails", "Breaking bad", "The end of f*cking world"]
// //   }
// //   console.log(profile.age)
// //   console.log(profile.favoriteMovies[0])
// //   // In ra tuoi & phim dau tien ma nguoi nay thich
  
// //   let products = [
// //     {
// //       name: "Pro stand",
// //       price: 999,
// //       origin: "USA",
// //       brand: "Apple",
// //     },
// //     {
// //       name: "Banh my hoi an dac biet",
// //       price: 1,
// //       origin: "VN",
// //       brand: "Banh my hoi an"
// //     },
// //     {
// //       name: "Phở bò",
// //       price: 2,
// //       origin: "VN",
// //       brand: "Phở lý quốc sư"
// //     },
// //   ]
// //   console.log(products[products.length-1])
// //   // In ra duoc ten, gia & xuat xu cua san pham cuoi cung



function saysmt( m ) {
    alert( m );
}
// funetion sayHello(){
//     alert(Hello there);
// }


// function chucmung() {
//     alert("chuc mung nam moi");
// }

// function chucmungnammoi() {
//     alert("chuc mung");
// }

// sayHello("bye bye")

// console.log("Minh");

//log name
// function name(userName){
//     console.log(userName);
// }
// name('minh')
// name('duc anh')

// //cong so
//  function number(x,y){
//      console.log(x,y);
//      console.log(x+y);
//  }
//  number(345,9656);



let liList =document.getElementsByClassName("new");
console.log(liList);

let firstLi = liList[0];
console.log(firstLi);
liList[0].style.backgroundColor="#587";
liList[1].style.backgroundColor="#587";
liList[2].style.backgroundColor="#587";
liList[3].style.backgroundColor="#587";


let pMessage = document.getElementById("msg");
 console.log(pMessage);
// pMessage.style.color = "red";

let x = prompt();


function readit() {
    let input = document.getElementById("input box");
    let text = input.value ;

    let message = `Hello ${text}, have a nice day`;
    
    let pMessage = document.getElementById('msg');

    pMessage.textContent = message;
}
