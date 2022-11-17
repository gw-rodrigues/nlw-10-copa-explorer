function createMatch(team1, hour, team2) {
  return `<li>
              <img src="/assets/teams/${team1}.svg" alt="${team1} flag" />
              <time datetime="${hour}">${hour}</time>
              <img src="/assets/teams/${team2}.svg" alt="${team2} flag" />
            </li>`
}

let animationDelay = 0
function createCard(date, weekDay, matches) {
  animationDelay += 0.2
  return `<div class="card" style="animation-delay:${animationDelay}s">
          <h2>
            <time datetime="${date}">${date}</time>
            <span>${weekDay}</span>
          </h2>
          <ul>
            ${matches}
          </ul>
        </div>`
}

document.querySelector('#card').innerHTML =
  createCard(
    '24/11',
    'quinta',
    createMatch('switzerland', '07:00', 'cameroon') +
      createMatch('portugal', '13:00', 'ghana') +
      createMatch('brazil', '07:00', 'serbia'),
  ) +
  createCard(
    '24/11',
    'quinta',
    createMatch('south-korea', '07:00', 'ghana') +
      createMatch('brazil', '07:00', 'switzerland') +
      createMatch('portugal', '07:00', 'argentina'),
  )
