(function (module) {
    'use strict';

    var screwdriver = null, subscribers = [];

    module.ScrewDriver = function () {
        screwdriver = screwdriver || this;
        return screwdriver;
    };

    module.ScrewDriver.prototype.subscribe = function (subscriber) {
        subscribers.push(subscriber);
    };

    module.ScrewDriver.prototype.publish = function (event) {
        for(var i = 0; i < subscribers.length; i++)
            if(subscribers[i].event && subscribers[i].event[event])
                subscribers[i].event[event]();
    };
}(ToolBox));