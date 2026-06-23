const loginButton = document.getElementById('loginBtn')

loginButton.addEventListener('click', async () => {
    const email = document.getElementById('emailInput').value
    const password = document.getElementById('passwordInput').value

    const response = await fetch(
        'https://backend-auth-2-tfuo.onrender.com/login',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }
    )
    const data = await response.json()
    alert(data.message)

    if (response.ok) {
        window.location.href = 'dashBoard.html'
    }
})