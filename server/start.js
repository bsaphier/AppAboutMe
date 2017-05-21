const app = require('./app');

/**
*
* In production build, the images, etc. are assuming the site is
* hosted on github pages. So this server is only for dev purposes.
*
*/
app.listen(app.get('port'), () => {
  console.log(`server listening on port ${app.get('port')}`);
});
