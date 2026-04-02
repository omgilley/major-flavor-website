# 💋 Major Flavor Website — Deployment Guide

## Project Structure
```
major-flavor/
├── index.html       ← Homepage
├── menu.html        ← Full menu
├── order.html       ← Online ordering
├── about.html       ← About page
├── contact.html     ← Contact + form
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

---

## 🚀 Deploying to Vercel via GitHub (Free — No VS Code needed)

### Step 1: Create a GitHub Account (if you don't have one)
- Go to **github.com** → Sign Up (free)

---

### Step 2: Create a New GitHub Repository
1. Click the **+** button → **New repository**
2. Name it: `major-flavor` (or anything you like)
3. Set to **Public**
4. Click **Create repository**

---

### Step 3: Upload Your Files to GitHub
Since you don't have VS Code right now, use GitHub's web interface:

1. In your new repo, click **Add file → Upload files**
2. Drag and drop the entire `major-flavor/` folder contents:
   - `index.html`
   - `menu.html`
   - `order.html`
   - `about.html`
   - `contact.html`
   - The `css/` folder
   - The `js/` folder
3. Click **Commit changes**

> ⚠️ Important: Upload files maintaining the folder structure. GitHub will preserve the `css/` and `js/` subfolders if you drag the whole folder.

---

### Step 4: Deploy to Vercel
1. Go to **vercel.com** → Sign Up with your GitHub account (free)
2. Click **Add New Project**
3. Click **Import** next to your `major-flavor` repo
4. Leave all settings as default (it's plain HTML, no build step needed)
5. Click **Deploy**

✅ Your site will be live at: `https://major-flavor.vercel.app` (or similar)

---

### Step 5: Connect Your Custom Domain
1. In Vercel → your project → **Settings → Domains**
2. Add your purchased domain (e.g., `majorflavormp.com`)
3. Vercel will show you DNS records to add
4. Go to wherever you bought the domain → DNS settings → add those records
5. Wait 10-30 minutes for it to go live

---

## 🔧 Things to Customize Before Launch

### 1. Google Maps Embed (contact.html)
Replace the placeholder iframe src with the real embed URL:
1. Go to Google Maps
2. Search: `4219 Main St, Moss Point, MS`
3. Click **Share → Embed a map**
4. Copy the `src="..."` value and paste it in `contact.html`

### 2. Contact Form (contact.html)
The form uses **Formspree** (free tier = 50 submissions/month):
1. Go to **formspree.io** → Sign Up (free)
2. Create a new form → copy your Form ID
3. In `contact.html`, replace `YOUR_FORM_ID` in:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

### 3. Square Online Ordering (order.html)
When Square is ready:
1. In Square Dashboard → Online → create your online store
2. Copy your Square Online store link
3. In `order.html`, find the comment block and replace the placeholder with:
   ```html
   <a href="https://YOUR-SQUARE-LINK.square.site" class="btn btn-green">
     Order Now on Square
   </a>
   ```

---

## 🔄 Making Updates After Launch

### Via GitHub Web (no VS Code needed):
1. Go to your repo on github.com
2. Click the file you want to edit
3. Click the pencil ✏️ icon
4. Make your changes
5. Click **Commit changes**
6. Vercel auto-deploys within ~30 seconds ✨

### Via VS Code (when available):
```bash
git clone https://github.com/YOUR_USERNAME/major-flavor.git
cd major-flavor
# make changes
git add .
git commit -m "update menu prices"
git push
```

---

## 💡 Free Tools Used / Recommended

| Tool | Purpose | Cost |
|------|---------|------|
| GitHub | Code hosting | Free |
| Vercel | Web hosting + SSL | Free |
| Formspree | Contact form | Free (50/mo) |
| Google Fonts | Typography | Free |
| Square Online | Order processing | Free (% fee on orders) |

---

## 📞 Need Help?
Contact the developer or reach out to:
- Vercel support: vercel.com/support
- GitHub docs: docs.github.com
- Square support: squareup.com/help
