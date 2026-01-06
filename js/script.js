/* EmailJS */
(function () {
  emailjs.init("dwRY1ZGQu43ai7aDr");
})();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_37meqsk",
    "template_93h0j6a",
    this
  ).then(() => {
    status.innerText = "Message sent successfully ✅";
    status.style.color = "green";
    form.reset();
  }).catch(() => {
    status.innerText = "Failed to send message ❌";
    status.style.color = "red";
  });
});

/* Dark Mode */
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

/* Mobile Menu */
document.getElementById("toggle").onclick = () => {
  document.getElementById("menu").classList.toggle("show");
};

/* Scroll Animation */
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

/* Project Modal */
function openModal(title, desc) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}
