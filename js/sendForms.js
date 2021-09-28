function sendForms() {
    const forms = document.querySelectorAll('.form-test-drive');
    for (let form of forms) {


        form.addEventListener('submit', e => {
            e.preventDefault();
            let error = false;

            let data = {};

            for (let { name, value } of form.elements) { //elem = {name, value}; elements=св-во form со всеми input + button;
                if (name) { //оставляем в псевдомассиве только input
                    if (value == error || value.trim() === error) {
                        alert('Пожалуйста, заполните все данные формы ');
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

                    if (!form.closest('#modal__win').classList.contains('hidden')) {
                        form.closest('#modal__win').classList.add('hidden');
                        document.body.style.overflow = '';
                    }
                })
                .catch(err => console.log('Ошибка, статус: ' + err.message))
        });
    }


};

export default sendForms;