
function showMessageB(message) {
  //alert(message);
 
  $('#staticBackdrop').modal({
    show: true
  });
  
}

function showMessage(message) {
  //alert(message);
  document.querySelector("#messageText").innerHTML = message;
  let elem = document.querySelector('#messageModal');
  let instance = M.Modal.init(elem, {});
  instance.open();
}

function showRemoveConfirmationWindow(message) {
  //alert(message);
  let elem = document.querySelector('#removeConfirmationModal');
  let instance = M.Modal.init(elem, {});
  instance.open();
}



function closeAllModal() {
  let elem = document.querySelectorAll('.modal');
  let instances = M.Modal.init(elem, {});
  instances.close();
}

//alert('Hi');