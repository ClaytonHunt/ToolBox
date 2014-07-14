/* global desc, task, require, jake, fail */

require('./build_modules/lintBuild.js');
require('./build_modules/lintApplication.js');
require('./build_modules/buildLogging.js');

(function(task, desc){ 
    'use strict';

    task('default', [
        'Build Started Log',
        'lint build',
        'lint application',
        'test client',
        'Build Finished Log']);

    desc("Start Karma");
    task("karma", function () {
        shell("START node node_modules/karma/bin/karma start");
    });


    desc('Test Everything');
    task('test client', [], function() {
        shell("node node_modules/karma/bin/karma run", colors.red + "CLIENT TESTS FAILED" + colors.reset, function() {
        });
    }, { async: true });

    var shell = function(command, errorMessage, callback) {
        console.log("> " + command);

        var stdout = "";
        var process = jake.createExec(command, { printStdout: true, printStderr: true });
        process.on("stdout", function(chunk) {
            stdout += chunk;
            console.log(stdout);
            stdout = "";
        });
        process.on("error", function() {
            fail(errorMessage);
        });
        process.on("cmdEnd", function() {
            console.log();
            callback(stdout);
        });
        process.run();
    };

    var colors = {
        black: '\u001b[30m',
        red: '\u001b[31m',
        green: '\u001b[32m',
        yellow: '\u001b[33m',
        blue: '\u001b[34m',
        magenta: '\u001b[35m',
        cyan: '\u001b[36m',
        white: '\u001b[37m',
        reset: '\u001b[0m'
    };
}(task, desc));
