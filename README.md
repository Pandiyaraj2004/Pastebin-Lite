# 🚀 Pastebin Lite

**Pastebin Lite** is a lightweight pastebin web application built with modern web technologies.  
It allows users to create and share text pastes with optional expiration and view limits.

🔗 **Live Demo:** https://pastebin‑lite‑gules‑theta.vercel.app/  

📦 **Source Code:** https://github.com/Pandiyaraj2004/Pastebin‑Lite

---

## 🧠 What This Project Does

Pastebin Lite lets users:

- 📝 Create a text paste
- ⏱️ Set a custom **TTL** (time to live, in seconds)
- 👁️ Limit the number of **views**
- 🔗 Get a shareable paste link
- 📱 Works on both **mobile** and **desktop**

There is also a **“Built by Pandiyaraj 🚀” badge** showing credit on the UI.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js (React) |
| Styling | Tailwind CSS |
| Storage | Upstash Redis (Serverless Redis) |
| Deployment | Vercel |

Your app uses **serverless architecture** with Upstash Redis for persistent paste storage and Vercel for deployment.

---

## 📌 Key Features

- Responsive UI with a clean design
- Paste creation with customizable TTL and view limits
- Persistent backend storage via Redis (Upstash)
- Live app deployed on **Vercel**
- Modern stack (React + Next.js + Tailwind)
- Clear credit shown in UI

---

## 🚀 How to Run Locally

### 1. **Clone the repository**
```bash
git clone https://github.com/Pandiyaraj2004/Pastebin‑Lite.git
cd Pastebin‑Lite
````

### 2. **Install dependencies**

```bash
npm install
```

### 3. **Set up environment variables**

Create a file named `.env.local` in the root folder:

```env
UPSTASH_REDIS_REST_URL="your_upstash_redis_url"
UPSTASH_REDIS_REST_TOKEN="your_upstash_redis_token"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
TEST_MODE=1
```

* `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are for Upstash.
* `NEXT_PUBLIC_BASE_URL` is your local host during dev.
* `TEST_MODE=1` ensures real Redis storage (not in‑memory).

---

## 🧪 Run in Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 📌 Deployment on Vercel

1. Push your project to GitHub
2. Import repository in **Vercel**
3. Set environment variables on Vercel dashboard:

   * `UPSTASH_REDIS_REST_URL`
   * `UPSTASH_REDIS_REST_TOKEN`
   * `NEXT_PUBLIC_BASE_URL` (e.g., `https://pastebin‑lite‑gules‑theta.vercel.app`)
   * `TEST_MODE=1`
4. Deploy

Your live paste links will now be persistent and work even after redeploy.

---

## 🏗️ Project Structure

```
Pastebin‑Lite/
├─ app/               # Next.js pages and components
├─ lib/               # Redis / helper logic
├─ public/            # Static assets (images, icons)
├─ app/api/pastes/    # API routes
├─ .env.local         # Environment variables (local only)
├─ package.json       # Dependencies and scripts
└─ README.md          # Project documentation
```

---

## 👨‍💻 About the Author

**Pandiyaraj** — Full Stack Developer

* GitHub: https://github.com/Pandiyaraj2004
* Contact: *pandiyaraja409@gmail.com*

---

## 📈 Future Enhancements

Here are ideas you could add later:

* ✔ Copy‑to‑clipboard button for paste links
* ✔ Syntax highlighting for code pastes
* ✔ Optional login/authentication
* ✔ Public feed of pastes
* ✔ Custom paste titles

---

## 📜 License

MIT License © 2026 Pandiyaraj

```

---

### 📌 Why this README is effective

✅ Starts with a **descriptive title and live demo link**  
✅ Clearly explains **what the project does** and **how it works**  
✅ Lists **tech stack and key features**  
✅ Shows **how to run locally** and also **deploy on Vercel**  
✅ Provides **project structure** — useful for recruiters  
✅ Mentions **future enhancements** — shows initiative  

---

If you want, I can also help you **add screenshots and badges** (like GitHub, Vercel, Redis) to make the README even more visually polished. 👩‍💻💡
::contentReference[oaicite:0]{index=0}
```
