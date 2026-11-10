const params =
    new URLSearchParams(window.location.search);

const category =
    params.get("cat");

fetch(`data/${category}.json`)
.then(response => response.json())
.then(data => {

    document.getElementById("pageTitle")
        .innerText = data.title;

    const container =
        document.getElementById("musicContainer");

    data.tracks.forEach(track => {

        container.innerHTML += `

        <article class="track-card">

            <h2>${track.title}</h2>

            <p class="description">
                ${track.description}
            </p>

            <audio controls>
                <source src="${track.file}"
                        type="audio/mpeg">
            </audio>

            <a class="download-button"
               href="${track.file}"
               download>

                Download MP3

            </a>

        </article>
        `;

    });

});