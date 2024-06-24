
const img = document.querySelectorAll('.section-figure');
const overlay = document.querySelector(".overlay");
const scrollers = document.querySelectorAll(".scroller")

const dropdown = document.querySelector('.dropdown');

const template = document.querySelector('.template');
const container = document.querySelector(".container");



const accordionContent = document.querySelectorAll('.accordion-content')

function getValue() {
  console.log(dropdown.value);
  console.log(dropdown.options[dropdown.selectedIndex].text);
}


const showPreview =(item) =>{
  item.classList.add("preview-img")
  overlay.classList.remove("hidden")
}

const closePreview =() =>{
  img.forEach((item)=>item.classList.remove("preview-img"))
  overlay.classList.add("hidden")
}

img.forEach((item)=>{
  item.addEventListener("click", ()=> showPreview(item))
})

overlay.addEventListener("click", closePreview)

// carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        992:{
            items:5
        }
    }
})

// infinity scrolling

function addAnimation() {

  scrollers.forEach(scroller=>{
    scroller.setAttribute("data-animated", true)

    const scrollerInner = scroller.querySelector(".scroller_inner");

    const scrollerContent = Array.from(scrollerInner.children);

  scrollerContent.forEach(item => {
  const duplicatedItem = item.cloneNode(true)
  duplicatedItem.setAttribute("data-hidden", true)

  scrollerInner.appendChild(duplicatedItem)
})
  })
  
}

addAnimation()


// accordion 

accordionContent.forEach((item, index)=>{
  let header = item.querySelector('.accordion-header');
  let description = item.querySelector('.accordion-description')
  let icon = item.querySelector('i')

  header.addEventListener("click",()=>{
    accordionContent.forEach((otherItem)=>{
      if (otherItem !== item) {
        otherItem.classList.remove('open')
        otherItem.querySelector('.accordion-description').style.height = '0px';
        otherItem.querySelector('i').classList.remove('fa-arrow-up')
      }
    })
     item.classList.toggle("open")
     icon.classList.toggle('fa-arrow-up')
     if (item.classList.contains("open")) {
      description.style.height= `${description.scrollHeight}px`
     } else {
      description.style.height= `0px`
     }
  })

})

// template

const clone = template.content.cloneNode(true)

const title = clone.querySelector('h2');

title.textContent= "Newededw title"

const description = clone.querySelector('p')

description.textContent = 'New Description'

container.appendChild(clone)