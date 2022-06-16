const API_APPID = process.env.REACT_APP_API_KEY_APPID;
const API_UNPSLASH = process.env.REACT_APP_API_KEY_UNSPLASH;

const API_URL = "https://api.openweathermap.org/data/3.0/weather";
// "https://api.openweathermap.org/data/3.0/onecall"

const DEFAULT_URL = `${API_URL}/?APPID=${API_APPID}&lat=43.7425966&lon=-79.5715712`;
const APP_URL = `${API_URL}?APPID=${API_APPID}`;

const GET_NEXT_DAYS_HOURS = ``;

export {
    API_URL,
    API_APPID,
    DEFAULT_URL,
    APP_URL,
    GET_NEXT_DAYS_HOURS
}