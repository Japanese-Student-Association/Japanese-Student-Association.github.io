const eventModal = document.getElementById('eventModal');
const closeBtn = document.getElementById('closeBtn');
document.addEventListener('DOMContentLoaded', () => {
    eventModal.showModal();
});
closeBtn.addEventListener('click', () => {
    eventModal.close();
})
