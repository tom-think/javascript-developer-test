const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const calls = urls.map(url => httpGet(url));

  const responses = await Promise.all(calls);

  return responses.map(res => {
    if (res.status === 200) {
      return { 'Arnie Quote': JSON.parse(res.body).message }
    }
    return { FAILURE: 'Your request has been terminated' }
  });
};

module.exports = {
  getArnieQuotes,
};
