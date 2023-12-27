document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.post-content section');
    const sidebarLinks = document.querySelectorAll('.sidebar-section');

    function updateSidebar() {
        let found = false;
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (!found && rect.top <= 100 && rect.bottom >= 100) {
                sidebarLinks.forEach(link => link.classList.remove('active'));
                sidebarLinks[index].classList.add('active');
                found = true;
            } else {
                sidebarLinks[index].classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', updateSidebar);
    window.addEventListener('resize', updateSidebar);
    updateSidebar(); // Initial update

    sidebarLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});