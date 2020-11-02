//1. Any string sent to an email (i@sameer.me)

//link button to email through javascript
let el = document.getElementById("database-linker");
if (el.addEventListener)
{
  el.addEventListener("click", function () {
    console.log("f");
      Email.send({
          Host : "smtp.hostinger.com",
          Username : "smec@thefirstprototype.com",
          Password : "zaq12wsx",
          To : 'smec@thefirstprototype.com',
          From : "smec@thefirstprototype.com",
          Subject : "This is the subject",
          Body : "And this is the body"
      }).then(
  message => alert(message)
    }
)
else if (el.attachEvent) {
    el.attachEvent('onclick', doFunction);
}};







//2. Store info on google sheet automatically
//3. Find out how to parse it (right format to send the information through) 

/*
Security (SMTP credentials security):
Email.send({
    SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

Sending the email:
Email.send({
    Host : "smtp.yourisp.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
*/
