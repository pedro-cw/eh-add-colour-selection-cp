document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".acu-point").forEach(button => {
    button.addEventListener("click", function () {
      let pointId = this.getAttribute("data-point");
      document.getElementById("modal-" + pointId).style.display = "block";
    });
  });

  window.closeModal = function (pointId) {
    document.getElementById("modal-" + pointId).style.display = "none";
  };

  // Close modal when clicking outside
  window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  };
});
