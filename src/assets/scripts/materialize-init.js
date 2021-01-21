
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge:'left',
        inDuration: 1000,
    });
    instances.open();
  });

function initSelect(){
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
}