fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((response) => response.json())
  .then((json) => displayUser(json));

function displayUser(users) {
  const userNames = users.map((user) => user.username);
  const ul = document.getElementById("users-container");
  for (let i = 0; i < userNames.length; i++) {
    const user = userNames[i];
    const li = document.createElement("li");
    li.innerText = user;
    ul.appendChild(li);
  }
}
