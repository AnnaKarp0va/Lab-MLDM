var error_message = "";

 //Функция валидации (проверка логического ввода матриц)
function Validation(str) {
    let mass = true;
    if (str.length > 0) {
        mass = str.split(" ");
        // проверка на валидацию
        for (let i = 0; i < mass.length; i++){
            if (mass[i].length != 4) {
                error_message = 'Размер элемента должен быть равен 4 символам!';
                mass = false;
                break;
            }
            if (!(mass[i][0] < 'A' || mass[i][0] > 'z')) {
                error_message = 'Первый элемент должен быть цифрой!';
                mass = false;
                break;
            }
            if (!(mass[i][1] < 'A' || mass[i][1] > 'z')) {
                error_message = 'Второй элемент должен быть цифрой!';
                mass = false;
                break;
            }
            if (mass[i][1] % 2 == 0) {
                error_message = 'Второй элемент должен быть нечетной цифрой!';
                mass = false;
                break;
            }
            if (mass[i][0] % 2 != 0) {
                error_message = 'Первый элемент должен быть четной цифрой!';
                mass = false;
                break;
            }
            if (mass[i][2] < "A" || mass[i][0] > "z") {
                error_message = 'Третий элемент должен быть буквой!';
                mass = false;
                break;
            }
            if (mass[i][3] < "A" || mass[i][0] > "z") {
                error_message = 'Четвертый элемент должен быть буквой!';
                mass = false;
                break;
            }
        }
    }
    else {
        error_message = "Массив не должен быть пустым!";
    }
    return mass;
}

 //Основаная функция для работы с множествами и выполнением действий
function Sets() {
    var a = document.getElementById('massiv1');
    var b = document.getElementById('massiv2');
    if (Validation(a.value) && Validation(b.value)) { // true
        const a_set = new Set(a.value.split(" "));
        // создание двух множеств
        const b_set = new Set(b.value.split(" "));
        // объеденение двух множеств
        let union = [new Set([a_set, b_set])];
        // пересечение двух множеств
        let intersection = (a.value.split(" ")).filter(x => (b.value.split(" ")).includes(x));
        // дополнение A\B
        let difference_one = (a.value.split(" ")).filter(x => !b.value.split(" ").includes(x));
        // дополнение B\A
        let difference_two= (b.value.split(" ")).filter(x => !a.value.split(" ").includes(x));
        // симметричная разность двух множеств
        let symmetrical_difference = a.value.split(" ").filter(x => !b.value.split(" ").includes(x)).concat(b.value.split(" ").filter(x => !a.value.split(" ").includes(x)));
        // вывод результатов в документ при условии true
        document.getElementById('union').innerHTML = [union.values()];
        document.getElementById('intersection').innerHTML = [intersection.values()];
        document.getElementById('difference_AB').innerHTML = [difference_one.values()];
        document.getElementById('difference_BA').innerHTML = [difference_two.values()];
        document.getElementById('symmetrical_difference').innerHTML = [symmetrical_difference.values()];
    }
    // false - вывод ошибок
    else {
        alert(error_message);
    }
}