let usersTable = document.getElementById("users-table");

$(document).ready(function() {
  console.log("ACTIONS USERS");
  $.get("http://localhost:3000/users", data => {
    console.log(data);
    data.forEach(u => {
      usersTable.innerHTML += `
          <tr>
            <td>${u.name.replace(/ñ/g, "nn")}</td>
            <td>${u.lastname.replace(/ñ/g, "nn")}</td>
            <td>${u.email}</td>
          </tr>
        `;
    });
  });
});
