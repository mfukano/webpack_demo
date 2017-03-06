var concatNames = require('./concatNames.js');
var fetchUserGithubKeys = require('./fetchUsersGithubKeys.js');
require('./app.scss');

function renderApp (target) {
  var fullName = concatNames('Sean', 'Miller');
  var key = fetchUserGithubKeys('seanders');

  target.innerHTML =
    '<h1 class="green underline">'+fullName+'</h1>' +
    '<h2>'+key+'</h2>';
}

document.addEventListener('DOMContentLoaded', function() {
  renderApp(document.querySelector('#target'));
});
