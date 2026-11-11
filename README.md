# Dardasha — Real-Time Chat & Language Exchange

A full-stack React application for messaging, video calls, meeting new people and practicing languages.

[**Live demo**](https://dardasha-real-time-chat-frontend.vercel.app/) · [**Frontend repository**](https://github.com/a-basuony/Dardasha_real_time_chat_frontend) · [**Backend API**](https://github.com/a-basuony/Dardasha_real_time_chat_backend) · [**Report a bug**](https://github.com/a-basuony/Dardasha_real_time_chat_frontend/issues)

![Dardasha conversation interface](https://github.com/user-attachments/assets/8ffd06cd-56fd-42ca-b4dd-abbeff5fc296)

## What it does

- Real-time messaging through Stream Chat
- Video calling through Stream Video React SDK
- Signup, login and onboarding with a separate Express API
- Friend requests and recommendations
- Responsive layouts and multiple DaisyUI themes
- Client-side routing, data fetching with TanStack Query, and Zustand state

## Technology

| Area | Libraries |
| --- | --- |
| Frontend | React 19, Vite 6, JavaScript |
| Navigation | React Router 7 |
| Styles | Tailwind CSS 3, DaisyUI 4 |
| Data and state | Axios, TanStack Query 5, Zustand 5 |
| Messaging / calls | Stream Chat, Stream Video React SDK |
| Backend | [Node.js / Express / MongoDB service](https://github.com/a-basuony/Dardasha_real_time_chat_backend) |

## Run locally

**Prerequisites:** Node.js and npm, a MongoDB database, and Stream Chat application credentials. The frontend relies on the backend for authentication and Stream tokens.

### 1. Start the backend

```bash
git clone https://github.com/a-basuony/Dardasha_real_time_chat_backend.git
cd Dardasha_real_time_chat_backend
npm ci
cp .env.example .env
```

Edit the backend `.env` with your *own* MongoDB connection string, Stream credentials, and a long random JWT secret. Keep `.env` private. The backend currently reads `STEAM_API_KEY` and `STEAM_API_SECRET` (legacy spelling); match those variable names until the implementation changes.

```bash
npm run dev
```

The backend defaults to port `5001` when configured with `PORT=5001`.

### 2. Start the frontend

Open a second terminal:

```bash
git clone https://github.com/a-basuony/Dardasha_real_time_chat_frontend.git
cd Dardasha_real_time_chat_frontend
npm ci
cp .env.example .env
```

Set the **public Stream API key** in the frontend `.env`:

```dotenv
VITE_STREAM_API_KEY=your_stream_api_key
```

Never put the Stream **API secret**, MongoDB password or JWT secret into a `VITE_` variable: Vite exposes such variables to the browser.

```bash
npm run dev
```

Open the local address printed by Vite (typically [http://localhost:5173](http://localhost:5173)). In development, `src/lib/axios.js` sends requests to `http://localhost:5001/api`; run the backend on that port. In production, this repository currently uses the published backend API URL from the same file.

## Screenshots

![Dardasha screen](https://github.com/user-attachments/assets/69b1b306-7074-4d1a-a168-07cd5d6f798c)
![Dardasha screen](https://github.com/user-attachments/assets/7443c4f4-6fdc-4dac-922e-e798536fdc3d)

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Vite development server |
| `npm run build` | Build the frontend |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint checks |

## Project layout

```text
src/
├── components/    Shared components (navbar, sidebar, chat, friends)
├── pages/         Routes for chat, calls, login and onboarding
├── hooks/         React hooks
├── lib/           API client and helpers
├── store/         Zustand state
├── constants/     Theme and other constants
├── App.jsx        App entry and routes
└── main.jsx       Browser entry point
```

## Common setup problems

- **Unable to sign in:** Confirm the backend is running at `http://localhost:5001` and that its database connection works.
- **Chat/token problems:** Make sure Stream application keys match between the backend and frontend.
- **CORS or cookie issues:** The backend uses credentialed requests; check its origin configuration and the browser's cookie rules for your local/deployed origins.
- **Changes to `.env` not reflected:** Restart Vite and the backend.

## Contributions

Bug reports with reproduction steps and focused pull requests are welcome. Please include what you tested and do not submit real credentials, tokens or user data.

## License

This frontend repository does not currently contain a `LICENSE` file. Public visibility alone does not grant reuse or redistribution rights; contact the owner for licensing details.

---

If the project was useful, a GitHub star helps other developers discover it.
