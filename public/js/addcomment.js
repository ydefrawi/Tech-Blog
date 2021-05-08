const newPostHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the post form
    const body = document.querySelector('#comment').value.trim();
  console.log(title,body)
    if (body) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/post/:id', {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector('.comment-form')
    .addEventListener('submit', newPostHandler);
  