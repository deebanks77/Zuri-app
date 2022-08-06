const toggleBtn = document.querySelector('.toggle-btn');
const hamburger = document.querySelector('.hamburger');
const sideBar = document.querySelector('#side-bar');

const handleToggle = () => {
    toggleBtn.classList.toggle('active');
}

const handleSidebar = () => {
    sideBar.classList.toggle('active');
}

toggleBtn.addEventListener('click', handleToggle);
hamburger.addEventListener('click', handleSidebar);