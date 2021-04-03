//Random Astrology messages based on the users DOB 

// List of Astrology Signs
const astrologySigns = [
    {Aries: 'March 21 - April 19'},
    {Taurus: 'April 20 – May 20'},
    {Gemini: 'May 21 – June 21'},
    {Cancer: 'June 22 – July 22'},
    {Leo: 'July 23 – August 22'},
    {Virgo: 'August 23 – September 22'},
    {Libra: 'September 23 – October 23'},
    {Scorpio: 'October 24 – November 21'},
    {Saggittarius: 'November 22–December 21'},
    {Caoricorn: 'December 22–January 19'},
    {Aquarius: 'December 22–January 19'},
    {Pices: 'February 19–March 20'}
];

// Different horoscopes
const horoscopes = ['will have no mood, nothingness', 'will always be TRIGGERED!!', 'will be BORED', 'will be tired', 
'will not give a fuck', 'will have random mood swings','will be successful', 'will be motivated', 
'will meet their goals','will love someone', 'will find new opportunities'];

const time = ['day', 'week', 'month', 'year', 'decade'];

const randomAstrology = () => {
    let randomAstro = astrologySigns[Math.floor(Math.random() * 12)];
    let sign = Object.keys(randomAstro);
    let randomHoro = horoscopes[Math.floor(Math.random() * 11)];
    let randomTime = time[Math.floor(Math.random() * 5)];
    return `The ${sign} astrology sign is born between ${randomAstro[sign]}. For the ${randomTime}, they ${randomHoro}.`;
}    



console.log(randomAstrology());
