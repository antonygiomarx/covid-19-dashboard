import axios from 'axios';

const getData = async () => {
  const result = await axios.get('https://api.covid19api.com/summary');

  return result.data;
};
console.log(getData());

export default getData;
