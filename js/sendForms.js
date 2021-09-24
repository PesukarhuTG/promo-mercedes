function sendForms() {
    const form = document.querySelector('.form-test-drive');

    form.addEventListener('submit', e => {
        e.preventDefault();
        let data = {};

        for (let { name, value } of form.elements) { //elem = {name, value}; elements=св-во form со всеми input + button;
            if (name) { //оставляем в псевдомассиве только input
                if (!value) {
                    alert('Пожалуйста, заполните все данные формы ');
                    return;
                } else if (value.trim() === '') {
                    alert('Данные формы некорректны');
                    form.reset();
                    return;
                } else {
                    data[name] = value;
                }
            }
        }

        //отправляем тетсовый запрос на сервис jsonplaceholder
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(response => { //отработает, когда данные будут точно получены
                if (response.status === 200 || response.status === 201) {
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            })
            .then(data => { //этот then получит данные в читабельном виде
                alert('Данные успешно отправлены');
                form.reset(); //очистка формы
            })
            .catch(err => console.log('Ошибка, статус: ' + err.message))
    });
};

export default sendForms;