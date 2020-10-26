
const srY = ScrollReveal({
   origin:'top',
   distance:'100px',
   duration:3000,
   reset:true
   });
   
   srY.reveal('.img-about',{delay:500});
   srY.reveal('form',{delay:200});
   srY.reveal('.tile',{delay:200});
  


 const srX =  ScrollReveal({
       origin:'left',
       distance:'100px',
       duration:3000,
       reset:true
       })

   srX.reveal('.section-title',{});
   srX.reveal('.img-fluid',{delay:200});
   srX.reveal('.skill',{delay:200});
   srX.reveal('p',{delay:100});


   window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    //var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.classList.add('success');
      status.innerHTML = "Thanks! Email has been sent successfully";
      
    }

    function error() {
      status.classList.add('error');
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
