(function (window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;

    function RemoteDataStore(url) {
        if (!url) {
            throw new Error('No remote URL supplied.');
        }
        this.serverUrl = url;
    }

    RemoteDataStore.prototype.add = function (key, val) {
        $.post(this.serverUrl, val, function (serverResponse) {
            console.log(serverResponse);
        });
    };

    RemoteDataStore.prototype.getAll = function () {
        $.get(this.serverUrl, function (serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };

    RemoteDataStore.prototype.get = function (key, cb) {
        $.get(this.serverUrl + '/' + key, function (serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };

    RemoteDataStore.prototype.remove = function (key) {
        $.ajax(this.serverUrl + '/' + key, {
            type: 'DELETE'
        });
    };

    var firebaseConfig = {
        apiKey: "AIzaSyDZ-K9TuOtct6in2CBG0WdhjVcSuUdIc0U",
        authDomain: "coffee-run-f9ae4.firebaseapp.com",
        databaseURL: "https://coffee-run-f9ae4.firebaseio.com",
        projectId: "coffee-run-f9ae4",
        storageBucket: "coffee-run-f9ae4.appspot.com",
        messagingSenderId: "831111311806",
        appId: "1:831111311806:web:dc639897a3bd250feb89ef",
        measurementId: "project-831111311806",
      };

      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);