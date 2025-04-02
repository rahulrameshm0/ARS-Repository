function sendMail(){
    const parms = {
         name: document.querySelector("#name").value,
         email: document.querySelector("#email").value,
         subject: document.querySelector("#subject").value,
         message: document.querySelector("#message").value,
    };
 
    emailjs.send("service_h7euwpw", "template_2j9zv5a", parms)
}