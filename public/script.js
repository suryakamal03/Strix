document.addEventListener('DOMContentLoaded',async function shirt(){
    try{  
    const response= await fetch('/api')
    const data= await response.json()
    const shirt= data.shirt
    const cards=document.querySelector('.cards');
    if(shirt.length > 0){
      cards.innerHTML= shirt.map(product =>
        `<div class=card>
          <img src="${product.images && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/150'}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p><strong>₹${Math.floor(product.price * 83)}</strong></p>
          <button>Add to Cart</button>
        </div>`
      ).join('');
    }
    else{
      cards.innerHTML=`no Shirts founded`
    }
    }
    catch(error){
          document.querySelector('.cards').innerHTML = "Error loading shirts";
    }
    // for pants/
    const pant=document.querySelector('.pant');
pant.onclick= async function () {
  try{  
    const response= await fetch('/api')
    const data= await response.json()
    const pant= data.pant;
    const cards=document.querySelector('.cards');
    if(pant.length > 0){
      cards.innerHTML= pant.map(product =>
        `<div class=card>
          <img src="${product.images && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/150'}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p><strong>₹${Math.floor(product.price * 83)}</strong></p>
          <button>Add to Cart</button>
        </div>`
      ).join('');
    }
    else{
      cards.innerHTML=`no pants founded`
    }
    }
    catch(error){
          document.querySelector('.cards').innerHTML = "Error loading pants";
    }
}
const shirt=document.querySelector('.shirt')
shirt.onclick=async function(){
   try{  
    const response= await fetch('/api')
    const data= await response.json()
    const shirt= data.shirt
    const cards=document.querySelector('.cards');
    if(shirt.length > 0){
      cards.innerHTML= shirt.map(product =>
        `<div class=card>
          <img src="${product.images && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/150'}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p><strong>₹${Math.floor(product.price * 83)}</strong></p>
          <button>Add to Cart</button>
        </div>`
      ).join('');
    }
    else{
      cards.innerHTML=`no Shirts founded`
    }
    }
    catch(error){
          document.querySelector('.cards').innerHTML = "Error loading shirts";
    }
}
const shoe=document.querySelector('.shoe')
shoe.onclick=async function(){
   try{  
    const response= await fetch('/api')
    const data= await response.json()
    const shoe= data.shoe
    const cards=document.querySelector('.cards');
    if(shoe.length > 0){
      cards.innerHTML= shirt.map(product =>
        `<div class=card>
          <img src="${product.images && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/150'}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p><strong>₹${Math.floor(product.price * 83)}</strong></p>
          <button>Add to Cart</button>
        </div>`
      ).join('');
    }
    else{
      cards.innerHTML=`no Shoe founded`
    }
    }
    catch(error){
          document.querySelector('.cards').innerHTML = "Error loading shoe";
    }
}
const watch=document.querySelector('.watch')
watch.onclick=async function(){
   try{  
    const response= await fetch('/api')
    const data= await response.json()
    const watch= data.watch
    const cards=document.querySelector('.cards');
    if(watch.length > 0){
      cards.innerHTML= shirt.map(product =>
        `<div class=card>
          <img src="${product.images && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/150'}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p><strong>₹${Math.floor(product.price * 83)}</strong></p>
          <button>Add to Cart</button>
        </div>`
      ).join('');
    }
    else{
      cards.innerHTML=`no watch founded`
    }
    }
    catch(error){
          document.querySelector('.cards').innerHTML = "Error loading watch";
    }
}
const bag=document.querySelector('.bag')
bag.onclick=async function(){
   try{  
    const response= await fetch('/api')
    const data= await response.json()
    const bag= data.bag
    const cards=document.querySelector('.cards');
    if(bag.length > 0){
      cards.innerHTML= shirt.map(product =>
        `<div class=card>
          <img src="${product.images && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/150'}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p><strong>₹${Math.floor(product.price * 83)}</strong></p>
          <button>Add to Cart</button>
        </div>`
      ).join('');
    }
    else{
      cards.innerHTML=`no bag`
    }
    }
    catch(error){
          document.querySelector('.cards').innerHTML = "Error loading bag";
    }
}
  const slides = document.querySelectorAll('.slider .slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
  }

  showSlide(currentSlide);

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 3000);
})
