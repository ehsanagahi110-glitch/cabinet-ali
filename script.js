// منوی موبایل
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// بستن منو بعد از کلیک روی لینک
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// فرم تماس (نمایش پیام موفقیت)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // جلوگیری از ارسال واقعی فرم
    alert('پیام شما با موفقیت ارسال شد! (این یک نمونه است)');
    this.reset();
});
