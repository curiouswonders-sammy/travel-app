const cityData = [
  {
    name: 'Tokyo, Japan',
    tagline: 'Neon lights, peaceful gardens, and noodle adventures.',
    description:
      'Tokyo mixes super tall buildings, bright game arcades, quiet shrines, and tasty snacks all in one huge city.',
    weather: { emoji: '☀️', celsius: 24, text: 'Sunny' },
    facts: [
      'Tokyo has more people than many whole countries.',
      'You can find tiny ramen shops and giant robot displays in the same city.',
      'Cherry blossom season turns many parks pink in spring.'
    ],
    art: {
      skyTop: '#60a5fa', skyBottom: '#c4b5fd', groundTop: '#312e81', groundBottom: '#1e1b4b',
      sunX: '80%', sunY: '20%', sunColor: 'rgba(253,224,71,.95)',
      shapeOne: 'rgba(219,39,119,.35)', shapeTwo: 'rgba(30,41,59,.4)', shapeThree: 'rgba(15,23,42,.45)',
      detailLayer: 'linear-gradient(135deg, #0f172a 0 24%, #4f46e5 24% 46%, #e879f9 46% 54%, #1e293b 54% 76%, #94a3b8 76% 100%)'
    },
    hotel: 'https://www.booking.com/city/jp/tokyo.html',
    flight: 'https://www.google.com/travel/flights',
    car: 'https://www.kayak.com/cars/Tokyo,Japan-c21033',
    levels: [
      'Try sushi, visit a garden, and look for a cool toy shop.',
      'Learn how trains help millions of people move fast every day.',
      'Discover why Tokyo has both old temples and futuristic neighborhoods.',
      'Explore how anime, technology, and food help shape the city’s culture.'
    ]
  },
  {
    name: 'Paris, France',
    tagline: 'Sparkly towers, yummy pastries, and river boat rides.',
    description:
      'Paris is full of art, famous buildings, pretty bridges, and bakeries that smell like warm butter and sugar.',
    weather: { emoji: '⛅', celsius: 19, text: 'Partly cloudy' },
    facts: [
      'The Eiffel Tower can sparkle with lights at night.',
      'The Louvre is one of the biggest art museums in the world.',
      'People love picnics near the Seine River.'
    ],
    art: {
      skyTop: '#93c5fd', skyBottom: '#fef3c7', groundTop: '#fca5a5', groundBottom: '#7c2d12',
      sunX: '72%', sunY: '22%', sunColor: 'rgba(255,255,255,.85)',
      shapeOne: 'rgba(190,24,93,.25)', shapeTwo: 'rgba(251,146,60,.28)', shapeThree: 'rgba(120,53,15,.32)',
      detailLayer: 'linear-gradient(135deg, #78350f 0 18%, #f59e0b 18% 34%, #fef3c7 34% 42%, #9a3412 42% 60%, #7c2d12 60% 100%)'
    },
    hotel: 'https://www.booking.com/city/fr/paris.html',
    flight: 'https://www.google.com/travel/flights',
    car: 'https://www.kayak.com/cars/Paris,France-c36014',
    levels: [
      'Start with the Eiffel Tower, croissants, and a river walk.',
      'Learn about famous painters and the giant museums in Paris.',
      'Find out why cafés and fashion are a big part of the city.',
      'Explore French history through castles, art, and old neighborhoods.'
    ]
  },
  {
    name: 'New York City, USA',
    tagline: 'Big buildings, giant parks, yellow taxis, and Broadway lights.',
    description:
      'New York City feels busy and exciting with towering skyscrapers, giant slices of pizza, and parks tucked between streets.',
    weather: { emoji: '🌦️', celsius: 21, text: 'Rainy sunshine' },
    facts: [
      'Central Park is a huge park in the middle of the city.',
      'Times Square shines with giant screens and bright lights.',
      'People speak many languages in New York City.'
    ],
    art: {
      skyTop: '#38bdf8', skyBottom: '#dbeafe', groundTop: '#f97316', groundBottom: '#1e293b',
      sunX: '18%', sunY: '18%', sunColor: 'rgba(255,255,255,.85)',
      shapeOne: 'rgba(249,115,22,.3)', shapeTwo: 'rgba(30,41,59,.42)', shapeThree: 'rgba(15,23,42,.48)',
      detailLayer: 'linear-gradient(135deg, #111827 0 18%, #1d4ed8 18% 34%, #facc15 34% 42%, #374151 42% 74%, #9ca3af 74% 100%)'
    },
    hotel: 'https://www.booking.com/city/us/new-york.html',
    flight: 'https://www.google.com/travel/flights',
    car: 'https://www.kayak.com/cars/New-York,NY,United-States-c15830',
    levels: [
      'See a show, eat pizza, and wave at the Statue of Liberty from the water.',
      'Learn how many neighborhoods make the city feel like lots of mini-cities.',
      'Understand why immigrants helped shape New York’s food and culture.',
      'Dive into stories about finance, arts, architecture, and city history.'
    ]
  },
  {
    name: 'Cairo, Egypt',
    tagline: 'Golden deserts, mighty pyramids, and the Nile River.',
    description:
      'Cairo is a giant city where ancient history, buzzing markets, and river boats all meet together.',
    weather: { emoji: '🌞', celsius: 30, text: 'Hot and sunny' },
    facts: [
      'The pyramids near Cairo are some of the most famous structures on Earth.',
      'The Nile River helped ancient civilizations grow and thrive.',
      'Markets can be filled with spices, lanterns, and handmade treasures.'
    ],
    art: {
      skyTop: '#fbbf24', skyBottom: '#fde68a', groundTop: '#f59e0b', groundBottom: '#78350f',
      sunX: '80%', sunY: '16%', sunColor: 'rgba(255,237,213,.95)',
      shapeOne: 'rgba(217,119,6,.34)', shapeTwo: 'rgba(146,64,14,.4)', shapeThree: 'rgba(120,53,15,.46)',
      detailLayer: 'linear-gradient(135deg, #78350f 0 18%, #d97706 18% 42%, #fde68a 42% 50%, #92400e 50% 74%, #451a03 74% 100%)'
    },
    hotel: 'https://www.booking.com/city/eg/cairo.html',
    flight: 'https://www.google.com/travel/flights',
    car: 'https://www.kayak.com/cars/Cairo,Egypt-c9087',
    levels: [
      'Start with pyramids, camels, and a boat ride on the Nile.',
      'Learn how ancient Egyptians built monuments that still amaze people.',
      'Discover why Cairo became an important city for trade and learning.',
      'Study how old history and modern city life blend together today.'
    ]
  },
  {
    name: 'Rio de Janeiro, Brazil',
    tagline: 'Sunny beaches, giant mountains, and music everywhere.',
    description:
      'Rio is bright and colorful with famous beaches, soccer excitement, and mountains reaching up over the sea.',
    weather: { emoji: '🌴', celsius: 28, text: 'Warm beach day' },
    facts: [
      'The Christ the Redeemer statue looks over the city from a mountain.',
      'Copacabana is one of the world’s most famous beaches.',
      'Carnival brings giant parades, costumes, and music.'
    ],
    art: {
      skyTop: '#22c55e', skyBottom: '#86efac', groundTop: '#0f766e', groundBottom: '#164e63',
      sunX: '76%', sunY: '18%', sunColor: 'rgba(254,249,195,.95)',
      shapeOne: 'rgba(21,128,61,.34)', shapeTwo: 'rgba(8,145,178,.34)', shapeThree: 'rgba(22,78,99,.44)',
      detailLayer: 'linear-gradient(135deg, #14532d 0 22%, #16a34a 22% 42%, #fef08a 42% 50%, #0f766e 50% 74%, #164e63 74% 100%)'
    },
    hotel: 'https://www.booking.com/city/br/rio-de-janeiro.html',
    flight: 'https://www.google.com/travel/flights',
    car: 'https://www.kayak.com/cars/Rio-de-Janeiro,Brazil-c24146',
    levels: [
      'Visit the beach, hear samba music, and ride up a mountain.',
      'Learn why soccer and Carnival are so important in Rio.',
      'Discover how mountains, forests, and beaches meet in one city.',
      'Explore the culture, history, and neighborhoods that make Rio shine.'
    ]
  }
];

const levelInfo = [
  { title: 'Level 1: Starter Scout', copy: 'You just landed. You get simple weather, one city story, and starter travel ideas.' },
  { title: 'Level 2: Globe Hopper', copy: 'After 2 months, you unlock deeper stories and better ideas for what to do there.' },
  { title: 'Level 3: City Superfan', copy: 'After 4 months, you unlock culture facts and smarter travel planning tips.' },
  { title: 'Level 4: Travel Star', copy: 'After 6 months, you unlock history, landmarks, and extra city secrets.' },
  { title: 'Level 5: Planet Pro', copy: 'After 8 months or more, you unlock the best version with the richest place facts.' }
];

const citySelect = document.getElementById('city-select');
const cityName = document.getElementById('city-name');
const cityTagline = document.getElementById('city-tagline');
const cityDescription = document.getElementById('city-description');
const weatherEmoji = document.getElementById('weather-emoji');
const weatherText = document.getElementById('weather-text');
const cityArt = document.getElementById('city-art');
const hotelLink = document.getElementById('hotel-link');
const flightLink = document.getElementById('flight-link');
const carLink = document.getElementById('car-link');
const monthsUsed = document.getElementById('months-used');
const monthsValue = document.getElementById('months-value');
const levelTitle = document.getElementById('level-title');
const levelCopy = document.getElementById('level-copy');
const levelFacts = document.getElementById('level-facts');
const signupForm = document.getElementById('signup-form');
const signupMessage = document.getElementById('signup-message');
const openSignup = document.getElementById('open-signup');
const nextLevelButton = document.getElementById('next-level-button');
const signupCard = document.getElementById('signup-card');
const earthButton = document.getElementById('earth-button');
const factsDialog = document.getElementById('facts-dialog');
const closeDialog = document.getElementById('close-dialog');
const factsCityName = document.getElementById('facts-city-name');
const factsList = document.getElementById('facts-list');
const tempUnit = document.getElementById('temp-unit');

let currentCity = cityData[0];

function getLevelIndex() {
  return Math.min(Math.floor(Number(monthsUsed.value) / 2), levelInfo.length - 1);
}

function formatTemperature(tempC) {
  const selectedUnit = tempUnit.value || 'C';
  if (selectedUnit === 'F') {
    const tempF = Math.round((tempC * 9) / 5 + 32);
    return `${tempF}°F`;
  }
  return `${tempC}°C`;
}

function renderLevelDetails() {
  const levelIndex = getLevelIndex();
  const info = levelInfo[levelIndex];
  levelTitle.textContent = info.title;
  levelCopy.textContent = info.copy;
  levelFacts.innerHTML = currentCity.levels
    .slice(0, Math.min(levelIndex + 1, currentCity.levels.length))
    .map((fact) => `<li>${fact}</li>`)
    .join('');
  monthsValue.textContent = monthsUsed.value;
}

function paintCityArt(art) {
  cityArt.style.setProperty('--sky-top', art.skyTop);
  cityArt.style.setProperty('--sky-bottom', art.skyBottom);
  cityArt.style.setProperty('--ground-top', art.groundTop);
  cityArt.style.setProperty('--ground-bottom', art.groundBottom);
  cityArt.style.setProperty('--sun-x', art.sunX);
  cityArt.style.setProperty('--sun-y', art.sunY);
  cityArt.style.setProperty('--sun-color', art.sunColor);
  cityArt.style.setProperty('--shape-one', art.shapeOne);
  cityArt.style.setProperty('--shape-two', art.shapeTwo);
  cityArt.style.setProperty('--shape-three', art.shapeThree);
  cityArt.style.setProperty('--detail-layer', art.detailLayer);
}

function renderCity(cityNameValue) {
  currentCity = cityData.find((city) => city.name === cityNameValue) || cityData[0];
  cityName.textContent = currentCity.name;
  cityTagline.textContent = currentCity.tagline;
  cityDescription.textContent = currentCity.description;
  weatherEmoji.textContent = currentCity.weather.emoji;
  weatherText.textContent = `${currentCity.weather.text} ${formatTemperature(currentCity.weather.celsius)}`;
  paintCityArt(currentCity.art);
  hotelLink.href = currentCity.hotel;
  flightLink.href = currentCity.flight;
  carLink.href = currentCity.car;
  factsCityName.textContent = currentCity.name;
  factsList.innerHTML = currentCity.facts.map((fact) => `<li>${fact}</li>`).join('');
  renderLevelDetails();
}

cityData.forEach((city) => {
  const option = document.createElement('option');
  option.value = city.name;
  option.textContent = city.name;
  citySelect.appendChild(option);
});

citySelect.addEventListener('change', (event) => renderCity(event.target.value));
monthsUsed.addEventListener('input', renderLevelDetails);
tempUnit.addEventListener('change', () => renderCity(citySelect.value));

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const region = document.getElementById('time-region').value;
  const unit = tempUnit.value;

  signupMessage.textContent = `Awesome, ${firstName} ${lastName}! You are a ${region.toLowerCase()} using ${unit === 'F' ? 'Fahrenheit' : 'Celsius'}.`;
  renderCity(citySelect.value);
});

openSignup.addEventListener('click', () => signupCard.scrollIntoView({ behavior: 'smooth' }));
nextLevelButton.addEventListener('click', () => {
  const nextValue = Math.min(Number(monthsUsed.value) + 2, Number(monthsUsed.max));
  monthsUsed.value = String(nextValue);
  renderLevelDetails();
  document.querySelector('.level-panel').scrollIntoView({ behavior: 'smooth' });
});

earthButton.addEventListener('click', () => factsDialog.showModal());
closeDialog.addEventListener('click', () => factsDialog.close());

renderCity(cityData[0].name);
