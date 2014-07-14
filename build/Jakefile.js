/* global task, require */

require('./build_modules/lintBuild.js');
require('./build_modules/lintApplication.js');
require('./build_modules/buildLogging.js');

(function(task){ 
    'use strict';

    task('default', [
        'Build Started Log',
        'lint build',
        'lint application',
        'Build Finished Log']);
}(task));
