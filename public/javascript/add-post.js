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
        console.log(data);
        const { businesses } = data;
        barbersDiv.textContent = '';
        for (let i = 0; i < businesses.length; i++) {
            const business = businesses[i];
            // const bisName = document.createElement('h3');

            var bisName = document.createElement('a');
            bisName.classList.add('business-title')
            var linkText = document.createTextNode(business.name);
            bisName.title = linkText;
            bisName.href = business.url;
            document.body.appendChild(bisName);
            bisName.textContent = business.name;

            const bisNumber = document.createElement('p');
            bisNumber.textContent = 'phone: ' + business.phone;

            const bisRating = document.createElement('p');
            bisRating.textContent = 'ratings: ' + business.rating;

            const bisPrice = document.createElement('p');
            bisPrice.textContent = 'price: ' + business.price;

            barbersDiv.appendChild(bisName);
            barbersDiv.appendChild(bisNumber);
            barbersDiv.appendChild(bisPrice);
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


 
 