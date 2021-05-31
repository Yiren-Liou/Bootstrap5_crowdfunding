let sponsorBtn = document.getElementById('sponsorBtn');
let subNav = document.getElementById('subNav');

init();
window.addEventListener("scroll",function(e){
  triggerSponsorBtn();
  triggerSubNav();
});


function init(){
  let tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  let forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated')
      }, false)
    });
}

function triggerSponsorBtn(){
  if(window.pageYOffset > 400 && window.pageYOffset < 1800){
    sponsorBtn.classList.remove('d-none');
  }else{
    sponsorBtn.classList.add('d-none');
  }
}

function triggerSubNav(){
  if(window.pageYOffset > 1900){
    subNav.classList.remove('position-sticky','top-0','zIndexTop');
  }else{
    subNav.classList.add('position-sticky','top-0','zIndexTop');
  }
}
