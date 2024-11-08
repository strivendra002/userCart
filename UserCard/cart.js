function displayCart() {
    const container = document.getElementById("cartContainer");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    container.innerHTML = "";
    cart.forEach(user => {
      const card = document.createElement("div");
      card.className = "user-card";
      card.innerHTML = `
        <h2>${user.name}</h2>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
      `;
      container.appendChild(card);
    });
  }
  
  document.addEventListener("DOMContentLoaded", displayCart);
  