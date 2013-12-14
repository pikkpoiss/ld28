var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/_spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

console.log(tests);

require.config({
  baseUrl: '/base/src/main/js',
  paths: {
    jquery:  '../../../bower_components/jquery/jquery',
    es5shim: '../../../bower_components/es5-shim/es5-shim',
    es5sham: '../../../bower_components/es5-shim/es5-sham',
    flight:  '../../../bower_components/flight'
  },
  deps: tests,
  callback: window.__karma__.start
});

