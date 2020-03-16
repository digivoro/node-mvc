let usersTable = document.getElementById("users-table");

const newUser = () => {
  const name = $("#user-name").val();
  const lastname = $("#user-lastname").val();
  const email = $("#user-email").val();
  const password = $("#user-password").val();

  const user = {
    email,
    password,
    name,
    lastname
  };
  $.post("http://localhost:3000/users", user, (resp, status) => {
    window.location.href = "/";
  });
};

$(document).ready(function() {
  $.get("http://localhost:3000/users", data => {
    data.forEach(u => {
      usersTable.innerHTML += `
          <tr>
            <td>${u.name.replace(/ñ/g, "nn")}</td>
            <td>${u.lastname.replace(/ñ/g, "nn")}</td>
            <td>${u.email.replace(/ñ/g, "nn")}</td>
          </tr>
        `;
    });
  });
});

$("#user-form").submit(evt => {
  evt.preventDefault();
  newUser();
});
