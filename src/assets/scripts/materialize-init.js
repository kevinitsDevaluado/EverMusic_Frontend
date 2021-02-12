
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge:'left',
        inDuration: 1000,
    });
    instances.open();
});


function initSlider(){
    var elems = document.querySelectorAll('.slider');
    var instance = M.Slider.init(elems, {});
}

function initSliderImagen(){
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
}

function initSelect(){
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
}


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {});
  });