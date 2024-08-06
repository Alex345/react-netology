function Calendar({date}) {

  const month_name = date.toLocaleString("ru-RU", {month: "long"});
  const month_sufix = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря',];
  const day_name = date.toLocaleString("ru-RU", {weekday: "long"});


  // Текущий месяц
  const current_month_number = date.getMonth();

  // Текущий год
  const current_year = date.getFullYear();

  // Новая дата - получаем первое число текущего месяца
  const first_day_current_month = new Date(current_year, current_month_number, 1);

  // Получаем день недели первого числа текущего месяца
  const day_name_first_day = first_day_current_month.getDay();

  const days = [];

  // Если это не понедельник, то есть числа предыдущего месяца
  if (1 !== day_name_first_day) {
    // Новая дата - последний день предыдущего месяца
    const last_day_prev_month = new Date(first_day_current_month.setDate(first_day_current_month.getDate() - 1));

    // Получаем число последнего дня предыдущего месяца
    const last_day_number_prev_month = last_day_prev_month.getDate();

    // Получаем день недели последнего дня предыдущего месяца
    const last_day_name_prev_month = last_day_prev_month.getDay();

    // От последнего числа в предыдущем месяце отнимаем разницу между понедельником (1) и днем недели последнего числа
    // По сути получаем число в понедельник предыдущего месяца
    const first_week_day_prev_month = last_day_number_prev_month - (last_day_name_prev_month - 1);

    // Собираем массив
    let arr_length = last_day_number_prev_month - first_week_day_prev_month;
    for (let i = 0; i <= arr_length; i++) {
      days.push(first_week_day_prev_month + i);
    }
  }

  // Новая дата - первый день следующего месяца
  const first_day_next_month = new Date(current_year, current_month_number + 1, 1);

  // День недели первого числа следующего месяца
  const first_day_name_next_month = first_day_next_month.getDay();

  // Новая дата - последний день текущего месяца
  const last_day_current_month = new Date(first_day_next_month.setDate(first_day_next_month.getDate() - 1));

  // Наполняем массив
  let arr_length = last_day_current_month.getDate();
  for (let i = 0; i < arr_length; i++) {
    days.push(1 + i);
  }

  // День недели последнего числа текущего месяца
  const last_day_name_current_month = last_day_current_month.getDay();

  // Если это не воскресенье, то добавляем часть чисел следующего месяца, до конца недели
  if (0 !== last_day_name_current_month) {

    // Число следующего месяца соответствующее воскресенью
    // Если первый день попал на воскресенье, то для того чтобы зайти в массив нужно поставить 2
    const sunday_number_next_month = (0 === first_day_name_next_month) ? 2 : 1 + (7 - (first_day_name_next_month - 1));

    console.log(sunday_number_next_month);

    let arr_length = sunday_number_next_month - 1;
    for (let i = 0; i < arr_length; i++) {
      days.push(1 + i);
    }
  }

  let tbody = '';
  for (let i = 0; i < (days.length / 7); i++) {

    tbody += '<tr>';

    for (let j = 0; j < 7; j++) {


      if (1 !== day_name_first_day && i === 0 && j < (day_name_first_day - 1) ||
        1 !== day_name_first_day && i === 0 && 0 === day_name_first_day && j < 6 ||
        0 !== last_day_name_current_month && i === ((days.length / 7) - 1) && j >= (first_day_name_next_month - 1)) {
        tbody += '<td class="ui-datepicker-other-month">';
      } else if (date.getDate() === days[((i * 7) + j)]) {
        tbody += '<td class="ui-datepicker-today">';
      } else {
        tbody += '<td>';
      }

      tbody += days[((i * 7) + j)];

      tbody += '</td>';
    }

    tbody += '</tr>';
  }

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{day_name}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">{month_sufix[date.getMonth()]}</div>
          <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month_name}</span>
          &nbsp;
          <span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col className="ui-datepicker-week-end"></col>
          <col className="ui-datepicker-week-end"></col>
        </colgroup>
        <thead>
        <tr>
          <th scope="col" title="Понедельник">Пн</th>
          <th scope="col" title="Вторник">Вт</th>
          <th scope="col" title="Среда">Ср</th>
          <th scope="col" title="Четверг">Чт</th>
          <th scope="col" title="Пятница">Пт</th>
          <th scope="col" title="Суббота">Сб</th>
          <th scope="col" title="Воскресенье">Вс</th>
        </tr>
        </thead>
        <tbody dangerouslySetInnerHTML={{__html: tbody}}></tbody>
      </table>
    </div>
  );
}

export default Calendar
