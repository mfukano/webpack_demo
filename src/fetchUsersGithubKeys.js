module.exports = function fetchUsersGithubKeys(username) {
  return fetch('https://api.github.com/api/v1/users/' + username +'.keys').
    then(function(response) {
      if(response.ok) {
        return response.blob();
      }
      throw new Error('Network response was not ok.');
    });
};
