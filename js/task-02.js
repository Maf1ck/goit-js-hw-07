const images = [
      {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
      },
      {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
      },
      {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
      },
      {
        url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
        alt: "Alpine Spring Meadows",
      },
      {
        url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
        alt: "Nature Landscape",
      },
      {
        url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
        alt: "Lighthouse Coast Sea",
      },
    ];

const ulImage=document.querySelector(".gallery");


const contentGallery = `<li>
            <img class="img" src="${images[0].url}" alt="${images[0].alt}">
            <img  class="img" src="${images[1].url}" alt="${images[1].alt}">
            <img class="img" src="${images[2].url}" alt="${images[2].alt}">
            <img  class="img" src="${images[3].url}" alt="${images[3].alt}">
            <img class="img" src="${images[4].url}" alt="${images[4].alt}">
            <img class="img" src="${images[5].url}" alt="${images[5].alt}">
            
        </li>`
ulImage.innerHTML+=contentGallery;
const container = document.querySelector("li");
const newImg = document.querySelectorAll("img");
container.style.display="flex";
container.style.flexDirection="row";
container.style.flexWrap="wrap";
newImg.forEach(img =>{
    img.style.width="1280px";
    img.style.height="720px";

})


