document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM Loaded');
    }

    const devourBtn = document.querySelectorAll('.devour-button');

    devourBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const dataId = e.target.getAttribute('data-id');
            const id = parseInt(dataId);

            const isDevoured = {
                devoured: true,
            };

            fetch(`/api/burgers/${id}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(isDevoured),
            }).then((response) => {
                // Empty the form
                if (response.ok) {
                    console.log(`Status Updated: ${isDevoured}`);
                    location.reload('/');
                } else {
                    alert('Could not update devour status')
                }

            });
        });

    });

    const submitBurger = document.getElementById('start-form');

    submitBurger.addEventListener('submit', (e) => {
        e.preventDefault();
        const burgerName = document.getElementById('burger-select').value.trim();
        if (burgerName === '') {
            return;
        }
        const newBurger = {
            burger_name: burgerName
        };

        fetch('/api/burgers', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            // make sure to serialize the JSON body
            body: JSON.stringify(newBurger),
        }).then(() => {
            // Empty the form
            document.getElementById('burger-select').value = '';
            // Reload the page so the user can see the new quote
            console.log('Created a new burger!');
            location.reload();
        });
    });

});