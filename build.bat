@ECHO OFF
cd build
cls
node node_modules\jake\bin\cli.js %*
cd ..
@ECHO ON
