# Portfolio Website

Minimalist dark portfolio with forest green accents and markdown blog support.

## Project Structure

```
portfolio/
├── public/
│   └── blogs/                    # Put your markdown blog files here!
│       ├── nestle-skillathon-experience.md
│       ├── drupalcon-vienna-2025.md
│       └── development-to-product-management.md
├── src/
│   ├── components/
│   │   ├── Hero.jsx / Hero.css
│   │   ├── Skills.jsx / Skills.css
│   │   ├── Projects.jsx / Projects.css
│   │   ├── Blog.jsx / Blog.css
│   │   └── Modal.jsx / Modal.css
│   ├── pages/
│   │   ├── Home.jsx              # Homepage
│   │   ├── BlogPost.jsx          # Blog post page
│   │   └── BlogPost.css
│   ├── data/
│   │   └── portfolioData.js      # All your content & blog metadata
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## How to Add New Blog Posts

### Step 1: Create Markdown File
Create a new `.md` file in `public/blogs/` folder:

```markdown
# My Blog Title

Your content here with markdown formatting...

## Subheading

- List items
- More items

**Bold text** and *italic text*

[Links](https://example.com)
```

### Step 2: Add Blog Metadata
Update `src/data/portfolioData.js` in the `blogs` array:

```javascript
{
  id: 4,
  slug: "my-new-blog",              // Used in URL: /blog/my-new-blog
  title: "My New Blog Post",
  description: "Short description for the card",
  date: "December 2025",
  markdownFile: "my-new-blog.md"    // File name in public/blogs/
}
```

### Step 3: Done!
The blog will automatically appear on the homepage and be accessible at `/blog/my-new-blog`

## Blog URL Structure

Each blog gets its own URL based on the `slug`:
- Homepage blog card → Click → `/blog/nestle-skillathon-experience`
- Direct URL access works too!

## Customize Your Portfolio

1. **Update your data**: Edit `src/data/portfolioData.js`
   - Change name, title, description
   - Add your photo URL
   - Update skills, projects, and blogs

2. **Replace images**: 
   - Update image URLs in portfolioData.js
   - Use your own photos and project screenshots

3. **Write blogs**:
   - Create `.md` files in `public/blogs/`
   - Add metadata to portfolioData.js
   - Use markdown formatting

4. **Colors**: All green accents use `#2d5016`
   - Change this in CSS files if you want a different color

## Markdown Features Supported

Your blog posts support:
- Headings (h1, h2, h3)
- **Bold** and *italic* text
- Lists (ordered and unordered)
- Links
- Code blocks
- Blockquotes
- Images

## Features

- ✅ Minimalist black design
- ✅ Forest green accents
- ✅ Space Grotesk font
- ✅ Fully responsive
- ✅ Smooth animations
- ✅ **Markdown blog posts with routing**
- ✅ **Clean URLs (e.g., /blog/drupalcon-vienna-2025)**
- ✅ **Easy to add new blogs**
- ✅ Clean component structure
- ✅ Easy to customize

## Tech Stack

- React 18
- React Router (for blog pages)
- React Markdown (for rendering .md files)
- Vite
- CSS Modules
- Space Grotesk font
