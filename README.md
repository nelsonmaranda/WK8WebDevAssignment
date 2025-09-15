# GreenTrack Kenya 🌱

A modern, responsive website for GreenTrack - a waste management and recycling company serving communities across Kenya. Built as part of PLP Web Development Week 8 Assignment.

![GreenTrack Website Preview](https://greentrack1.netlify.app/)

## 🎯 Project Purpose

GreenTrack's website aims to:
- **Educate** communities about proper waste sorting and recycling
- **Connect** residents and businesses with reliable waste collection services  
- **Promote** sustainable waste management practices across Kenya
- **Facilitate** easy service requests through an integrated contact form
- **Showcase** company values, services, and community impact

## 🚀 Live Website

🌐 **Live URL**: [https://greentrack1.netlify.app/](https://greentrack1.netlify.app/)

## 📁 Project Structure

```
Week 8 Assignment/
├── index.html              # Homepage with hero, services overview, impact stats
├── about.html              # Company story, values, and compliance information
├── services.html           # Detailed service offerings with icons
├── resources.html          # Waste sorting guides and FAQs
├── contact.html            # Contact form with validation
├── thank-you.html          # Form submission confirmation page
├── assets/
│   ├── css/
│   │   └── styles.css      # Responsive CSS with dark green theme
│   ├── js/
│   │   └── main.js         # Modular JavaScript for interactivity
│   └── images/             # Website images and assets
├── .gitignore              # Git ignore patterns
├── .editorconfig           # Code formatting standards
├── README.md               # This file
├── DEPLOYMENT.md           # Deployment and email setup guide
└── planning.md             # Initial project planning document
```

## ✨ Key Features

### 🎨 Design & UX
- **Responsive Design**: Mobile-first approach with CSS Grid
- **Dark Green Theme**: Professional color scheme reflecting sustainability
- **Smooth Animations**: Scroll-triggered reveals and hover effects
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

### 🛠️ Technical Features
- **HTML5 Semantic Structure**: Proper document outline and SEO-friendly
- **CSS Grid & Flexbox**: Modern layout techniques
- **Vanilla JavaScript**: No dependencies, lightweight and fast
- **Form Validation**: Client-side validation with user-friendly error messages
- **Progressive Enhancement**: Works without JavaScript

### 📧 Contact Form
- **Netlify Forms Integration**: Serverless form handling
- **Email Notifications**: Submissions sent to nelsonmaranda2@gmail.com
- **Spam Protection**: Honeypot field for bot prevention
- **Success Page**: Thank you page after form submission

### 📱 Pages Overview
- **Home**: Hero section, service cards, impact statistics, how-it-works
- **About**: Company story, values with icons, compliance information  
- **Services**: Four main services with modern icons and descriptions
- **Resources**: Interactive waste sorting guide with step cards and FAQs
- **Contact**: Contact form with validation and company details

## 🛠️ Technologies Used

- **HTML5**: Semantic markup, forms, accessibility features
- **CSS3**: Grid, Flexbox, animations, custom properties
- **JavaScript (ES6+)**: Modules, IntersectionObserver, form validation
- **Netlify**: Hosting, form handling, continuous deployment
- **Git/GitHub**: Version control and collaboration

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Git (for development)
- Code editor (VS Code recommended)

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/nelsonmaranda/WK8WebDevAssignment.git
   cd WK8WebDevAssignment
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. Navigate to `http://localhost:8000`

### Deployment
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions including:
- Netlify deployment options
- Contact form email setup
- Custom domain configuration

## 🎨 Customization

### Colors
Update the CSS custom properties in `assets/css/styles.css`:
```css
:root {
  --bg: #0f1814;        /* Background */
  --card: #1a2f26;      /* Card backgrounds */
  --text: #ffffff;      /* Primary text */
  --brand: #34d399;     /* Brand green */
  --accent: #d1fae5;    /* Accent color */
}
```

### Content
- Update company information in HTML files
- Replace placeholder images in `assets/images/`
- Modify social media links in page footers
- Customize contact information in `contact.html`

## 📊 Performance & Best Practices

- ✅ **Semantic HTML**: Proper document structure
- ✅ **Responsive Design**: Works on all device sizes
- ✅ **Optimized Images**: Efficient loading and display
- ✅ **Minimal Dependencies**: Fast loading times
- ✅ **SEO Friendly**: Meta tags and semantic structure
- ✅ **Accessible**: ARIA labels and keyboard navigation

## 🤝 Contributing

This is a student project, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📝 License

This project is created for educational purposes as part of PLP Web Development Course.

## 👨‍💻 Author

**Nelson Maranda**
- GitHub: [@nelsonmaranda](https://github.com/nelsonmaranda)
- Email: nelsonmaranda2@gmail.com

## 🙏 Acknowledgments

- **PLP Academy** for the comprehensive web development curriculum
- **Netlify** for providing excellent hosting and form handling services
- **Unsplash/Pexels** for placeholder images during development

---

*Built with ❤️ for a cleaner, greener Kenya* 🇰🇪


