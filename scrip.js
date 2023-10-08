let button_left = document.getElementById('left');
let button_right = document.getElementById('right');
let img_items = document.querySelectorAll('.image-items');
let startSlider = 0;
let endSlider = img_items.length-1
let container = document.getElementById('container')
let shopping = document.getElementById('shopping')
let message = document.getElementById('message')

function fun(){
  container.style.opacity='0.5'
  shopping.style.opacity='0.5'
  message.style.opacity='0.5'
  
}
 
function gun(){
  container.style.opacity='1'
  shopping.style.opacity='1'
  message.style.opacity='1'
}

button_left.addEventListener('click',()=>{
  if(startSlider<=0){
    startSlider = startSlider +100;
  }
  img_items.forEach(element =>{
       
    element.style.transform  =`translateX(${startSlider}%)`;
    

})
})

button_right.addEventListener('click', ()=>{
    startSlider= startSlider -100;
    if(startSlider>=(endSlider*(-100))){
    img_items.forEach(element =>{
       
        element.style.transform  =`translateX(${startSlider}%)`;
        

    })
}
})