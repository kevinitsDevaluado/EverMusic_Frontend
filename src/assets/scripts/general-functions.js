function showMessage(message) {
  //alert(message);
  document.querySelector("#messageText").innerHTML = message;
  let elem = document.querySelector('#messageModal');
  let instance = M.Modal.init(elem, {});
  instance.open();
  
}
//alert("Que onda malditos");

function showRemoveConfirmationWindows(message) {
  //alert(message);
  
  let elem = document.querySelector('#RemoveConfirmationModal');
  let instance = M.Modal.init(elem, {});
  instance.open();
  
}
function showMessageB(message) {
  //alert(message);
 
  $('#staticBackdrop').modal({
    show: true
  });
  
}

function closeModal() {
  let elem = document.querySelectorAll('.modal');
  let instance = M.Modal.init(elem, {});
  instance.close();
  
}