/* global describe, beforeEach, it, expect, ToolBox */

(function(module) {
    'use strict';

    describe('ToolBox', function() {
        describe('In General', function() {
            it('exists', function() {
                expect(module).toBeDefined();
                expect(module).not.toBeNull();
            });
        });
    });

}(ToolBox));