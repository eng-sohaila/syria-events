// assets/js/main.js

document.addEventListener('DOMContentLoaded', function () {
  const syFlag = document.getElementById('syFlag');
  const usFlag = document.getElementById('usFlag');
  const darkBtn = document.getElementById('darkToggle');

  // لو مش موجودين (صفحة ناقصة) نطلع
  // بس انتي عندك كل الصفحات فيهم نفس النافبار
  // فمفروض يكونوا موجودين

  // تغيير اللغة إلى عربي
  function toArabic() {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';

    document.querySelectorAll('[data-ar]').forEach(el => {
      el.textContent = el.getAttribute('data-ar');
    });

    if (syFlag) syFlag.classList.remove('d-none');
    if (usFlag) usFlag.classList.add('d-none');
  }

  // تغيير اللغة إلى إنجليزي
  function toEnglish() {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';

    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = el.getAttribute('data-en');
    });

    if (syFlag) syFlag.classList.add('d-none');
    if (usFlag) usFlag.classList.remove('d-none');
  }

  if (syFlag) {
    syFlag.addEventListener('click', toEnglish); // <<< هيك كان عندك غلط
  }
  if (usFlag) {
    usFlag.addEventListener('click', toArabic);
  }

  // الوضع الداكن
  function toggleDark() {
    document.body.classList.toggle('dark-mode');
  }
  if (darkBtn) {
    darkBtn.addEventListener('click', toggleDark);
  }
});

  // التحقق من نموذج "اتصل بنا"
const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const alertBox = document.getElementById("alert");

      if (!name || !email.includes("@") || !message) {
        alertBox.innerHTML = `<div class="alert alert-danger">يرجى ملء جميع الحقول بشكل صحيح.</div>`;
      } else {
        alertBox.innerHTML = `<div class="alert alert-success">تم إرسال رسالتك بنجاح!</div>`;
        form.reset();
      }
    });
  }

      // ----------------------------------
    // 4. خاصية إضافية: زر الانتقال للأعلى
    // ----------------------------------
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.id = 'scrollToTopBtn';
    scrollToTopBtn.classList.add('btn', 'btn-gold-custom', 'shadow');
    
    scrollToTopBtn.style.cssText = `
        position: fixed; 
        bottom: 20px; 
        right: 20px; 
        z-index: 1000; 
        display: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
    `;
    
    document.body.appendChild(scrollToTopBtn);

    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

