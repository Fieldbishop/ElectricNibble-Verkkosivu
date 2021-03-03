async function getJson(url) {

    const response = await fetch(url);

    const data = await response.json();
    console.log(data);
    return data;

}