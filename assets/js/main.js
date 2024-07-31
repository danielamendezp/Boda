
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    
})(jQuery);

export default {
    data() {
      return {
        value: null, // Variable para almacenar la fecha seleccionada
        state: 'disabled' // Estado inicial del componente (disabled o readonly)
      }
    },
    computed: {
      // Función para determinar si el calendario está deshabilitado
      isDisabled() {
        return this.state === 'disabled';
      },
      // Función para determinar si el calendario está en modo de solo lectura
      isReadonly() {
        return this.state === 'readonly';
      }
    },
    methods: {
      // Función para deshabilitar fechas según el estado actual
      dateDisabled(date) {
        if (this.isDisabled) {
          // Si el estado es "disabled", todas las fechas estarán deshabilitadas
          return true;
        } else if (this.isReadonly) {
          // Si el estado es "readonly", solo se deshabilitan las fechas futuras
          const currentDate = new Date();
          return date > currentDate;
        } else {
          return false; // Por defecto, ninguna fecha está deshabilitada
        }
      }
    }
  }





  