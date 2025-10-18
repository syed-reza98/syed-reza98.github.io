# Deployment Checklist

## Pre-Deployment Verification

### 1. Build & Test Locally
```bash
# Install dependencies
pnpm install

# Run development server and test all features
pnpm dev
# Visit http://localhost:3000
# Test: Navigation, Mobile menu, Theme toggle, All sections, Links

# Build for production
pnpm build

# Verify build output in ./out directory
ls -la out/

# Test production build locally (optional)
npx serve out
```

### 2. Code Quality Checks
- [ ] No TypeScript errors (`pnpm build` should succeed)
- [ ] All components render without console errors
- [ ] Mobile responsive design works across breakpoints
- [ ] Dark/light theme toggle functions correctly
- [ ] All internal links work (Home, About, Skills, Projects, Contact)
- [ ] All external links open in new tabs with proper `rel` attributes
- [ ] Skip to main content link works with keyboard (Tab, Enter)

### 3. Accessibility Verification
- [ ] Test keyboard navigation (Tab through all interactive elements)
- [ ] Focus indicators visible on all focusable elements
- [ ] ARIA labels present on icon-only buttons
- [ ] Semantic HTML structure (nav, main, section, footer)
- [ ] Heading hierarchy correct (H1 → H2 → H3)
- [ ] Screen reader test (optional but recommended)

### 4. Performance Check
- [ ] Images optimized (if any added)
- [ ] No unnecessary JavaScript bundles
- [ ] CSS loads efficiently
- [ ] Smooth animations without jank

### 5. Content Review
- [ ] Personal information accurate (name, email, social links)
- [ ] Project descriptions and links correct
- [ ] Skills list up-to-date
- [ ] Contact email correct (syed.reza98@gmail.com)
- [ ] GitHub links pointing to correct repositories

---

## GitHub Repository Setup

### 1. Repository Settings
```bash
# Ensure you're on the main branch
git branch

# Check repository name matches username.github.io
# Repository: syed-reza98/syed-reza98.github.io
```

### 2. Enable GitHub Pages
1. Go to: https://github.com/syed-reza98/syed-reza98.github.io/settings/pages
2. **Source:** Deploy from a branch
3. **Branch:** `gh-pages` (will be created by GitHub Actions)
4. **Folder:** `/ (root)`
5. Click **Save**

### 3. GitHub Actions Permissions
1. Go to: https://github.com/syed-reza98/syed-reza98.github.io/settings/actions
2. **Workflow permissions:** Read and write permissions
3. Check: "Allow GitHub Actions to create and approve pull requests"
4. Click **Save**

---

## Deployment Steps

### Method 1: GitHub Actions (Recommended)

#### Step 1: Commit and Push
```bash
# Check status
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "feat: complete portfolio redesign with modern design system

- Enhanced design token system with comprehensive spacing, typography, and color scales
- Created UI component library (Typography, Card, Badge, Container, Grid, Stack)
- Built homepage sections (Hero, About, Skills, Projects, Contact)
- Refactored Header with mobile menu, skip link, and scroll effects
- Enhanced Footer with social links and better organization
- Added GitHub Actions workflow for automated deployment
- Implemented accessibility improvements (WCAG 2.1 AA compliance)
- Applied Radix UI patterns and Tailwind CSS 4"

# Push to main branch
git push origin main
```

#### Step 2: Monitor GitHub Actions
1. Go to: https://github.com/syed-reza98/syed-reza98.github.io/actions
2. Watch the "Deploy Next.js to GitHub Pages" workflow
3. Wait for ✅ green checkmark (build and deploy success)
4. Workflow steps:
   - ✅ Checkout code
   - ✅ Setup Node.js and pnpm
   - ✅ Install dependencies
   - ✅ Build Next.js static export
   - ✅ Deploy to GitHub Pages

#### Step 3: Verify Deployment
1. Visit: https://syed-reza98.github.io
2. Test all functionality on live site
3. Check mobile responsiveness
4. Verify theme toggle works
5. Test all navigation links

### Method 2: Manual Deployment (Backup)

If GitHub Actions fails, deploy manually:

```bash
# Build the site
pnpm build

# Install gh-pages package (if not installed)
pnpm add -D gh-pages

# Deploy to gh-pages branch
npx gh-pages -d out -b gh-pages

# Or use this npm script (add to package.json first):
# "deploy": "gh-pages -d out -b gh-pages"
pnpm deploy
```

---

## Post-Deployment Verification

### 1. Live Site Checks
- [ ] Homepage loads at https://syed-reza98.github.io
- [ ] All sections visible (Hero, About, Skills, Projects, Contact)
- [ ] Navigation works (header links scroll to sections)
- [ ] Mobile menu functions on small screens
- [ ] Theme toggle persists across page reloads
- [ ] All project GitHub links open correctly
- [ ] Social links (GitHub, LinkedIn, Email) work
- [ ] Footer displays correctly

### 2. Cross-Browser Testing
Test on major browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers (iOS Safari, Chrome Android)

### 3. Mobile Responsiveness
Test on different screen sizes:
- [ ] Mobile (320px - 480px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1280px+)

### 4. Performance Testing (Optional)
Run Lighthouse audit:
```bash
# Install Lighthouse
npm install -g lighthouse

# Run audit
lighthouse https://syed-reza98.github.io --view

# Check scores:
# - Performance: Target 90+
# - Accessibility: Target 95+
# - Best Practices: Target 95+
# - SEO: Target 90+
```

---

## Troubleshooting

### Build Fails
**Issue:** `pnpm build` fails with TypeScript errors

**Solution:**
```bash
# Check for errors
pnpm build 2>&1 | tee build.log

# Fix TypeScript errors in reported files
# Common issues:
# - Missing imports
# - Type mismatches
# - Path resolution issues

# Verify tsconfig.json paths:
# "@/*": ["./src/*"]
```

### GitHub Actions Fails
**Issue:** Workflow fails during deployment

**Solutions:**
1. Check workflow logs in GitHub Actions tab
2. Verify `next.config.ts` has `output: "export"`
3. Ensure no server-side features used (no getServerSideProps)
4. Check GitHub Pages is enabled in repository settings
5. Verify workflow permissions (read/write)

### Site Shows 404
**Issue:** https://syed-reza98.github.io shows 404

**Solutions:**
1. Wait 2-5 minutes after first deployment
2. Check GitHub Pages settings (should show "Your site is published")
3. Verify `gh-pages` branch exists and has content
4. Check repository name is exactly: `syed-reza98.github.io`
5. Ensure repository is public (or you have GitHub Pro for private sites)

### Styles Not Loading
**Issue:** Site loads but looks unstyled

**Solutions:**
1. Check browser console for CSS loading errors
2. Verify build output includes CSS files: `ls out/_next/static/css/`
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Check `next.config.ts` doesn't have incorrect `basePath` or `assetPrefix`

### Links Don't Work
**Issue:** Navigation or external links broken

**Solutions:**
1. Check all `href` attributes in Link components
2. Verify anchor links match section IDs (#about, #skills, etc.)
3. Ensure external links have `target="_blank"` and proper `rel`
4. Check hash routing works with static export

---

## Rollback Plan

If deployment has critical issues:

```bash
# Option 1: Revert to previous commit
git log --oneline  # Find previous working commit
git revert <commit-hash>
git push origin main

# Option 2: Reset to previous commit (use with caution)
git reset --hard <previous-commit-hash>
git push origin main --force

# Option 3: Restore previous gh-pages branch
git checkout gh-pages
git reset --hard <previous-working-commit>
git push origin gh-pages --force
```

---

## Success Criteria

Deployment is successful when:
- ✅ Site loads at https://syed-reza98.github.io
- ✅ No console errors in browser DevTools
- ✅ All sections render correctly
- ✅ Navigation and interactions work
- ✅ Mobile responsive design functions
- ✅ Theme toggle works
- ✅ All links open correctly
- ✅ Accessibility features functional (skip link, keyboard nav)

---

## Next Actions After Deployment

1. **Share your portfolio:**
   - Update LinkedIn profile with portfolio link
   - Add link to GitHub profile README
   - Share on social media

2. **Monitor and iterate:**
   - Check Google Analytics (if added)
   - Collect feedback from viewers
   - Plan content updates (new projects, blog posts)

3. **Continuous improvement:**
   - Run Lighthouse audits periodically
   - Update dependencies regularly
   - Add new features from enhancement list

---

**Ready to deploy?** Follow the steps above and your portfolio will be live! 🚀
