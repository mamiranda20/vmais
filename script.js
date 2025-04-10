function Enviar(){
    var user = document.frm_login.input_user.value; //"document." é o que "pega" a informação do site
    var pass = document.frm_login.input_password.value;
if((user=="fatec" || user=="fatec@maua") && pass=="123a") {
      alert("Conta logada com sucesso!");
      window.location="https://www.uol.com.br";
      document.frm_login.input_user.value="";
      document.frm_login.input_password.value="";
    }
else{
      alert("Conta inválida!");
      document.frm_login.input_user.value="";
      document.frm_login.input_password.value="";       document.frm_login.input_user.focus();
}
}