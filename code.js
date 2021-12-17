
let arr =[] 
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
const btn  = document.getElementById('btn')
const color = document.querySelector('.color')



function getRandomNumber() {
    for (let i = 0; i <= 5; i++) {
     
        arr.push(hex[Math.floor(Math.random() * 16)])
        
    } return arr.join('')
}
btn.addEventListener('click', function() {
    
    let randomColor = getRandomNumber()
    document.body.style.backgroundColor = '#' + randomColor;
    color.textContent = `#${randomColor}`
    arr = []
    })

  

// let rand = function() {
//     return Math.floor(Math.random() * 17)
// }
//  console.log(Math.random());
//  console.log(rand());


// let arr = []
// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
//  for (let i = 0; i <= 6; i++) {
     
//      arr.push(hex[Math.floor(Math.random() * 17)])
//  }
//  console.log(arr.join(''));
//  console.log();


const dogs = []

function jerk() {
    dogs.push('bulldog')
    console.log(dogs);
}

