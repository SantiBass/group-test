// edit post
async function editFormHandler(event) {
    event.preventDefault();
  
    
    const title = document.querySelector('input[name="post-title"]').value.trim();
  //  const content = document.querySelector('input[name="content"]').value.trim();
    console.log(title);
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    // if (title && content) {
              if (title){
    const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
              post_id: id,
              title,
              //  content
            }),
        headers: { 
            'Content-Type':'application/json' 
        }
      
      });console.log("it works")
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
     }
  }
  console.log("it works")
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);