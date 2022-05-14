// Example starter JavaScript for disabling form submissions if there are invalid fields
$(document).ready(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })

    $(document).ready(function() {
      $('#logo').on('click', function() {
        $("#central").load('../home.html');
        return false;
    });
      $('#div-btn0').on('click', function() {
        $('.navbar-nav li').removeClass('active');
        $("#central").load('../home.html');
        return false;
    }); 
  
      $('#div-btn1').on('click', function() {
          $('.navbar-nav li').removeClass('active');
          $("#central").load('../tienda.html');
          return false;
      });
  
      $('#div-btn2').on('click', function() {
          $('.navbar-nav li').removeClass('active');
          $("#central").load('../nosotros.html');
          return false;
      });
  
      $('#div-btn3').on('click', function() {
          $('.navbar-nav li').removeClass('active');
          $("#central").load('../contacto.html');
          return false;
      });
  
      $('#div-btn4').on('click', function() {
          $('.navbar-nav li').removeClass('active');
          $("#central").load('../donaciones.html');
          return false; 
      });

      //seccion para imagenes en carrusel, redireccionamiento sin cargar pagina 
      $('#fotoTienda').on('click', function() {
        $("#central").load('../tienda.html');
        return false;
    });

    $('#fotoNosotros').on('click', function() {
        $("#central").load('../nosotros.html');
        return false;
    });

    $('#fotoContacto').on('click', function() {
        $("#central").load('../contacto.html');
        return false;
    });

    $('#fotoDona').on('click', function() {
        $("#central").load('../donaciones.html');
        return false;
      });
    });
});