const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const times = ['8.30 - 9.10', '9.15 - 9.55', '10.15 - 10.55', '11.15 - 11.55', '12.15 - 12.55', '13.15 - 13.55', '14.05 - 14.45'];
const subjects = [
    [],
    ['Физика', 'ОБЖ', 'Математика', 'Математика', 'Физ-ра', 'Физ-ра', 'Английский'],
    ['Родная Литература', 'Литература', 'Информатика', 'Информатика', 'Общество', 'Общество'],
    ['История', 'История', 'Английский', 'Английский', 'Химия', 'Родной'],
    ['Физика', 'Физика', 'СОЧ', 'Математика', 'Математика', 'Биология', 'Литература'],
    ['Информатика', 'Информатика', 'СОЧ', 'Математика', 'Математика', 'Физика', 'Русский'],
    ['Литература', 'Хореография', 'СОЧ', 'Математика', 'Математика', 'Физика', 'Физика']
];

const prev = document.getElementById('left');
const next = document.getElementById('right');

function update(dayOfWeek) {
    let container = document.getElementById('timetable');
    container.innerHTML = `<h1>${days[dayOfWeek]}</h1>`;
    for (let i = 0; i < subjects[dayOfWeek].length; i++) {
        if (i == 0) {
            container.innerHTML += `<div class="subject"><hr><h3>${subjects[dayOfWeek][i]}</h3><p>${times[i]}</p><hr></div>`;
        } else if (i == subjects[weekday].length - 1) {
            container.innerHTML += `<div class="subject"><h3>${subjects[dayOfWeek][i]}</h3><p>${times[i]}</p></div>`;
        } else {
            container.innerHTML += `<div class="subject"><h3>${subjects[dayOfWeek][i]}</h3><p>${times[i]}</p><hr></div>`;
        }
    }
}

var today = new Date();
var weekday = today.getDay();
if (weekday === 0) {
    weekday++;
}
var hours = today.getHours();
var mins = today.getMinutes();
if ((weekday === 2 || weekday === 3) && (hours * 60 + mins > 835)) {
    weekday++;
} else if (hours * 60 + mins > 895 && weekday != 0) {
    weekday++;
}

update(weekday);

prev.onclick = () => {
    weekday--;
    if (weekday === 0) weekday = 6;
    update(weekday);
}

next.onclick = () => {
    weekday++;
    if (weekday === 7) weekday = 1;
    update(weekday);
}