/*global jake, task, require */

(function (jake, task, require) {
    'use strict';

    task("lint application", [], function () {
        var lint = require('../lint/lint_runner.js');
        var files = getApplicationFileList();
        lint.validateFileList(files.toArray(), getApplicationOptions(), {});
    });

    function getApplicationFileList() {
        var files = new jake.FileList();
        files.include('../src/**/*.js');
        files.exclude('build');
        files.exclude('packages');
        files.exclude('../src/**/thirdParty/*.js');
        return files;
    }

    function getApplicationOptions() {
        return {
            bitwise: true,
            curly: false,
            eqeqeq: true,
            forin: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            noempty: true,
            nonew: true,
            regexp: true,
            undef: true,
            strict: true,
            trailing: true
        };
    }
}(jake, task, require));
