document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM Loaded');
    }

    const devourBtn = document.querySelectorAll('.devour-button');

    if (devourBtn) {
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

                })
            })

        }










});