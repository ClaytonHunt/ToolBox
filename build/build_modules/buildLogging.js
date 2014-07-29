/*global task*/

(function (task) {
    'use strict';

    task("Build Started Log", function () {
        console.log("Build Started");
        console.log("==============");
        console.log("");
    });

    task("Build Finished Log", function () {
        console.log("");
        console.log("Build Finished");
        console.log("==============");
    });
}(task));
