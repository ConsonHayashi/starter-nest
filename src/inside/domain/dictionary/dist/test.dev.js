"use strict";

discribe("baseController", function () {
  it('should be cast', function () {
    var api = 'http://localhost:80';
    fetch(api, {
      method: "Get"
    }).then(function (res) {
      return res.text;
    }).then(function () {
      return console.log(res);
    });
  });
});