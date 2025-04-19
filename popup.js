window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('popupOverlay').style.display = 'flex';
  }, 5000);
});

function closePopup() {
  document.getElementById('popupOverlay').style.display = 'none';
}
