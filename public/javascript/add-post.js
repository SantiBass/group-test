const barbersDiv = document.querySelector('.barbers');

 document.querySelector('#new-post-form').addEventListener('submit', () => {
     event.preventDefault();
     const userLocation = document.getElementById('post-title').value.trim();

      barbersDiv.textContent = 'Loading...';

    fetch('/api/barbers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userLocation})
    }).then(response => response.json())
    .then(data => {
        const { businesses } = data;
        barbersDiv.textContent = '';
        for (let i = 0; i < businesses.length; i++) {
            const business = businesses[i];
            const bisName = document.createElement('h3');
            bisName.textContent = business.name;
            barbersDiv.appendChild(bisName);
        }


        // fetch('/dashboard', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ businesses }),
        // })
    });

  });


 
 