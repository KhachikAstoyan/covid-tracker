import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeangleURL = url;

  if (country) {
    changeangleURL = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeangleURL);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
}

export const fetchDailyData = async () => {
  try {
    let { data } = await axios.get(`${url}/daily`);
    data = data.slice(-60);

    const modifiedData = data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
}

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map(country => country.name);
  } catch (error) {
    console.log(error);
  }
}