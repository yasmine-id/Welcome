
// JavaScript pour utiliser Typed.js
var typed = new Typed(".auto-type", {
    strings: ["President of PROMA Industry", "We are honored to welcome you today.", "Welcome to Proma Industrie !"],
    typeSpeed: 150,
    backSpeed: 150,
    onStringTyped: function (arrayPos, self) {
        if (arrayPos === self.strings.length - 1) {
            // Si la dernière chaîne est tapée, redémarrez l'animation après un délai
            setTimeout(function () {
                self.reset();
            }, 1000); // Ajustez le délai au besoin
        }
    }
});
 // JavaScript pour utiliser Typed.js
 var typed = new Typed(".auto", {
    strings: [" Welcome  <u style=\"color: #0ef\">Mr Nicola Giorgio Pino.</u>"],
    typeSpeed: 150,
    backSpeed: 150,
});
