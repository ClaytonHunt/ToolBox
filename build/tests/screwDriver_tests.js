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

            it('can publish an event', function() {
                var a = new module.ScrewDriver();
                expect(function() {
                    a.publish('test');
                }).not.toThrow();
            });

            it('can publish to subscribers', function() {
                // Arrange
                var a = new module.ScrewDriver();
                var d = new Dummy();

                a.subscribe(d);
                expect(d.counter).toBe(0);

                // Act
                a.publish('test');

                // Asset
                expect(d.counter).toBe(1);
            });
        });
    });

    var Dummy = function () {
        var self = this;

        self.counter = 0;

        self.event = {
            test: function () {
                self.counter++;
            }
        };
    };

}(ToolBox));