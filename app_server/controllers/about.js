/* get 'about' page */

module.exports.aboutInfo = function(req, res) {
  res.render('index', {title: 'About'});
};
