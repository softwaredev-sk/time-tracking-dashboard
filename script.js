let jsonData;

fetch('./data.json')
  .then((res) => res.json())
  .then((data) => {
    jsonData = data;
    fillForm('weekly');
  });

const reportPeriod = document.querySelector('.report-period-flex');

reportPeriod.addEventListener('click', (e) => {
  reportPeriod.childNodes.forEach((x) => {
    if (x.classList?.contains('period')) {
      x.classList.remove('active');
    }
  });
  if (e.target.classList.contains('report-period-flex')) return;
  e.target.classList.add('active');
  //   console.log(e.target.textContent);
  fillForm(e);
});

const fillForm = function (event) {
  const t = event.target?.textContent.toLowerCase() ?? event;
  //   console.log(t);
  if (!event.target?.classList.contains('period') && !t == undefined) return;

  const workCurrent = document.querySelectorAll('.current-period');
  const workPrev = document.querySelectorAll('.previous-period');

  workCurrent.forEach((x) => {
    if (x.closest('.card-work-flex-container-bottom'))
      x.textContent = jsonData[0].timeframes[t].current;
    if (x.closest('.card-play-flex-container-bottom'))
      x.textContent = jsonData[1].timeframes[t].current;
    if (x.closest('.card-study-flex-container-bottom'))
      x.textContent = jsonData[2].timeframes[t].current;
    if (x.closest('.card-exercise-flex-container-bottom'))
      x.textContent = jsonData[3].timeframes[t].current;
    if (x.closest('.card-social-flex-container-bottom'))
      x.textContent = jsonData[4].timeframes[t].current;
    if (x.closest('.card-selfcare-flex-container-bottom'))
      x.textContent = jsonData[5].timeframes[t].current;
  });

  workPrev.forEach((x) => {
    if (x.closest('.card-work-flex-container-bottom'))
      x.textContent = jsonData[0].timeframes[t].previous;
    if (x.closest('.card-play-flex-container-bottom'))
      x.textContent = jsonData[1].timeframes[t].previous;
    if (x.closest('.card-study-flex-container-bottom'))
      x.textContent = jsonData[2].timeframes[t].previous;
    if (x.closest('.card-exercise-flex-container-bottom'))
      x.textContent = jsonData[3].timeframes[t].previous;
    if (x.closest('.card-social-flex-container-bottom'))
      x.textContent = jsonData[4].timeframes[t].previous;
    if (x.closest('.card-selfcare-flex-container-bottom'))
      x.textContent = jsonData[5].timeframes[t].previous;
  });
};
