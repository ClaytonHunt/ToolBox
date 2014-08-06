var ToolBox = (function () {
    'use strict';

    return function () {
        return this;
    };
}());

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

(function(module) {
    if (typeof String.prototype.supplant !== "function") {
        String.prototype.supplant = function(o) {
            return this.replace(/{([^{}]*)}/g,
                function(a, b) {
                    var r = o[b];
                    return typeof r === 'string' ? r : a;
                });
        };
    }

    // Example:
    var template = '<table border"{border}">' +
        '<tr><th>Last</th><td>{last}</td></tr>' +
        '<tr><th>First</th><td>{first}</td></tr>' +
        '</table>';

    var data = {
        first: "Carl",
        last: "Hollywood",
        border: 2
    };

    var body = document.getElementsByTagName('body');
    var mydiv = document.createElement('div');
    mydiv.innerHTML = template.supplant(data);
    body.appendChild(mydiv);
}(ToolBox));