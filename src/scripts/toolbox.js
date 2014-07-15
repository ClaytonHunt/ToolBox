var ToolBox = (function () {
    'use strict';

    return function () {
        return this;
    };
}());


(function (module) {
    'use strict';

    var screwdriver = null;

    module.ScrewDriver = function () {
        if (screwdriver)
            return screwdriver;
        
        screwdriver = this;
        return this;
    };

    var p = module.ScrewDriver.prototype;

    p.subscribe = function () {

    };
}(ToolBox));