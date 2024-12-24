const getResource = async (url) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, recieved ${response.status}`);
  }

  return await response.json();
};

const getSearchId = async () => {
  const result = await getResource('https://aviasales-test-api.kata.academy/search');

  return result;
};

const getTickets = async () => {
  const searchId = await getSearchId()
    .then((result) => result.searchId)
    .catch((error) => {
      console.error(error);
      throw new Error(`Could not fetch searchId`);
    });

  const result = await getResource(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

  return result;
};

export default getTickets;
