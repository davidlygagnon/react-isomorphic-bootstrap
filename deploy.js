// Since postinstall will also run when you run npm install
// locally we make sure it only runs in production
if (process.env.NODE_ENV === 'production') {

  // We basically just create a child process that will run
  // the production bundle command
  var child_process = require('child_process');
  child_process.exec("./node_modules/.bin/webpack -p --config webpack.config.js", function (error, stdout, stderr) {
    console.log('RAN deploy.jsstdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}
