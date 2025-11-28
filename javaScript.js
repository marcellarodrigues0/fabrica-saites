function validaForm(){
      const email=document.getElementById('email');
      let emailText = email.value.trim();
      let valido = false

      if(emailText.includes('@')){
        console.log("Achei @!")
        valido = true;
      } else{
        valido = false
      }
      let partesEmail = emailText.split("@");
      if(partesEmail[0].length >=7 && partesEmail[0].length <=127){
        console.log("O tamanho está entre 7 e 127");
        valido = true;
      } else{
        valido = false;
      }

      const nome = document.getElementById("nome");
      let nomeText = nome.value.trim();
      if (nome.length>= 3 ){
        console.log("Nome atende ao tamanho mínimo")
        valido = true;
      } else{
        valido = false
      }
      const textArea= document.getElementById("mensagem");
      let textTexto = textArea.value.trim();
      if (textTexto !== ""){
       // console.log("Texto não pode ser vazio!")
        valido = true;
      } else {
        valido = false
      }
      if()
     
      if (valido){
      alert("Recebemos sua mensagem, em breve metraremos em contato.")
      }
      else{
        alert("Temos um erro no formulário, corrija para deguir!")
      }
    }
    document.addEventListener("submit", function(e){
      e.preventDefault();
      validaForm();

    })