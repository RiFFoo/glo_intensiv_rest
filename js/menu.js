const restourant = 'food-band';

const renderItems = (data) => {
    data.forEach((item, i) => {
        console.log(i, item);
    });
}

fetch(`./db/${restourant}.json`)
    .then((Response) => Response.json())
    .then((data) => {
        renderItems(data);
    })