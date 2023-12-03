
//*************//
  // Native JS
//*************//



// var filter =document.querySelector('.filter')
// var filterButton = filter.querySelectorAll('.filter-btn')
// var conferences = document.querySelectorAll('.conference')

// filterButton.forEach((button) => {
//   button.addEventListener('click', (e)=>{
//     updateButton(e.target)
//     updateConf(e.target.getAttribute('data-filter'))
//   })
// })

// function updateButton(Button){
//   filter.querySelector('.active').classList.remove('active')
//   Button.classList.add('active')  
// }

// function updateConf(filterConf){
//   conferences.forEach((conf) =>{
//     currentConf = conf.getAttribute('data-category')

//     if(filterConf === '*' ||currentConf === filterConf){
//       conf.removeAttribute('hidden')
//     }else{
//       conf.setAttribute('hidden','')
//     }
//   })
// }


//***********//
//  Isotope
//***********//

jQuery(document).ready(function($){
  var $grid = $('.grid').isotope({
    layoutMode: 'vertical' 
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  
  // active class
  $('.filter-button-group').on( 'click', 'button', function() {
    
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
  });
});

