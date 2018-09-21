window.onload = function () {

  var check = document.querySelector("#checkP");

  check.addEventListener('click', function (event) {
    event.preventDefault();
    var user = document.querySelector("#user").value;
    var password = document.querySelector("#password").value.length;

    if (user === null || user == '') {
      alert("Favor inserir usuário");

    };
    if (password < 6) {
      alert("Favor inserir uma senha com mais de 6 caracteres");

    }else (password > 6) {
      alert("Favor inserir uma senha menor");
    };
    
  });
}

