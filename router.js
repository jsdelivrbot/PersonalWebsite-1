module.exports = function(app) {
  //Routes go here
  app.get('/resume/sample1', (req, res) => {
    res.sendfile('public/html/sample1.html');
  });
  app.get('/resume/weather-demo', (req, res) => {
    res.sendfile('public/html/weather-forecast.html');
  });
  app.get('/resume/landing-page', (req, res) => {
    res.sendfile('public/html/landing-page.html');
  });

  app.use((req, res) => {
    res.sendfile('public/index.html');
  });
}
