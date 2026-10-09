# ImageGallery_BYTE 📸

A responsive, accessible photography gallery web application built with **pure HTML5, CSS3, and vanilla JavaScript** (zero external frameworks or runtime dependencies). 

Designed with a dark aesthetic, fluid CSS grid, instant search, multi-category filtering, and a keyboard-accessible modal lightbox.

---

## 🌟 Key Features

* **Curated 16-Image Dataset**: High-resolution photography across 4 distinct categories: **Nature**, **Travel**, **Architecture**, and **Wildlife**.
* **Combined Filtering & Instant Search**:
  * Filter by category tabs with dynamic photo counts.
  * Search instantaneously across titles, captions, locations, and categories.
  * Filters and search combine seamlessly.
* **Friendly Empty State**: When no images match the search or category combination, a helpful empty state with a "Reset All Filters" button appears.
* **Accessible Modal Lightbox (`<dialog>`)**:
  * Opens high-resolution view on image click or <kbd>Enter</kbd> / <kbd>Space</kbd>.
  * Live photo counter indicator (e.g., `3 of 12`) calculated dynamically from the current filtered set.
  * Rich details: Category badge, title, detailed caption, location, and photographer attribution.
  * Loading spinner indicator and smooth image transitions.
  * **Image Fallback Handling**: Gracefully handles network issues or broken images without breaking the gallery layout.
* **Full Keyboard & Backdrop Navigation**:
  * Navigate with <kbd>←</kbd> (Previous) and <kbd>→</kbd> (Next) arrow keys.
  * Close instantly with <kbd>Esc</kbd> or by clicking the dimmed backdrop.
  * Backdrop click ignores clicks on the photo itself to prevent accidental dismissal.
  * Visible focus outlines (`:focus-visible`) for all interactive elements.
* **Responsive Modern Design**:
  * CSS Grid layout automatically adapts from multi-column desktop displays down to tablet and mobile screens.
  * Subtle hover animations with smooth card elevations and zoom previews.

---

## 💻 Tech Stack

* **HTML5**: Semantic elements (`<header>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`, `<nav>`).
* **CSS3**: Modern CSS Variables, Flexbox, CSS Grid (`minmax`, `auto-fill`), Backdrop Filters (`backdrop-filter: blur`), and CSS animations.
* **Vanilla JavaScript (ES6+)**: Pure JS DOM manipulation, native `<dialog>` modal API, array filtering, event delegation, and keyboard event handlers.

---

## 🖼️ Image Credits

All high-definition photographs are licensed under the [Unsplash License](https://unsplash.com/license) and captured by talented photographers:
* **Nature**: Luca Bravo, Dan Meyers, Vincent Guth, Bailey Zindel.
* **Travel**: Sorasak, Federico Di Dio, Heidi Kaden, Yonatan Anugerah.
* **Architecture**: Philipp Katzenberger, Fred Mouniguet, Victor Malyushev, Simone Hutsch.
* **Wildlife**: Jonatan Pie, Geran de Klerk, Wexor Tmg, Boris Smokrovic.

---

## 📸 Screenshots

> *Placeholder: Add screenshots of the desktop grid, mobile view, and lightbox below.*

| Desktop Gallery Grid | Accessible Lightbox Modal |
| :---: | :---: |
| `![Desktop Grid Preview](https://via.placeholder.com/600x380/0b0f17/38bdf8?text=ImageGallery_BYTE+Grid)` | `![Lightbox Modal Preview](https://via.placeholder.com/600x380/0b0f17/818cf8?text=Lightbox+Modal+View)` |

---

## 🚀 Local Setup Instructions

No build tools, bundlers, or Node.js required! You can run it immediately in any modern browser.

### Option 1: Direct File Open
1. Download or clone this repository to your computer.
2. Double-click `index.html` to open it in Chrome, Edge, Firefox, or Safari.

### Option 2: Using VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension if not already installed.
3. Right-click `index.html` and choose **"Open with Live Server"**.
4. The site will launch automatically at `http://127.0.0.1:5500/`.

### Option 3: Python Built-in Server
Open your terminal inside the project directory and run:

```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 🌐 How to Publish on GitHub Pages (Step-by-Step)

Publishing your gallery live on the internet is completely free using GitHub Pages:

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com/) and click the **"+"** icon in the top right corner, then select **"New repository"**.
2. Name your repository (e.g., `ImageGallery_BYTE`).
3. Set the visibility to **Public**.
4. Leave "Initialize this repository with a README" unchecked, then click **"Create repository"**.

### Step 2: Push Your Code
Open your terminal or command prompt in your local project folder and run:

```bash
# 1. Initialize git
git init

# 2. Add all files
git add .

# 3. Commit files
git commit -m "Initial commit: ImageGallery_"

# 4. Set default branch to main
git branch -M main

# 5. Link to your remote GitHub repository (replace with your repo URL)
git remote add origin https://github.com/nikki9453/ImageGallery

# 6. Push code to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click the **Settings** tab.
3. In the left navigation, click **Pages** (under the "Code and automation" section).
4. Under **"Build and deployment" > "Branch"**, choose `main` branch and `/ (root)` folder.
5. Click **Save**.
6. Within 1–2 minutes, your website will be live at:
   ```
   https://nikki9453.github.io/ImageGallery/
   ```

---

## 🔗 Repository Placeholder

* **GitHub Repository**: `https://github.com/nikki9453/ImageGallery`
* **Live Demo**: `https://nikki9453.github.io/ImageGallery/`

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
