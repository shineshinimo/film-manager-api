let filmsLocalArr = [];

function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const genre = document.querySelector("#genre").value;
  const releaseYear = Number(document.querySelector("#releaseYear").value);
  const isWatched = document.querySelector("#isWatched").checked;

  const film = {
    title,
    genre,
    releaseYear,
    isWatched
  };

  addFilm(film);

  e.target.reset();
}

async function addFilm(film) {
  try {
    const response = await fetch("https://sb-film.skillbox.cc/films", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        email: "ovikdevil@gmail.com",
      },
      body: JSON.stringify(film),
    });

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Error ${response.status}: ${errorData.error}`)
    }

    renderTable();
  } catch (error) {
    showError(error.message);
  }
}

function showError(message) {
  const errorBox = document.createElement('div');
  errorBox.className = 'error-box';
  errorBox.textContent = message;

  document.body.appendChild(errorBox);

  setTimeout(() => {
    errorBox.remove();
  }, 3000);
}


async function deleteFilm(index) {
  await fetch(`https://sb-film.skillbox.cc/films/${index}`, {
    method: 'DELETE',
    headers: {
      email: 'ovikdevil@gmail.com',
    }
  })

  renderTable();
}

async function deleteAllFilms() {
  await fetch('https://sb-film.skillbox.cc/films', {
    method: 'DELETE',
    headers: {
      email: 'ovikdevil@gmail.com'
    }
  })

  renderTable();
}

async function renderTable() {
  const filmsResponse = await fetch("https://sb-film.skillbox.cc/films", {
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });

  data = await filmsResponse.json();
  filmsLocalArr = data;

  renderFilms(filmsLocalArr);
}

function renderFilms(arr) {
  const filmTableBody = document.querySelector('#film-tbody');

  filmTableBody.innerHTML = '';

  arr.forEach((film) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Yes" : "No"}</td>
      <td>
        <button class="delete-btn" onclick="deleteFilm(${film.id})">Delete</button>
      </td>
    `;

    filmTableBody.appendChild(row);
  });
}

function filterAll() {
  const title = document.querySelector('#filter-title').value.toLowerCase().trim();
  const genre = document.querySelector('#filter-genre').value.toLowerCase().trim();
  const year = document.querySelector('#filter-year').value.toLowerCase().trim();
  const watchedValue = document.querySelector('#filter-select').value;

  const filtered = filmsLocalArr.filter(film => {
    const matchesTitle = !title || film.title.toLowerCase().includes(title);
    const matchesGenre = !genre || film.genre.toLowerCase().includes(genre);
    const matchesYear = !year || String(film.releaseYear).includes(year);
    const matchesWatched =
      !watchedValue || film.isWatched === (watchedValue === "true");

    return matchesTitle && matchesGenre && matchesYear && matchesWatched;
  });

  renderFilms(filtered);
}

const validate = new JustValidate('#film-form');

validate.addField('#title', [
  {
    rule: 'required',
    errorMessage: 'Name is required!',
  },
]);

validate.addField('#genre', [
  {
    rule: 'required',
    errorMessage: 'Genre is required!',
  },
]);

validate.addField('#releaseYear', [
  {
    rule: 'required',
    errorMessage: 'Release year is required!',
  },
  {
    rule: 'number',
    errorMessage: 'Release year must be a number!'
  }
]);

validate.onSuccess(() => {
  document
    .querySelector('#film-form')
    .addEventListener("submit", handleFormSubmit);
})

document.querySelector('.film-delete-all').addEventListener('click', deleteAllFilms)
document.querySelector('#filter-title').addEventListener('input', filterAll);
document.querySelector('#filter-genre').addEventListener('input', filterAll);
document.querySelector('#filter-year').addEventListener('input', filterAll);
document.querySelector('#filter-select').addEventListener('change', filterAll);


renderTable();