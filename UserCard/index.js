let users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

function displayUserCards() {
  const container = document.getElementById("userCard");
  container.innerHTML = "";
  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `<h2>${user.name}</h2>
    <p> Username:${user.username}</p>
    <p>
    Email:${user.email}
    </p>
<button onclick="addToCart(${user.id})">Add to Cart</button>
 <button onclick="deleteUser(${user.id})">Delete</button>
    `;
    container.appendChild(card);
  });
}
function addToCart(userId) {
  const user = users.find((u) => u.id === userId);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(user);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${user.name} added to cart!`);
}
function deleteUser(userId) {
  users = users.filter((u) => u.id !== userId);
  displayUserCards();
}
document.addEventListener("DOMContentLoaded", displayUserCards);