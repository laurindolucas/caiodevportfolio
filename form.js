// Inicializa EmailJS com sua Public Key
emailjs.init("o4aP_GKwosXjPlQ4q");

// Captura o envio do formulário
document.getElementById("meuForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_zgkv3sn", "template_p5f7qmj", this)
    .then(() => {
      alert(" Mensagem enviada com sucesso!");
      this.reset();
    })
    .catch((err) => {
      console.error(" Fehler:", err);
      alert("Falha ao enviar mensagem, tente novamente!");
    });
});