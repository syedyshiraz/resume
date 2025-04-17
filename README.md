# 💼 Personal Resume Website

This is a clean, responsive, and customizable **personal resume website** built using **HTML**, **Tailwind CSS**, and **JavaScript** — perfect for showcasing your skills, projects, and professional profile.

---

## 🌐 Live Demo

👉 [View Live on GitHub Pages](https://syedyshiraz.github.io/resume)

---


## ✨ Features

- ✅ Fully responsive layout
- 🌀 Animated skills carousel
- 🧰 Project portfolio section
- 💼 Timeline-based work experience and education
- 🧠 Clean code structure for easy customization
- 🔗 Icon-based links for LinkedIn, GitHub, and Gmail
- 💻 Deployable via GitHub Pages in seconds

---

## 🛠️ Tech Stack

- HTML5
- Tailwind CSS
- JavaScript
- GitHub Pages (for hosting)

---

## 🚀 Getting Started

### 1. **Fork This Repository**

Click the `Fork` button at the top right of this repository to create your own copy under your GitHub account.

### 2. **Clone Your Fork**

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 3. **Make It Yours**

Update the following:

#### 🔹 `index.html`
- Edit your **name**, **contact details**, and **social links**
- Replace the `<div id="main-content">` content or use `body-content.html` for dynamic loading

#### 🔹 `body-content.html`
- Update your **Summary**, **Work Experience**, **Education**, **Skills**, and **Projects**

#### 🔹 `style.css`
- Modify styles like colors, fonts, or layout spacing if needed

#### 🔹 `/assets/`
- Replace `resume.jpeg` with your photo
- Update the `/icons/` and `/skills/` images as needed

### 4. **Run Locally**

Simply open `index.html` in your browser to view the site.

---

## 🌍 Deploy on GitHub Pages

1. Push your changes to your forked repo
2. Go to `Settings > Pages`
3. Under **Source**, select `main` branch and root (`/`)
4. Your site will be live at:  
   `https://<your-username>.github.io/<your-repo-name>`

---

## 🤩 Customization Tips

| Section       | Location               | Tip |
|---------------|------------------------|-----|
| Profile Info  | `index.html`           | Update name & icons |
| Resume Body   | `body-content.html`    | Add your own details |
| Styling       | `style.css`            | Customize layout & colors |
| Skills Icons  | `/assets/skills/`      | Add your own tech stack icons |
| Projects      | `body-content.html`    | Include links and descriptions |

---

## 🧪 Optional Enhancements

- Add more animations with [AOS.js]
- Replace static content with JSON + JS templates
- Add contact form with Formspree or Netlify
- 💡 Use `script.js` to dynamically load `body-content.html` using:

```js
document.addEventListener("DOMContentLoaded", () => {
  fetch("body-content.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("main-content").innerHTML = html;
    });
});
```

- ✅ Use `main-content` as the `id` of the div in `index.html` where `body-content.html` should load

```html
<div id="main-content"></div>
```

---

## 🤝 Contribute

Feel free to fork this repo, enhance it, and submit a pull request if you'd like to improve this template for others!

---

## 📄 License

Licensed under the [MIT License](LICENSE)

---

## 🙌 Built With

- [Tailwind CSS](https://tailwindcss.com/)
- [AOS - Animate on Scroll]
- ❤️ and a love for clean personal websites

---

<br>

<p align="center">
  Made with ❤️ by <a href="https://github.com/syedyshiraz" target="_blank">syedyshiraz</a>
</p>
