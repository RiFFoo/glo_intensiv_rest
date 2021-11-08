const renderItems = (data) => {
    data.forEach((item, i) => {
        console.log(i, item);
    });
}

fetch('./db/partners.json')
    .then((Response) => Response.json())
    .then((data) => {
        renderItems(data);
    })
    .catch((error) => {
        console.log(error);
    })