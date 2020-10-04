const form = document.querySelector('#message-form');
const message = document.querySelector('#message');
const content = document.querySelector('.message-content');
const feedback = document.querySelector('.feedback');
const key = 'message-content';

/* loading value */
//content.textContent = getSavedValue(key);

form.addEventListener('submit', function (event) {

    /* prevent the form's default submission action
       Заменило мне localStorage, но оно умело
       после обновления страницы сохранять значение,
       prevent просто предотвращает обновление
       после нажатия кнопки submit */
    event.preventDefault();

    if (message.value === '') {
        feedback.classList.add('show');
        //console.log(feedback.classList); // показывает существующие классы по селектору feedback
        setTimeout(() => {
            feedback.classList.remove('show')
        }, 2000);
        //displayVisible();
    } else {
        content.textContent = message.value;
        localStorage.setItem(key, message.value);
        message.value = '';
    }
})

function getSavedValue (value) {
    if (!localStorage.getItem(value)) {
        return "nothing";
    }
    return localStorage.getItem(value);
}

/* Пример предотвращения явного события */
function stopDefAction(event) {
    event.preventDefault();
}

document.getElementById('my-checkbox').addEventListener('click', stopDefAction, false);

/*function displayVisible() {
    let delay = 100;
    setTimeout(function run() {
        feedback.style.display = "block";
        setTimeout(run, delay);
    }, delay);
}*/

//alert(getSavedValue(key));