/*global jake, task, require */

(function (jake, task, require) {
    'use strict';

    task("lint build", [], function() {
        var lint = require('../lint/lint_runner.js');
        var files = getBuildFileList();
        lint.validateFileList(files.toArray(), getBuildOptions(), {});
    });

    function getBuildFileList() {
        var files = new jake.FileList();
        files.include('**/*.js');
        files.exclude('node_modules');
        return files;
    }

    function getBuildOptions() {
        return {
            node: true,
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
