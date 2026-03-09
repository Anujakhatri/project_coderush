# 📚 Anuja HTML‑CSS‑JS Concepts (excluding the JavaScript‑only folder)
---

## 📁 Folder Overview
| Folder | Core Concept | What you’ll see (HTML + CSS) |
|---|---|---|
| **Form‑validation** | Client‑side form validation using HTML5 attributes and simple CSS feedback. | ```html
<form class="my‑form">
  <input type="email" placeholder="Email" required>
  <button type="submit">Submit</button>
</form>
<style>
.my‑form input:invalid {border: 2px solid #e74c3c;}
.my‑form input:valid {border: 2px solid #2ecc71;}
</style>
``` |
| **Mini‑dashboard** | Layout with CSS Grid/Flexbox to build a tiny analytics dashboard. | ```html
<div class="dashboard">
  <div class="card">🧮 Users: 1 024</div>
  <div class="card">💰 Revenue: $3 210</div>
  <div class="card">📈 Growth: 12 %</div>
</div>
<style>
.dashboard {display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem;}
.card {background:#fff; padding:1rem; border-radius:8px; box-shadow:0 2px 5px rgba(0,0,0,0.1);}
</style>
``` |
| **Modal‑popup** | Simple modal dialog using the `:target` pseudo‑class (no JS). | ```html
<a href="#modal">Open modal</a>
<div id="modal" class="modal">
  <div class="content">Hello! <a href="#" class="close">✕</a></div>
</div>
<style>
.modal {display:none; position:fixed; inset:0; background:rgba(0,0,0,0.6);}
.modal:target {display:flex; align-items:center; justify-content:center;}
.content {background:#fff; padding:2rem; border-radius:6px;}
</style>
``` |
| **dark‑mode‑toggle** | CSS custom properties + a checkbox to switch themes. | ```html
<input type="checkbox" id="dark" class="toggle">
<label for="dark">🌙 Dark</label>
<style>
:root {--bg:#fff; --txt:#111;}
[data-theme="dark"] {--bg:#111; --txt:#eee;}
body {background:var(--bg); color:var(--txt);}
.toggle:checked ~ body {background:var(--bg);}
</style>
``` |
| **fetch‑api** | Fetching JSON data and rendering it with a tiny script (HTML skeleton shown). | ```html
<ul id="posts"></ul>
<script>
fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
  .then(r=>r.json())
  .then(data=>{
    const ul=document.getElementById('posts');
    data.forEach(p=>ul.innerHTML+=`<li>${p.title}</li>`);
  });
</script>
``` |
| **hero‑section‑scroll** | Full‑height hero with a smooth scroll‑down arrow using `scroll-behavior`. | ```html
<section class="hero">
  <h1>Welcome</h1>
  <a href="#next" class="down">↓</a>
</section>
<section id="next">…</section>
<style>
html {scroll-behavior:smooth;}
.hero {height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center; background:#3498db; color:#fff;}
.down {margin-top:2rem; font-size:2rem;}
</style>
``` |
| **product‑grid** | Responsive product cards using CSS Grid and media queries. | ```html
<div class="grid">
  <div class="card">📦 Item 1</div>
  <div class="card">📦 Item 2</div>
  <div class="card">📦 Item 3</div>
</div>
<style>
.grid {display:grid; grid-template-columns:repeat(auto‑fit,minmax(150px,1fr)); gap:1rem;}
.card {background:#fff; padding:1rem; border:1px solid #ddd; border-radius:4px;}
</style>
``` |
| **profile‑card** | Card component with avatar, name, and social links – flex layout. | ```html
<div class="profile">
  <img src="avatar.jpg" alt="Avatar" class="avatar">
  <h2>Alice</h2>
  <p>Frontend Engineer</p>
</div>
<style>
.profile {display:flex; flex-direction:column; align-items:center; background:#f9f9f9; padding:2rem; border-radius:8px;}
.avatar {width:80px; height:80px; border-radius:50%; margin-bottom:1rem;}
</style>
``` |
| **responsive‑navbar** | Mobile‑first navigation that collapses into a hamburger menu using a hidden checkbox. | ```html
<input type="checkbox" id="nav-toggle" class="nav-toggle">
<label for="nav-toggle" class="nav-icon">☰</label>
<nav class="nav">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
<style>
.nav {display:flex; gap:1rem;}
.nav-toggle {display:none;}
.nav-icon {display:none; cursor:pointer;}
@media(max-width:600px){
  .nav {display:none; flex-direction:column;}
  .nav-toggle:checked + .nav-icon + .nav {display:flex;}
  .nav-icon {display:block;}
}
</style>
``` |
| **todo‑app** | Simple to‑do list using only HTML + CSS (checkbox hack) – no JavaScript. | ```html
<ul class="todo">
  <li><input type="checkbox" id="t1"><label for="t1">Buy milk</label></li>
  <li><input type="checkbox" id="t2"><label for="t2">Read book</label></li>
</ul>
<style>
.todo input {display:none;}
.todo label {cursor:pointer;}
.todo input:checked + label {text-decoration:line-through; color:#777;}
</style>
``` |
---

## 🎯 How to Use This Guide
1. **Pick a folder** you want to explore.
2. Open the `index.html` (or the main HTML file) inside that folder in a browser.
3. Compare the live result with the minimal snippet above – you’ll see the same visual effect.
4. **Experiment** – change colors, spacing, or text to see how CSS properties affect the layout.

Happy coding! 🎉
