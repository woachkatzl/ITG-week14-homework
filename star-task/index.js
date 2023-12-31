// VARIABLES
const directorsInfo = [
    {
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
    },
    {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
    },
    {
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    },
];

const topFilmsList = directorsInfo.map(director => director.top_rated_film);

// PAGE ELEMENTS
const list = document.querySelector(".directors-list");
const filmsTitle = document.querySelector(".films-title");

// FUNCTIONS
const newDirectorInfo = (director) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start");
    list.append(listItem);

    const directorInfoContainer = document.createElement("div");
    directorInfoContainer.classList.add("ms-2", "me-auto");
    listItem.append(directorInfoContainer);

    const directorName = document.createElement("h4");
    directorName.textContent = director.name;
    directorInfoContainer.append(directorName);

    const directorCareer = document.createElement("p");
    directorCareer.textContent = director.career;
    directorInfoContainer.append(directorCareer);

    const directorFilms = document.createElement("a");
    directorFilms.textContent = "Фильмография";
    directorFilms.setAttribute("href", director.films);
    listItem.append(directorFilms);
};

const addBestFilms = () => {
    const filmsElement = document.createElement("p");
    const filmsString = topFilmsList.join(", ");
    filmsElement.textContent = filmsString;
    filmsTitle.after(filmsElement);
};

const addInfo = () => {
    directorsInfo.forEach(newDirectorInfo);
    addBestFilms();
};

// EVENT LISTENERS
window.addEventListener("DOMContentLoaded", addInfo);