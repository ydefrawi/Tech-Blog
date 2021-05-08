const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

const deletePost = async () => {
  const response = await fetch(`/api/posts/${postID}`,{
    method: 'DESTROY',
    headers: {'Content -Type': 'application/json'},
  }

)}

let postId = document.querySelector(".delButton").getAttribute("data-id")

document.querySelector('#logout').addEventListener('click', logout);

document.querySelector('.delButton').addEventListener('click', deletePost);
