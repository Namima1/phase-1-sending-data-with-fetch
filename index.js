//It's time to practice writing your own POST request using fetch(). In index.js, write a function, submitData, that takes two strings as arguments, one representing a user's name and the other representing a user's email.

//The first two tests mirror the behavior of the JSON server. As you write your solution, keep the server running to test your code. Open index.html in a browser to gain access to your submitData function in console.

function submitData(name, email) {
    const data = {
        name: name,
        email: email
    };
  
    return fetch('http://localhost:3000/users', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json' 
    },
    body: JSON.stringify(data),
  }) 
  .then(response => {
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
})
.then(data => {
    
    console.log('Success:', data);
    document.body.innerHTML = `<p>ID: ${data.id}</p>`;
})
.catch(error => {
    
    console.error('Error:', error);
    document.body.innerHTML = `<p>${error.message}</p>`;
});
}



