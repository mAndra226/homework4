/*(function (window) {
    'use strict';

    var FORM_SELECTOR = '[data-coffee-order="form"]';
    //var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var App = window.App;
    var DataStore = App.DataStore;
    var PayHandler = App.FormHandler;
    var pay = App.Truck;
    var payment = new pay('ncc-1701', new DataStore());
    //var CheckList = App.CheckList;
    //var checkList = new CheckList(CHECKLIST_SELECTOR);
    var payHandler = new PayHandler(FORM_SELECTOR);

    payHandler.addSubmitHandler(function (data) {
        payment.createOrder.call(payment, data);
    });

    //formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(payHandler);
})(window);
*/