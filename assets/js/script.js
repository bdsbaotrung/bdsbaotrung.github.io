// Slick slide filtering
// $('.filtering').slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000
// });

var filtered = false;

$('.js-filter').on('click', function () {
  if (filtered === false) {
      $('.filtering').slick('slickFilter', ':even');
      $(this).text('Unfilter Slides');
      filtered = true;
  } else {
      $('.filtering').slick('slickUnfilter');
      $(this).text('Filter Slides');
      filtered = false;
  }
});

//  Selection Tỉnh Thành Việt Nam


var provinces = [
    "An Giang",
    "Bà Rịa - Vũng Tàu",
    "Bắc Giang",
    // Các tỉnh thành khác
    "Vĩnh Long",
    "Yên Bái"
];

function populateProvinceList() {
    var select = document.getElementById("provinceList");

    provinces.forEach(function (province) {
        var option = document.createElement("option");
        option.text = province;
        select.appendChild(option);
    });
}

function search() {
    var input = document.getElementById("searchInput").value;
    var select = document.getElementById("provinceList");
    var options = select.getElementsByTagName("option");

    for (var i = 0; i < options.length; i++) {
        var option = options[i];
        if (option.text.toLowerCase().indexOf(input.toLowerCase()) > -1) {
            option.style.display = "";
        } else {
            option.style.display = "none";
        }
    }
}

//
//Slide show project-location

// var DA_img = ['./assets/img/BDS/anh-2-3-2.jpg','./assets/img/BDS/2.jpg','./assets/img/BDS/3.jpg']

// function next(){
//   index++;
//   if(index==DA_img.length) index = 0;
//   document.getElementById('project-location-img-left').src = DA_img[index];
// }

// setInterval("next()", 5000)

function toggleMenu() {
  var navMobile = document.getElementById("nav-mobile");
  navMobile.classList.toggle("active");
}

//Slick slider syncing img (chi-tiet.html)

// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
//   });
//   $('.slider-nav').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: false,
//     centerMode: false,
//     focusOnSelect: true
//   });


//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         infinite: false,
//         dots: false
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         infinite: false
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         infinite: false
//       }
//     }
//   ]

//slider dự án
$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  adaptiveHeight: false,
  autoplay: true,
  autoplaySpeed: 3000
});


// modal

const byBuybtns = document.querySelectorAll('.js-place-bt')
        const modal = document.querySelector('.modal')
        const modalc = document.querySelector('.modal-close-all')
        const modalc2 = document.querySelector('.modal-close-all2')
        const modalClose = document.querySelector('.js-modal-close')
        const modalcontainer = document.querySelector('.js-modal-container')

        function showBuyTicket(){
            modal.classList.add('open')
        }

        function closeBuyTicket(){
            modal.classList.remove('open')
        }

        for ( const byBuybtn of byBuybtns){
            byBuybtn.addEventListener('click', showBuyTicket)
        }
        
        modalClose.addEventListener('click', closeBuyTicket)

        modal.addEventListener('click', closeBuyTicket)

        modalc.addEventListener('click', closeBuyTicket)
        modalc2.addEventListener('click', closeBuyTicket)


        modalcontainer.addEventListener('click', function(){
            event.stopPropagation()
        })


        const byBuybtnssup = document.querySelectorAll('.js-place-bt-sign-up')
        const modalsup = document.querySelector('.modal-sign-up')
        const modalsupc = document.querySelector('.modal-sign-up-close')
        const modalClosesup = document.querySelector('.js-modal-close-sign-up')
        const modalcontainersup = document.querySelector('.js-modal-container-sign-up')

        function showBuyTicketsup(){
            modalsup.classList.add('open')
        }

        function closeBuyTicketsup(){
            modalsup.classList.remove('open')
        }

        for ( const byBuybtn of byBuybtnssup){
            byBuybtn.addEventListener('click', showBuyTicketsup)
        }
        
        modalClosesup.addEventListener('click', closeBuyTicketsup)

        modalsup.addEventListener('click', closeBuyTicketsup)

        modalsupc.addEventListener('click', closeBuyTicketsup)

        modalcontainersup.addEventListener('click', function(){
            event.stopPropagation()
        })

        const byBuybtnsfgot = document.querySelectorAll('.js-place-bt-f-got')
        const modalfgot = document.querySelector('.modal-f-got')
        const modalfgotc = document.querySelector('.modal-f-got-close')
        const modalClosefgot = document.querySelector('.js-modal-close-f-got')
        const modalcontainerfgot = document.querySelector('.js-modal-container-f-got')

        function showBuyTicketfgot(){
            modalfgot.classList.add('open')
        }

        function closeBuyTicketfgot(){
            modalfgot.classList.remove('open')
        }

        for ( const byBuybtn of byBuybtnsfgot){
            byBuybtn.addEventListener('click', showBuyTicketfgot)
        }
        
        modalClosefgot.addEventListener('click', closeBuyTicketfgot)

        modalfgot.addEventListener('click', closeBuyTicketfgot)

        modalfgotc.addEventListener('click', closeBuyTicketfgot)

        modalcontainerfgot.addEventListener('click', function(){
            event.stopPropagation()
        })