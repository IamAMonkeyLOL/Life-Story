const text = "Welcome to my life story website, here we explore my life!";
const typingSpeed = 50;
let index = 0;

function typeWriter() {
    if(index < text.length) {
        const container = document.getElementById('type');
        container.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
        
    }
}

window.onload = function() {
    typeWriter();
};


function showTab(tabId) {
      const tabContents = document.querySelectorAll(".tab-content");
      tabContents.forEach((tabContent) => {
          tabContent.style.display = "none";
      });
  
      document.getElementById(tabId).style.display = "block";
  }