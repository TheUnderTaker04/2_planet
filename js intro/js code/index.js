// // Arrow function









// // function clickMe(){
// // alert("Bingo");
// // }

// function onSearch(e){
//     // console.log(e.target);
//    let input = e.target;
//     console.log(input.value);
// }
// const text = document.getElementById('text')
// // 1.Lay duoc button
// const btn = document.getElementById('btn')
// btn.addEventListener("click",()=>{
//     console.log(input.value)
// })


// // 2.Gan click vao ham clickMe
// // JS First class function
// // btn.addEventListener('click', function clickMe() {
// //     alert ("Hura");
// // });

// // const text = document.getElementById('text')
// // console.log()
//    text.addEventListener('keyup', function inputChange(e){
// //     btn.textContent = text.value;
// //     console.log(text.value)
// console.log(e) })


const inputSearch = document.getElementById("text");
console.log(inputSearch);

inputSearch.addEventListener("keyup", (e) => {
    console.log(e.target.value);
})