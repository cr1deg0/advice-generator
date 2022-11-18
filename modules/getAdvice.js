async function getAdvice(url) {

  const response = await fetch(url);
  if (!response.ok) {
    throw Error(response.status);
  }
  const data = await response.json();
  return data;
}

export default getAdvice;