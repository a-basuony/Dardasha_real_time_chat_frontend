# Real-Time Chat Application Frontend

Real-Time Chat App Backend : https://github.com/a-basuony/Dardasha_real_time_chat_backend

A modern, feature-rich real-time chat application built with React, Vite, and Stream Chat SDK. This frontend provides a seamless messaging experience with video calling capabilities, user authentication, and a beautiful responsive UI.

## 🚀 Features

- **Real-time Messaging**: Powered by Stream Chat SDK for instant messaging
- **Video Calling**: Integrated video calls using Stream Video SDK
- **User Authentication**: Secure login and signup system
- **Dark/Light Themes**: Multiple theme options with DaisyUI
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Friend System**: Add and manage friends
- **Notifications**: Real-time notification system
- **Onboarding Flow**: Smooth user onboarding experience
- **Modern UI**: Clean and intuitive interface with Lucide React icons

## 🛠️ Tech Stack

### Core Technologies
- **React 19** - Modern React with latest features
- **Vite 6** - Fast build tool and development server
- **React Router 7** - Client-side routing
- **TypeScript Support** - Type safety with React types

### UI & Styling
- **Tailwind CSS 3** - Utility-first CSS framework
- **DaisyUI 4** - Component library built on Tailwind
- **Lucide React** - Beautiful icon set
- **PostCSS** - CSS processing

### State Management & Data Fetching
- **Zustand** - Lightweight state management
- **TanStack Query** - Server state management and caching
- **Axios** - HTTP client for API requests

### Chat & Video
- **Stream Chat** - Real-time messaging infrastructure
- **Stream Chat React** - React components for Stream Chat
- **Stream Video React SDK** - Video calling capabilities

### Development Tools
- **ESLint** - Code linting and formatting
- **React Hot Toast** - Beautiful toast notifications

<img width="1916" height="927" alt="Screenshot 2026-02-11 101926" src="https://github.com/user-attachments/assets/8ffd06cd-56fd-42ca-b4dd-abbeff5fc296" />

- <img width="1917" height="982" alt="image" src="https://github.com/user-attachments/assets/69b1b306-7074-4d1a-a168-07cd5d6f798c" />
<img width="1880" height="953" alt="image" src="https://github.com/user-attachments/assets/7443c4f4-6fdc-4dac-922e-e798536fdc3d" />



## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your Stream API key:
   ```
   VITE_STREAM_API_KEY=your_stream_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🌐 Environment Variables

Create a `.env` file in the root directory with the following variable:

```env
VITE_STREAM_API_KEY=your_stream_api_key
```

To get your Stream API key:
1. Sign up at [Stream.io](https://getstream.io/)
2. Create a new application
3. Copy your API key from the dashboard

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CallButton.jsx
│   ├── ChatLoader.jsx
│   ├── FriendCard.jsx
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   └── ThemeSelector.jsx
├── pages/              # Page components
│   ├── CallPage.jsx
│   ├── ChatPage.jsx
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── NotificationsPage.jsx
│   ├── OnboardingPage.jsx
│   └── SignUpPage.jsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── store/              # Zustand stores
├── constants/          # Application constants
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## 🎨 Themes

The application supports 29 different themes via DaisyUI:
- Light & Dark modes
- Creative themes: Cyberpunk, Synthwave, Retro
- Professional themes: Corporate, Business, Luxury
- Nature themes: Forest, Garden, Autumn
- And many more!

Themes can be switched using the theme selector in the navigation bar.

## 🔐 Authentication Flow

1. **Unauthenticated users** are redirected to login/signup pages
2. **Authenticated but not onboarded** users see the onboarding flow
3. **Fully authenticated users** can access the main application

## 📱 Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Adaptive layout for different devices

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

The build will be optimized and ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

## 🔗 Related Projects

- **Backend API** - Node.js/Express backend for this application
- **Stream Chat** - Real-time messaging infrastructure
- **Stream Video** - Video calling platform

---

Built with ❤️ using React, Vite, and Stream Chat SDK
