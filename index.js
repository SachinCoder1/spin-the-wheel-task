let container = document.querySelector(".container");
let angleClass = document.querySelector(".anglerotate");
let btn = document.getElementById("spin");


let randomSeconds = (Math.random() * 10).toFixed(1)

let totalRotates = randomSeconds * 360;



// handle click of spin

btn.addEventListener("click", () => {
    setInterval(() => {
        container.style.transform = `rotate(${totalRotates}deg)`;
    }, randomSeconds);
      
   
  




    // console.log(totalRotates)
    setTimeout(() => {
        let nthElement =totalRotates /360;
        console.log(nthElement, "this is nth element")
        const angle = nthElement * 45
    
        angleClass.innerText = `${(angle).toFixed(0)} deg`
        console.log(`The arrow is pointing to ${angle} degree in the circle`)
        
    }, randomSeconds);


})








