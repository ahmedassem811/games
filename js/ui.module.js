

export class Ui {
    displayData(game) {
        let gameList = ``;
        for (let i = 0; i < game.length; i++) {

            gameList += `
            <div class="col">
                <div data-id="${game[i].id}" class="card h-100 bgDark text-white border-3 border-secondary">
                    <img src=${game[i].thumbnail} class="card-img-top px-3 pt-3" alt="...">
                    <div class="card-body">
                    <div class="crd-header d-flex justify-content-between align-items-baseline">
                        <h5 class="card-title h6">${game[i].title}</h5>
                        <p class="tag bg-success rounded-2 px-3 py-1">Free</p>
                    </div>
                    <p class="card-text">${game[i].short_description}</p>
                    </div>
                     <div class="card-footer px-3 text-white border-3 border-secondary d-flex justify-content-between align-items-center">
                    <p class="tag bg-warning rounded-2 px-3 py-1 m-0">${game[i].genre}</p>
                    <p class="tag-platform bg-danger rounded-2 px-3 py-1 m-0">${game[i].platform}</p>
                    </div>
                </div>
             </div>`;
        }
        document.getElementById('gamesList').innerHTML = gameList
    }



    displayDetails(data) {
        const content = `
                    <div class="gameContent mt-5 pb-5 d-flex">
                        <div class="gameImg me-4">
                        <img src="${data.thumbnail}" alt="" class="w-100 ">
                        </div>
                        <div class="gameDesc w-75">
                            <h3>Title: ${data.title}</h3>
                            <h5>Category: <span class="tag bg-primary rounded-2 px-3 py-1 m-0">${data.genre}</span> </h5>
                            <h5>Platform: <span class="tag bg-danger rounded-2 px-3 py-1 m-0">${data.platform}</span> </h5>
                            <h5>Status: <span class="tag bg-warning rounded-2 px-3 py-1 m-0">${data.status}</span> </h5>
                            <p>${data.description}</p>
                            <a class="btn btn-outline-warning" href="${data.game_url}">Show Game</a>
                        </div>
                    </div>`;

        document.getElementById("detailsContent").innerHTML = content;
    }
}
