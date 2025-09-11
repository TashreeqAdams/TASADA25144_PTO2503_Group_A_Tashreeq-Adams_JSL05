// Modal functionality for add new task button

document.addEventListener("DOMContentLoaded", () => {
  const taskModal = document.getElementById("header-task-modal");
  const openBtn = document.getElementById("header-add-task-button"); // your "Add Task" button
  const closeBtn = document.getElementById("header-close-modal-btn");

  // ✅ Open modal
  openBtn.addEventListener("click", () => {
    // Reset fields if needed
    document.getElementById("header-modal-task-title").value = "";
    document.getElementById("header-modal-task-desc").value = "";
    document.getElementById("header-modal-task-status").value = "";

    taskModal.showModal();
  });

  // ✅ Close modal
  closeBtn.addEventListener("click", () => {
    taskModal.close();
  });
});
