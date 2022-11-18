const matchesList = [
  {
    date: '20/11',
    weekDay: 'Sunday',
    matches: [{ hour: '17:00', teamA: 'Qatar', teamB: 'Ecuador' }],
  },

  {
    date: '21/11',
    weekDay: 'Monday',
    matches: [
      { hour: '14:00', teamA: 'England', teamB: 'Iran' },
      { hour: '17:00', teamA: 'Senegal', teamB: 'Netherlands' },
      { hour: '20:00', teamA: 'United States', teamB: 'Wales' },
    ],
  },
  {
    date: '22/11',
    weekDay: 'Tuesday',
    matches: [
      { hour: '11:00', teamA: 'Argentina', teamB: 'Saudi Arabia' },
      { hour: '14:00', teamA: 'Denmark', teamB: 'Tunisia' },
      { hour: '17:00', teamA: 'Mexico', teamB: 'Poland' },
      { hour: '20:00', teamA: 'France', teamB: 'Australia' },
    ],
  },
  {
    date: '23/11',
    weekDay: 'Wednesday',
    matches: [
      { hour: '11:00', teamA: 'Morocco', teamB: 'Croatia' },
      { hour: '14:00', teamA: 'Germany', teamB: 'Japan' },
      { hour: '17:00', teamA: 'Spain', teamB: 'Costa Rica' },
      { hour: '20:00', teamA: 'Belgium', teamB: 'Canada' },
    ],
  },
  {
    date: '24/11',
    weekDay: 'Thursday',
    matches: [
      { hour: '11:00', teamA: 'Switzerland', teamB: 'Cameroon' },
      { hour: '14:00', teamA: 'Uruguay', teamB: 'Korea Republic' },
      { hour: '17:00', teamA: 'Portugal', teamB: 'Ghana' },
      { hour: '20:00', teamA: 'Brazil', teamB: 'Serbia' },
    ],
  },

  {
    date: '25/11',
    weekDay: 'Friday',
    matches: [
      { hour: '11:00', teamA: 'Wales', teamB: 'Iran' },
      { hour: '14:00', teamA: 'Qatar', teamB: 'Senegal' },
      { hour: '17:00', teamA: 'Netherlands', teamB: 'Ecuador' },
      { hour: '20:00', teamA: 'England', teamB: 'United States' },
    ],
  },
  {
    date: '26/11',
    weekDay: 'Saturday',
    matches: [
      { hour: '11:00', teamA: 'Tunisia', teamB: 'Australia' },
      { hour: '14:00', teamA: 'Poland', teamB: 'Saudi Arabia' },
      { hour: '17:00', teamA: 'France', teamB: 'Denmark' },
      { hour: '20:00', teamA: 'Argentina', teamB: 'Mexico' },
    ],
  },
  {
    date: '27/11',
    weekDay: 'Sunday',
    matches: [
      { hour: '11:00', teamA: 'Japan', teamB: 'Costa Rica' },
      { hour: '10:00', teamA: 'Belgium', teamB: 'Morocco' },
      { hour: '17:00', teamA: 'Croatia', teamB: 'Canada' },
      { hour: '20:00', teamA: 'Spain', teamB: 'Germany' },
    ],
  },
  {
    date: '28/11',
    weekDay: 'Monday',
    matches: [
      { hour: '11:00', teamA: 'Cameroon', teamB: 'Serbia' },
      { hour: '14:00', teamA: 'Korea Republic', teamB: 'Ghana' },
      { hour: '17:00', teamA: 'Brazil', teamB: 'Switzerland' },
      { hour: '20:00', teamA: 'Switzerland', teamB: 'Uruguay' },
    ],
  },
  {
    date: '29/11',
    weekDay: 'Tuesday',
    matches: [
      { hour: '16:00', teamA: 'Netherlands', teamB: 'Qatar' },
      { hour: '16:00', teamA: 'Ecuador', teamB: 'Senegal' },
      { hour: '20:00', teamA: 'Wales', teamB: 'England' },
      { hour: '20:00', teamA: 'Iran', teamB: 'United States' },
    ],
  },
  {
    date: '30/11',
    weekDay: 'Wednesday',
    matches: [
      { hour: '16:00', teamA: 'Tunisia', teamB: 'France' },
      { hour: '16:00', teamA: 'Australia', teamB: 'Denmark' },
      { hour: '20:00', teamA: 'Poland', teamB: 'Argentina' },
      { hour: '20:00', teamA: 'Saudi Arabia', teamB: 'Mexico' },
    ],
  },
  {
    date: '01/12',
    weekDay: 'Thursday',
    matches: [
      { hour: '16:00', teamA: 'Croatia', teamB: 'Belgium' },
      { hour: '16:00', teamA: 'Canada', teamB: 'Morocco' },
      { hour: '20:00', teamA: 'Japan', teamB: 'Spain' },
      { hour: '20:00', teamA: 'Costa Rica', teamB: 'Germany' },
    ],
  },
  {
    date: '02/12',
    weekDay: 'Friday',
    matches: [
      { hour: '16:00', teamA: 'Korea Republic', teamB: 'Portugal' },
      { hour: '16:00', teamA: 'Ghana', teamB: 'Uruguay' },
      { hour: '20:00', teamA: 'Cameroon', teamB: 'Brazil' },
      { hour: '20:00', teamA: 'Serbia', teamB: 'Switzerland' },
    ],
  },
]

function changeTheme(theme) {
  document.querySelector('body').className = theme
}

function createMatch(teamA, hour, teamB) {
  return `<li>
              <img src="/assets/teams/${String(teamA)
                .replace(' ', '-')
                .toLowerCase()}.svg" alt="${teamA} flag" title="${teamA}" />
              <time datetime="${hour}">${hour}</time>
              <img src="/assets/teams/${String(teamB)
                .replace(' ', '-')
                .toLowerCase()}.svg" alt="${teamB} flag" title="${teamB}"/>
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

const date = new Date()
const todayDate = `${date.getDate()}/${date.getMonth() + 1}`
const startingDay = '20/11'

let nextMatches = ''
if (todayDate === startingDay) {
  //nextMatches = matchesList.map((match) => match.date === todayDate)
} else {
  matchesList.map((match) => {
    let listDayMatches = ''
    match.matches.map((matchTeams) => {
      listDayMatches += createMatch(
        matchTeams.teamA,
        matchTeams.hour,
        matchTeams.teamB,
      )
    })
    document.querySelector('#card').innerHTML += createCard(
      match.date,
      match.weekDay,
      listDayMatches,
    )
  })
}

nextMatches.to
