document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const closeModal = document.querySelector('.close');
  const certificateContent = document.getElementById('certificateContent');

  // Hide the modal initially
  modal.style.display = 'none';

  form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName');

      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput.value;

      if (studentName.trim() === '' || personalMessage.trim() === '' || courseName.trim() === '') {
          alert('Please fill in all fields');
          return;
      }

      // Generate certificate content dynamically with an image
      certificateContent.innerHTML = `
          <h1>Certificate of Achievement</h1>
          <p>This is to certify that</p>
          <h2>${studentName}</h2>
          <p>has successfully completed the</p>
          <h3>${courseName} Course</h3>
          <p>With legendary perseverance and world-class bad-assery for never giving up</p>
          <img src="logo.png" alt="Codespace logo" style="width:100%; max-width:200px; margin-bottom:20px;">
          <p>${personalMessage}</p>
      `;

      // Display the modal
      modal.style.display = 'block';

      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      courseNameInput.value = '';
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
  });

  // Close the modal when clicking outside of it
  window.addEventListener('click', function (event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });
});
