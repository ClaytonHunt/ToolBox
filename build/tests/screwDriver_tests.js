/* global describe, beforeEach, it, expect, ToolBox */

(function (module) {
    'use strict';

    describe('ScrewDriver', function () {

        describe('In General', function () {
            it('Exists', function () {
                expect(module.ScrewDriver).toBeDefined();
            });

            it('Is a Singleton', function () {
                var a = new module.ScrewDriver();
                var b = new module.ScrewDriver();

                expect(a).toBe(b);
            });
        });

        describe('Subscribing to an event', function () {
            module.ScrewDriver.prototype.getSubscribers = function () {
                return 0;
            };

            it('has a subscribe function', function () {
                var a = new module.ScrewDriver();

                expect(a.subscribe).toBeDefined();
            });
        });
    });

}(ToolBox));