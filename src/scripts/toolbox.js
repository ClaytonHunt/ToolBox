var ToolBox = (function () {
    'use strict';

    return function () {
        return this;
    };
}());

(function (module) {
    'use strict';

    var screwdriver = null;
    var subscribers = [];

    module.ScrewDriver = function () {
        screwdriver = screwdriver || this;
        return screwdriver;
    };    

    module.ScrewDriver.prototype.subscribe = function (subscriber) {
        subscribers.push(subscriber);
    };

    module.ScrewDriver.prototype.publish = function (event) {

    };
}(ToolBox));