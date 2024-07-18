document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;

  if (!email || !name) {
      document.getElementById('errorModal').style.display = 'block';
  } else {
      document.getElementById('successModal').style.display = 'block';
  }
});

document.getElementById('closeErrorModal').addEventListener('click', function() {
  document.getElementById('errorModal').style.display = 'none';
});

document.getElementById('closeSuccessModal').addEventListener('click', function() {
  document.getElementById('successModal').style.display = 'none';
});

window.onclick = function(event) {
  const errorModal = document.getElementById('errorModal');
  const successModal = document.getElementById('successModal');

  if (event.target == errorModal) {
      errorModal.style.display = 'none';
  }
  if (event.target == successModal) {
      successModal.style.display = 'none';
  }
};

document.getElementById('exploreButton').addEventListener('click', function() {
  window.location.href = 'https://www.google.com'; 
});
