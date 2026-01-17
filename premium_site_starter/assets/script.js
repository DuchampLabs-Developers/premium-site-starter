// Year in footer
document.getElementById('yr').textContent = new Date().getFullYear();

// Simple intersection observer for reveals
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');  // element visible → slide/fade in
    } else {
      entry.target.classList.remove('in'); // element out of view → slide/fade out
    }
  });
}, { threshold: 0.2 }); // trigger when 20% visible

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

