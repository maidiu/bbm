const bearWhite = document.querySelector('.bearwhite');
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const buttons = document.querySelectorAll('button')
const aboutButton = document.getElementById('about-button')
const inquiriesButton = document.getElementById('inquiries-button')
const valuesButton = document.getElementById('values-button')
const contactButton = document.getElementById('contact-button')
const about = document.getElementById('about-section')
const inquiries = document.getElementById('inquiries-section')
const contact = document.getElementById('contact-section')
const texts = document.querySelectorAll('.texts')
const values = document.getElementById('values-section')
const igLogo = document.querySelector('.iglogo')
const submit = document.getElementById('submit')
const nameInput = document.getElementById('nameInput')
const emailInput = document.getElementById('emailInput')
const phoneInput = document.getElementById('phoneInput')
const bandNameInput = document.getElementById('bandNameInput')
const aboutInput = document.getElementById('aboutInput')
const arrangementInput = document.getElementById('arrangementInput')
const questionsInput = document.getElementById('questionsInput')
const anythingElseInput = document.getElementById('anythingElseInput')
const inquiryForm = document.getElementById('inquiry-form')


bearWhite.addEventListener('mousedown', function() {
   setTimeout(function() {
      aboutButton.classList.add('appear')}, 100)
   setTimeout(function() {
      valuesButton.classList.add('appear')}, 700)
   setTimeout(function() {
      inquiriesButton.classList.add('appear')}, 1300)
   setTimeout(function() {
      contactButton.classList.add('appear')}, 1900)
      bearWhite.style.transform = 'scale(1.04)'
})

bearWhite.addEventListener('mouseup', () => {
   bearWhite.style.transform = 'scale(1.05)';
});

document.addEventListener('DOMContentLoaded', function() {
   //setTimeout(function() {bearWhite.classList.add('appear')}, 1000);
   function flicker(opacity) {
      bearWhite.style.opacity = opacity;
    }
    for (let i = 1; i <= 13; i++) {
      const opacity = i % 2 === 0 ? 0 : i * 0.2;
      setTimeout(() => flicker(opacity), i * 100); // Toggle the class every 200ms
    }
    setTimeout(() => {
      bearWhite.style.opacity = '1';
    }, 14 * 100);
   setTimeout(function() {igLogo.classList.add('appear')}, 1800)
   setTimeout(function() {left.classList.add('appear')}, 2500);
   setTimeout(function() {right.classList.add('appear')}, 3200);

})

bearWhite.addEventListener('mouseover', function() {
   bearWhite.style.transform = 'scale(1.05)'
   //logo.style.transform = 'scale(1.05)'
   bearWhite.classList.toggle('glow')
   //logo.classList.toggle('glow')
})

bearWhite.addEventListener('mouseout', () => {
   bearWhite.style.transform = 'scale(1.0)'
   //logo.style.transform = 'scale(1.0)'
   bearWhite.classList.toggle('glow')
   //logo.classList.toggle('glow')
})

function showSection(section) {
   [about, values, inquiries, contact].forEach(elem => {
       if (elem !== section) {
           elem.classList.add('hidden');
       }
   });
   section.classList.remove('hidden');
}

aboutButton.addEventListener('click', () => showSection(about));
inquiriesButton.addEventListener('click', () => showSection(inquiries));
valuesButton.addEventListener('click', () => showSection(values));
contactButton.addEventListener('click', () => showSection(contact));


submit.addEventListener('click', submitInquiry)

function submitInquiry(event) {
         event.preventDefault();
         const messageBody = `Hannah,
         
                      ${nameInput.value} has messaged you with regards to their project, 
                      ${bandNameInput.value}. 
                      
                      Concerning ${bandNameInput.value}, they have written the following:
                      '${aboutInput.value}'. 
                      
                      With regard to what they are looking for, they have written this: 
                      '${arrangementInput.value}'. 
                      
                      Their questions are '${questionsInput.value}', and their
                      additional comments are that '${anythingElseInput.value}'. 
                      
                      They can be reached either at their email ${emailInput.value}, 
                      or by phone at ${phoneInput.value}. 
                      
                      Godspeed,
                      Poke`
         
          fetch("https://formspree.io/f/moqgkbnp", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({ messageBody })
          }).then(function(response) {
              if (response.ok) {
                  alert("Message sent successfully!");
              } else {
                  alert("Failed to send message. Please try again later.");
              }
          }).catch(function(error) {
              alert("An error occurred. Please try again later.");
              console.error(error);
          });
      };
      
 