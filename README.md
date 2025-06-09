# 💕 Steph & Jon's Roman Adventure

A romantic, interactive guide for planning the perfect couples trip to Rome (August 6-10, 2024).

## ✨ Features

- 🏛️ **4 Romantic Neighborhoods** - Trastevere, Centro Storico, Monti, Campo de' Fiori
- 🏠 **12 Cozy Love Nests** - Entire apartments perfect for couples
- 💕 **Interactive Filtering** - By neighborhood, budget, and ratings
- 📱 **Mobile Responsive** - Perfect for planning on the go
- ❤️ **Personal Touch** - Customized recommendations from Jon to Steph

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Navigate to project directory:**
   ```bash
   cd /Users/jon/Documents/steph-jon-rome-trip
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   Visit `http://localhost:3000` to see your romantic Rome guide!

## 📦 Deployment to GitHub Pages

1. **Create GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "💕 Initial commit - Steph & Jon's romantic Rome trip guide"
   ```

2. **Connect to GitHub:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/steph-jon-rome-trip.git
   git push -u origin main
   ```

3. **Update package.json:**
   - Replace `YOUR_GITHUB_USERNAME` in `homepage` field with your actual GitHub username

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Access your live site:**
   Your romantic Rome guide will be available at:
   `https://YOUR_USERNAME.github.io/steph-jon-rome-trip`

## 🏗️ Project Structure

```
steph-jon-rome-trip/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js              # Main app component
│   ├── App.css             # App-specific styles
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles
│   └── StephAndJonsRomeTrip.js  # Main romantic component
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md              # This file
```

## 💝 Customization

### Colors
The app uses a romantic rose and purple color scheme. To customize:
- Edit `tailwind.config.js` for theme colors
- Modify gradients in `StephAndJonsRomeTrip.js`

### Content
- **Add more properties:** Extend the `allProperties` array
- **Update neighborhoods:** Modify the `neighborhoods` array
- **Personal messages:** Edit the recommendation section

### Features to Add
- [ ] Save favorites functionality
- [ ] Price alerts
- [ ] Itinerary planner
- [ ] Photo gallery from your trip

## 🛠️ Available Scripts

- `npm start` - Runs development server
- `npm run build` - Creates production build
- `npm run deploy` - Deploys to GitHub Pages
- `npm test` - Runs tests

## 💌 From Jon to Steph

This app was created with love to help us plan the most amazing romantic getaway to Rome. Every detail was chosen with you in mind - from the neighborhoods to the apartments to the colors. Can't wait to explore the Eternal City together! ❤️

---

Built with ❤️ using React, Tailwind CSS, and Lucide Icons
