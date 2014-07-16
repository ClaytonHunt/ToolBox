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
            it('has a subscribe function', function () {
                var a = new module.ScrewDriver();
                expect(a.subscribe).toBeDefined();
            });

            it('can subscribe', function () {
                var a = new module.ScrewDriver();
                a.subscribe(new Dummy());
            });
        });

        describe('Publishing an event', function() {
            it('has a publish function', function () {
                var a = new module.ScrewDriver();
                expect(a.publish).toBeDefined();
            });
        });
    });

    var Dummy = function () {
        this.counter = 0;

        this.increment = function () {
            this.counter++;
        };

        this.event = {
            test: this.increment
        };
    };

}(ToolBox));