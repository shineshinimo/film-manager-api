# 🎬 Film Manager API

A simple film management web app that allows users to add, delete, and filter movies using an external API.  
This project demonstrates working with `fetch`, asynchronous JavaScript, and form validation using **JustValidate**.

---

## 🚀 Features

- Add new films with title, genre, release year, and "watched" status  
- Delete individual films or clear the entire list  
- Filter films by:
  - Title  
  - Genre  
  - Release year  
  - Watched status (via select)  
- Real-time updates after each operation  
- Form validation powered by **JustValidate**  
- Clean, minimalistic interface

---

## 🧠 Technologies Used

- **HTML5**  
- **CSS3**  
- **JavaScript (ES6+)**  
- **Fetch API** for server communication  
- **Asynchronous functions** (`async/await`)  
- **[JustValidate](https://just-validate.dev/)** for client-side form validation

---


## 📖 How to Use

1. Clone this repository:
   ```bash
   git clone https://github.com/shineshinimo/film-manager-api.git
   ```
2. Open the project in **VS Code**.  
3. Install and run the **Live Server extension** (or any local server).  
4. Open `index.html` in the browser via Live Server.  
5. Start managing your movie collection:
   - Fill in the form and click **Add**  
   - Click **Edit** to modify movie details  
   - Click **Delete** to remove a movie  
   - Use the **Sort** dropdown to organize the list  

---

## ⚙️ How It Works

1. The app fetches film data from the API:  
   ```
   GET https://sb-film.skillbox.cc/films
   ```
2. Users can add new films, which are sent to the server using:  
   ```
   POST https://sb-film.skillbox.cc/films
   ```
3. Each film can be deleted individually:  
   ```
   DELETE https://sb-film.skillbox.cc/films/:id
   ```
4. The **Delete all** button clears all films from the server:  
   ```
   DELETE https://sb-film.skillbox.cc/films
   ```

All requests include a user email in the headers for identification.

---

## 🧩 Error Handling

If the API returns an error, the app displays a clear error message with its status and description.  
For example:  
```
Error 400: A film with the same name and release year already exists in the API
```

---

## 📂 Project Structure

```
film-manager-api/
│
├── index.html       # Main page
├── styles.css       # Basic styling
├── script.js        # Main app logic
└── README.md        # Project description
```

---

## 🧪 Example Use

1. Fill in the form with film details.  
2. The form is validated using **JustValidate** before submission.  
3. Click **Submit** — the film will appear in the table.  
4. Use filters or select to find specific films.  
5. Delete one or all films easily.

---

## 📸 Preview

Currently in progress...

---

## 🔗 Related Projects

- [🎞 Film Manager (LocalStorage version)](https://github.com/shineshinimo/film-manager-ls) —  
  earlier version of the same project working fully offline using `localStorage`.
