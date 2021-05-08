
const newCommentHandler = async (event) => {
    event.preventDefault();
    const post_id = window.location.href.split('/')[4]
    // console.log(currentPost)
    // Collect value from the comment body
  const content = document.querySelector('#comment').value.trim();
    if (content) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/comment/`, {
        method: 'POST',
        body: JSON.stringify({content, post_id}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (await response.ok) {
        // If successful, redirect the browser to the dashboard page
          document.location.replace(`/post/${post_id}`);
      } else {
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector('.comment-form')
    .addEventListener('submit', newCommentHandler);
  