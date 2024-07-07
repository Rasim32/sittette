document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var regUsername = document.getElementById('regUsername').value;
    var regPassword = document.getElementById('regPassword').value;

    if (localStorage.getItem(regUsername)) {
        alert('Имя пользователя уже занято');
        return;
    }

    localStorage.setItem(regUsername, regPassword);
    alert('Регистрация успешна!');

    window.location.href = 'file:///C:/Users/Rasim/Desktop/Новая%20папка%20(2)/idex.html';

    document.getElementById('regUsername').value = '';
    document.getElementById('regPassword').value = '';
});