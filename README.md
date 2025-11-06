# VyomGarud

A modern, responsive landing page for **VyomGarud** — a UAV and drone systems company focused on military-grade reliability and advanced autonomous technology.
Built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**, this single-page website emphasizes **precision engineering, confidence, and futuristic design**.

---

## 🚀 Overview

VyomGarud develops cutting-edge UAV systems with an emphasis on **robust performance**, **mission reliability**, and **AI-driven autonomy**.
This landing page is designed to reflect the brand’s professional and high-tech identity through a clean, dark, and confident interface.

---

## 🧩 Features

* Fully responsive, mobile-first layout
* Clean dark-themed design with accent orange `#ff7b00`
* Smooth animations using **Framer Motion**
* Modular, reusable React components
* Tailwind CSS for modern, efficient styling
* Optimized build via **Vite**

---

## 🏗️ Tech Stack

| Tool                             | Purpose                           |
| -------------------------------- | --------------------------------- |
| **React (Vite)**                 | Frontend framework + fast bundler |
| **Tailwind CSS**                 | Utility-first responsive styling  |
| **Framer Motion**                | Animations and transitions        |
| **Lucide React**                 | Lightweight icons                 |
| **Poppins / Inter / Montserrat** | Typography                        |

---

## ⚙️ Setup Instructions

### 1. Create React + Vite project

```bash
npm create vite@latest vyomgarud-landing --template react
cd vyomgarud-landing
```

### 2. Install dependencies

```bash
npm install
```

### 3. Tailwind CSS basic setup

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then add this inside your `tailwind.config.js`:

```js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
```

And include Tailwind in your main CSS (e.g., `src/index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Install animations and icons

```bash
npm install framer-motion lucide-react
```

### 5. Run project

```bash
npm run dev
```

Open the local URL shown in terminal (usually [http://localhost:5173](http://localhost:5173)).

---

## 🎨 Design Notes

* **Theme:** Dark, modern, slightly military aesthetic
* **Primary Colors:**

  * Charcoal: `#0d0d0d`
  * White: `#ffffff`
  * Accent Orange: `#ff7b00`
* **Fonts:** Poppins / Inter / Montserrat
* **Icons:** Lucide React
* **Animation:** Framer Motion for section transitions and hover effects

---

## 🖼️ Screenshots

*Add your screenshots or GIFs here (around 4–5). Example layout below:*

| Screenshot                                      |
| ------------------------------------------------|
| ![Hero](https://github.com/akashondev/vyomgarud-landingpage/blob/1682d6e236fcbe2d0c8067be95717612e535ed8d/Screenshot%202025-11-06%20220044.png)                 |
| ![About](https://github.com/akashondev/vyomgarud-landingpage/blob/1682d6e236fcbe2d0c8067be95717612e535ed8d/Screenshot%202025-11-06%20220103.png)               |
| ![Capabilities](https://github.com/akashondev/vyomgarud-landingpage/blob/1682d6e236fcbe2d0c8067be95717612e535ed8d/Screenshot%202025-11-06%20220130.png) |
| ![Contact](https://github.com/akashondev/vyomgarud-landingpage/blob/1682d6e236fcbe2d0c8067be95717612e535ed8d/Screenshot%202025-11-06%20220209.png)           |
| ![image](https://github.com/akashondev/vyomgarud-landingpage/blob/b9019036caeffd95aa756f6d537ca90fe2dd986d/Screenshot%202025-11-06%20220231.png)           |

---

## 📄 License

This project is open for educational or demo purposes.
© 2025 VyomGarud. All rights reserved.
