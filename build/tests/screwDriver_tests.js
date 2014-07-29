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
            var sd;

            beforeEach(function() {
                sd = new module.ScrewDriver();
            });

            it('has a subscribe function', function () {
                expect(sd.subscribe).toBeDefined();
            });

            it('can subscribe', function () {
                sd.subscribe(new Dummy());
            });
        });

        describe('Publishing an event', function() {
            var sd;

            beforeEach(function() {
                sd = new module.ScrewDriver();
            });

            it('has a publish function', function () {
                expect(sd.publish).toBeDefined();
            });

            it('can publish an event', function() {
                expect(function() {
                    sd.publish('test');
                }).not.toThrow();
            });

            it('can publish to subscribers', function() {
                // Arrange
                var d = new Dummy();
                sd.subscribe(d);

                // Act
                sd.publish('test');

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