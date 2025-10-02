# 📝 Notes Tasks Dashboard

A lightweight React practice project for tracking tasks, writing notes, and fetching motivational quotes from an external API. Built with **Vite + React 18** to explore modern React patterns.

## 🚀 Purpose:

This mini project was built to re-emphasize on the following core web dev skills:

- Hooks proper usage, extracting custom hooks & designing an appropriate data fetching hook

- Take advantage of browsers' APIs eg Storage API to store data for persistence during new sessions and Web Crypto API for generating random ids

- Using pure native CSS for custom styling

- Making & styling custom dialogs

- Organized code & project folder structure

- Vite for fast dev build, and ESLint and Prettier for linting/formatting

---

## ✨ Current Features

- Add, toggle, and delete **tasks**
- Add and delete **notes**
- Persist data between sessions with `localStorage`
- Fetch **random quotes** from an external API and turn desired ones into <ins>notes</ins>
- Responsive UI for quick interactions

---

## 🛠️ Setup & Run locally

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/notes-tasks-dashboard.git
cd notes-tasks-dashboard
npm install
npm run dev
```

App will run by default at [http://localhost:5173](http://localhost:5173) (Vite dev server)

---

## 🔮 Future Improvements

- Include theme switching, with **different shades** of dark and light colors
- Improve accessibility (focus management, ARIA roles & attributes)
- Replace simple `localStorage` with indexedDB or a backend API for storage of more complex structured data.
- Use **React Query** for quote fetching & caching
- Add **unit tests** for reducers and hooks
- Convert project to **TypeScript**

---

## 📜 License

MIT License
