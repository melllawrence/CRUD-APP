const localStorageKey = "users_list_4";

let users = JSON.parse(localStorage.getItem(localStorageKey)) || [];

console.log(users);

function addUser() {
  const name = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  if (name == "") {
    alert("Username boş olamaz :/");
  } else if (email == "") {
    alert("E-Posta Adresi boş olamaz :/");
  } else {
    const mevcutUser = users.find((user) => user.email === email);
    if (mevcutUser) {
      mevcutUser.name = name;
    } else {
      users.push({ name, email });
    }

    localStorage.setItem(localStorageKey, JSON.stringify(users));
  }

  console.log(localStorage.getItem(localStorageKey));
}

function displayUsers() {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
          Kullanıcı Adı : ${user.name} 
          </br>
          E-Posta Adresi : ${user.email}
          </br>
          <button onclick="editUser('${user.email}')">Düzenle</button>
          <button onclick="deleteUser('${user.email}')">Sil</button>
          </br>
          </br>
          
          <div>------------------------------</div>
      `;
    userList.appendChild(listItem);
  });
}

displayUsers();

function editUser(email) {
  const userToEdit = users.find((user) => user.email === email);

  if (userToEdit) {
    document.getElementById("username").value = userToEdit.name;
    document.getElementById("email").value = userToEdit.email;
  }
}

function deleteUser(email) {
  users = users.filter((user) => user.email !== email);
  localStorage.setItem(localStorageKey, JSON.stringify(users));
  displayUsers();
}

function temizle() {
  localStorage.clear();
}

