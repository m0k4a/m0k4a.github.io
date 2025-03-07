// ✅ تفعيل القائمة الجانبية بسلاسة من اليمين
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const isSidebarVisible = sidebar.style.right === "0px";

    sidebar.style.right = isSidebarVisible ? "-250px" : "0px";
    overlay.style.display = isSidebarVisible ? "none" : "block";
}

// ✅ إنشاء تأثير الفضاء بالنقاط المتحركة
function createDots() {
    const background = document.getElementById("background");
    const numDots = 200;

    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;

        background.appendChild(dot);
    }
}

// ✅ تحريك النقاط نحو المركز بسلاسة
function moveDots() {
    const dots = document.querySelectorAll(".dot");

    dots.forEach(dot => {
        const rect = dot.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const moveX = (centerX - rect.x) * 0.005;
        const moveY = (centerY - rect.y) * 0.005;

        dot.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    requestAnimationFrame(moveDots);
}

// ✅ البحث عن البوستات بناءً على النص المدخل
function searchPosts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        const text = post.textContent.toLowerCase();
        post.style.display = text.includes(input) ? "block" : "none";
    });
}

// ✅ تصفية البوستات حسب التاج المحدد
function filterByTag(tag) {
    const posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        const tags = post.dataset.tags || "";
        post.style.display = tags.includes(tag) ? "block" : "none";
    });
}

// ✅ تهيئة الصفحة عند التحميل
function init() {
    createDots();
    moveDots();

    document.getElementById("searchInput").addEventListener("input", searchPosts);
}

window.addEventListener("load", init);

document.addEventListener("DOMContentLoaded", function () {
    function typeEffect(element, text, speed) {
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        element.innerHTML = ""; // مسح النص الحالي
        typing();
    }

    // تطبيق التأثير على العناوين
    const headerTitle = document.querySelector(".site-name");
    if (headerTitle) {
        typeEffect(headerTitle, "M0k4a", 200);
    }

    // تطبيق التأثير على العنوان الرئيسي في الصفحة الرئيسية
    const mainTitle = document.querySelector("h1");
    if (mainTitle) {
        typeEffect(mainTitle, mainTitle.textContent, 200);
    }

    // مثال: تطبيق التأثير على عنصر معين في صفحة "About"
    const aboutText = document.querySelector(".about-text");
    if (aboutText) {
        typeEffect(aboutText, aboutText.textContent, 75);
    }
});
