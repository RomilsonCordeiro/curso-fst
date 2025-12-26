document.querySelector("#checkbox").addEventListener("click", function () {
  let inputPassword = document.querySelector("#inputSenha");

  if (inputPassword.type === "password") {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }
});
