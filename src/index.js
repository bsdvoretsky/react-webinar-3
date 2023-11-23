import React from "react";
import { createRoot } from "react-dom/client";
import { createElement } from "./utils.js";
import App from "./app.js";
import Store from "./store.js";

const store = new Store({
  list: [
    { code: 1, title: "Название элемента", timesSelected: 0 },
    { code: 2, title: "Некий объект", timesSelected: 0 },
    { code: 3, title: "Заголовок", timesSelected: 0 },
    {
      code: 4,
      title: "Очень длинное название элемента из семи слов",
      timesSelected: 0,
    },
    { code: 5, title: "Запись", timesSelected: 0 },
    { code: 6, title: "Шестая запись", timesSelected: 0 },
    { code: 7, title: "Седьмая запись", timesSelected: 0 },
  ],
});

const root = createRoot(document.getElementById("root"));

store.subscribe(() => {
  root.render(<App store={store} />);
});

// Первый рендер приложения
root.render(<App store={store} />);
