// === SWIPER CATEGORY ===
var swiperCategories = new Swiper(".categories_container", {
    spaceBetween: 10,
    loop :true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        350: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
  });


  // === PRODUCT TAB ===
  const tabs = document.querySelectorAll('[data-target]'),
  tabContents= document.querySelectorAll('[content]');

  tabs.forEach((tab)=>{
    tab.addEventListener("click",(e)=>{
      const target = document.querySelector(tab.dataset.target);
      console.log(target)
      tabContents.forEach((tabContents)=>{
        tabContents.classList.remove("active-tab");
      })
      target.classList.add("active-tab");
      tabs.forEach((tab)=>{
        tab.classList.remove("active-tab");
      })
      tab.classList.add("active-tab");
    })
  })


  // === NEW ARRIVALS ===
  var swiperProducts= new Swiper(".new_container", {
    spaceBetween: 10,
    loop :true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
  });
 
  // === IMAGE GALLERY === 
  function imageGalley(){
      const mainImg =document.querySelector('.details_img'),
      smallImg =document.querySelectorAll('.details_small-img');

      smallImg.forEach((img)=> {
        img.addEventListener('click',() => {
          mainImg.src = img.src
          console.log("loi",img);
        })
      })
  }
  imageGalley();
