//replace with your user:
const GITHUB_URL = "https://api.github.com/users/danimili";

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");
    // update the profileImage and profileName with the information retrieved.

    profileImage.src = data.avatar_url;
    profileName.src = data.name;
  });