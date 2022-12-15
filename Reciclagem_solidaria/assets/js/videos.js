fetch('https://backend-trabalho-faculdade.herokuapp.com/getVideos', {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
})
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Could not reach the API: " + response.statusText);
        }
    }).then((data) => {
        if (data.videos.length) {
            data.videos.map((video) => {
                document.getElementById("videos").innerHTML += `
                <div class="one">
                <div class="video-title">${video.titulo}</div>
                <div class="video-wrapper">
                  <iframe width="320" height="240" src="https://www.youtube.com/embed/${video.link}"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
              </div>`;
            })
        } else {
            document.getElementById("videos").innerHTML +=
                `<div>
            <h5>Nenhum vídeo cadastrado</h5>
            </div>`;
        }
        console.log(`testae? `, data)
    }).catch((error) => {
    });