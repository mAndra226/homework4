(function (window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;

    function CheckList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$element = $(selector);

        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    CheckList.prototype.addClickHandler = function (fn) {
        this.$element.on('click', 'input', function (event) {
            var email = event.target.value;
            this.removeRow(email);
            fn(email);
        }.bind(this));
    };

    CheckList.prototype.addRow = function (order) {
        //Remove any existing rows that match the email address
        this.removeRow(order.emailAddress);

        //create a new instance of a row, using the coffee order info
        var rowElement = new Row(order);

        //add the new row instance's $element property to the checklist
        this.$element.append(rowElement.$element);
    };

    CheckList.prototype.removeRow = function (email) {
        this.$element
            .find('[value="' + email + '"]')
            .closest('[data-coffee-order="checkbox"]')
            .remove();
    };

    function Row(order) { //coffee order
        //constructor
        var $div = $('<div></div>', {
            'data-coffee-order': 'checkbox',
            'class': 'checkbox'
        });

        var $label = $('<label></label>');

        var $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: order.emailAddress
        });

        var description = order.size + ' ';

        if (order.flavor) {
            description += order.flavor + ' ';
        }

        description += order.coffee + ', ';
        description += ' (' + order.emailAddress + ')';
        description += ' [' + order.strength + 'x]';

        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
    }

    App.CheckList = CheckList;
    window.App = App;
})(window);