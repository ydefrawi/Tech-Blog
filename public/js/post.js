const newPostHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the post form
    const title = document.querySelector('#post-name').value.trim();
    const body = document.querySelector('#post-desc').value.trim();
  console.log(title,body)
    if (title && body) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/posts', {
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
    .querySelector('.new-post-form')
    .addEventListener('submit', newPostHandler);
  