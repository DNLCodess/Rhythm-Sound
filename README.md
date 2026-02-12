# 🎵 Rhythm & Sound Band - Professional Website

A modern, responsive website for Rhythm & Sound Band, a premier live music band in Nigeria with enough experience. Built with Next.js 16, React, and Tailwind CSS v4, featuring advanced UI components, smooth animations, and optimized performance.

![Rhythm & Sound Band Website](https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1200&auto=format&fit=crop)

## 🌟 Featuress

### Core Functionality

- **Single-Page Application** with smooth scroll navigation
- **Sticky Navigation Bar** with active section highlighting
- **Mobile-First Responsive Design** optimized for all devices
- **Dark Mode Support** with persistent theme switching
- **Interactive Media Gallery** with video modals and image lightbox
- **Dynamic Team Member Filtering** by role categories
- **Contact Form** with WhatsApp integration
- **SEO Optimized** with meta tags and structured data

### Technical Highlights

- ⚡ **Next.js 16.1.6** with App Router and React Server Components
- 🎨 **Tailwind CSS v4** with custom theme configuration
- 🖼️ **Next/Image** optimization for superior loading performance
- 📱 **Mobile Menu** with overlay animations
- 🎬 **Video Embeds** with YouTube integration
- 🎯 **Smooth Scrolling** and section detection
- 💾 **LocalStorage** for theme persistence
- 🎭 **Custom Animations** and transitions

## 🛠️ Tech Stack

| Technology               | Purpose                         |
| ------------------------ | ------------------------------- |
| **Next.js 16.1.6**       | React framework with App Router |
| **React 19**             | UI library with latest features |
| **Tailwind CSS v4**      | Utility-first CSS framework     |
| **React Icons (Lucide)** | Modern icon library             |
| **Swiper.js**            | Touch-enabled slider component  |
| **JavaScript/ES6+**      | Modern JavaScript features      |

## 📁 Project Structure

```
rhythm-and-sound-band/
├── app/
│   ├── globals.css           # Tailwind v4 configuration & custom styles
│   ├── layout.js             # Root layout with theme provider
│   └── page.js               # Main landing page
├── components/
│   ├── TopNavBar.jsx         # Sticky navigation with scroll detection
│   ├── Hero.jsx              # Hero section with CTA
│   ├── Services.jsx          # Service packages showcase
│   ├── AboutUs.jsx           # Company information & stats
│   ├── BandMembers.jsx       # Team members with filtering
│   ├── MediaGallery.jsx      # Videos, photos, testimonials
│   ├── ContactForm.jsx       # Contact section with WhatsApp
│   └── Footer.jsx            # Footer with links & social media
├── helpers/
│   └── index.js              # Utility functions (toSentenceCase, etc.)
├── utils/
│   └── cn.js                 # className utility (clsx + tailwind-merge)
└── public/
    └── images/               # Static assets
```

## 🎨 Design Features

### Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+
- **Max Width**: 1536px (max-w-8xl)

### Consistent Spacing System

```css
/* Horizontal Padding */
px-4    /* Mobile: 16px */
md:px-6 /* Tablet: 24px */
lg:px-8 /* Desktop: 32px */

/* Vertical Padding */
py-20 lg:py-32 /* Section spacing */
```

### Color Palette

- **Primary**: Orange (#ea580c) - Brand color
- **Default**: Neutral grays - Text and backgrounds
- **White/Black**: Pure contrasts

### Typography

- **Font Family**: REM (Google Fonts)
- **Headings**: Font weight 600-700
- **Body**: Font size 15px base

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/rhythm-and-sound-band.git
cd rhythm-and-sound-band
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**

```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📝 Key Implementation Details

### Tailwind CSS v4 Migration

Migrated from Tailwind CSS v3 to v4 with major architectural changes:

**Before (v3):**

```javascript
// tailwind.config.js required
module.exports = {
  theme: {
    extend: {
      /* config */
    },
  },
};
```

**After (v4):**

```css
/* CSS-first configuration in globals.css */
@theme {
  --color-primary: #ea580c;
  --font-family-sans: "REM", sans-serif;
}
```

### Active Section Detection

```javascript
const activeSection = () => {
  const scrollY = window.scrollY;
  for (let i = menuItems.length - 1; i >= 0; i--) {
    const section = menuItems[i];
    const el = document.getElementById(section);
    if (el && el.offsetTop <= scrollY + 100) {
      setActivation(section);
      return;
    }
  }
};
```

### Dynamic Filtering System

```javascript
const filteredMembers =
  activeCategory === "all"
    ? members
    : members.filter((member) => member.category === activeCategory);
```

### Modal Management

```javascript
// Video Modal
const [selectedVideo, setSelectedVideo] = useState(null);

// Image Lightbox
const [selectedImage, setSelectedImage] = useState(null);
```

## 🎯 Key Sections

### 1. Hero Section

- Eye-catching banner with CTA buttons
- Phone number quick access
- Scroll-to-action prompts

### 2. Services

- 6 service packages with icons
- Image collage showcasing work
- Custom quote CTA

### 3. About Us

- Company story and values
- Floating stats card (10+ years, 500+ events)
- Client showcase grid

### 4. Band Members

- 18+ team member profiles
- Category filtering (Leadership, Vocalists, Instrumentalists, Technical)
- Role-based icons and descriptions

### 5. Media Gallery

- Performance videos with YouTube embeds
- Photo gallery with lightbox
- Client testimonials with ratings

### 6. Contact

- Multiple contact methods
- WhatsApp direct integration
- Social media links

## 📱 Responsive Design Patterns

### Mobile Navigation

```jsx
// Mobile menu overlay with Preline.js
<div id="mobile-menu" className="hs-overlay fixed...">
  {/* Menu content */}
</div>
```

### Image Optimization

```jsx
<Image
  src={imageUrl}
  alt="Description"
  fill
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="object-cover"
  unoptimized // For external images
/>
```

## 🔧 Configuration Files

### package.json (Key Dependencies)

```json
{
  "dependencies": {
    "next": "16.1.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-icons": "^5.4.0",
    "swiper": "^11.1.15"
  }
}
```

### Custom Utilities

```javascript
// helpers/index.js
export const toSentenceCase = (str) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
```

## 🎨 Custom Animations

### Spin Animations

```css
@keyframes spin-reverse {
  to {
    transform: rotate(-1turn);
  }
}

.animate-spin-reverse-slower {
  animation: spin-reverse 6s linear infinite;
}
```

### Marquee Effect

```css
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% - 2rem));
  }
}

.marquee__group {
  animation: scroll 60s linear infinite;
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Optimizations

1. **Next/Image** automatic optimization
2. **Lazy loading** for images and videos
3. **Code splitting** via Next.js App Router
4. **CSS purging** in production build
5. **Responsive images** with proper `sizes` attribute
6. **Minimal JavaScript** with efficient React patterns

## 📊 Project Metrics

- **Components**: 8 major sections
- **Total Lines of Code**: ~2,500+
- **Bundle Size**: Optimized for production
- **Lighthouse Score**: 90+ (Performance, Accessibility, SEO)
- **Mobile Responsive**: 100%

## 🎓 Skills Demonstrated

### Frontend Development

- ✅ Modern React patterns (Hooks, State Management)
- ✅ Next.js 16 App Router implementation
- ✅ Responsive design with mobile-first approach
- ✅ CSS architecture with Tailwind CSS v4
- ✅ Component composition and reusability

### UI/UX Implementation

- ✅ Interactive animations and transitions
- ✅ Modal and overlay management
- ✅ Dynamic filtering and search
- ✅ Accessibility best practices
- ✅ Cross-browser compatibility

### Best Practices

- ✅ Clean, maintainable code structure
- ✅ Semantic HTML markup
- ✅ SEO optimization
- ✅ Performance optimization
- ✅ Git workflow and version control

## 🚧 Future Enhancements

- [ ] Add backend API for contact form submissions
- [ ] Implement blog section for updates
- [ ] Add event calendar/booking system
- [ ] Integrate payment gateway for deposits
- [ ] Add customer dashboard for bookings
- [ ] Implement real-time chat support
- [ ] Add multi-language support (Yoruba, Igbo, Hausa)

## 📄 License

This project is for portfolio demonstration purposes.

## 👤 Developer

**Daniel** - Full Stack Web Developer

Specialized in modern web technologies including Next.js, React, and Tailwind CSS. Experienced in building responsive, performant, and user-friendly web applications.

## 🤝 Contributing

This is a portfolio project, but feedback and suggestions are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: aboderindaniel482@gmail.com

---

⭐ **If you found this project interesting, please consider giving it a star!**

Built with ❤️ using Next.js and Tailwind CSS
