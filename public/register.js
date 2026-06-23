const registerButton = document.getElementById('registerBtn')

registerButton.addEventListener('click', async () => {
    const name = document.getElementById('nameInput').value
    const email = document.getElementById('emailInput').value
    const password = document.getElementById('passwordInput').value

    const response = await fetch(
        'https://backend-auth-2-tfuo.onrender.com/register',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        }
    )
    const data = await response.json()
    alert(data.message)

    if (response.ok) {
        window.location.href = 'login.html'
    }
})