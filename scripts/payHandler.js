(function (window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;


    var modal = document.getElementById("myModal");
    var btn = document.getElementById("btn");
    var span = document.getElementsByClassName("close")[0];

    function FormHandler(selector) {
      if (!selector) { throw new Error('No Error Provided'); }

      this.$formElement = $(selector);

      if (this.$formElement.length === 0) {
        throw new Error('Could not find element with selector: ' + selector);
      }
    }

    FormHandler.prototype.addSubmitHandler = function (fn) {

      console.log('Setting submit handler for form');

      this.$formElement.on('submit', function (event) {
        event.preventDefault();

        var data = {};
        
        $(this).serializeArray().forEach(function (item) {
          data[item.name] = item.value;
          console.log(item.name + ' is ' + item.value);
      });

        console.log(data);

        fn(data);
        this.reset();
        this.elements[0].focus();
      });

      //when button is clicked, open modal
      btn.click(function () {
        //modal.style.display = "block";
        //$(modal).css('display', 'block');
        console.log('hello');
      });

      //when the x is closed on the modal, close the modal
      span.click(function () {
        //modal.style.display = "none";
        //$(modal).css('display', 'none');
        console.log('click');
      });

      //this will allow the user to click anywhere on the screen to close the modal
      window.click(function (event) {
        if (event.target === modal) {
          $(modal).css('display', 'none');;
        }
      });
    };

    App.FormHandler = FormHandler;
    window.App = App;
  })(window);