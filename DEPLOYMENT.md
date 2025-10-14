# Deployment Instructions for GitHub Pages

This document provides step-by-step instructions for deploying the Next.js portfolio to GitHub Pages.

## Prerequisites

- The repository is already set up with GitHub Pages support
- GitHub Actions workflow is configured (`.github/workflows/deploy.yml`)
- Next.js is configured for static export (`next.config.ts`)

## Automatic Deployment

The portfolio is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

### Steps:

1. **Merge the PR to main:**
   ```bash
   # This will trigger the GitHub Actions workflow automatically
   git checkout main
   git merge copilot/develop-nextjs-portfolio
   git push origin main
   ```

2. **GitHub Actions will:**
   - Install dependencies
   - Build the Next.js project with Turbopack
   - Export static files to the `out` directory
   - Deploy to GitHub Pages

3. **Access your portfolio:**
   - URL: `https://syed-reza98.github.io`
   - The deployment typically takes 2-3 minutes

## Manual Deployment (Alternative)

If you need to deploy manually:

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **The static files will be in the `out` directory**

3. **You can test the production build locally:**
   ```bash
   npx serve out
   ```

## GitHub Pages Configuration

Ensure GitHub Pages is configured correctly in your repository settings:

1. Go to: `Settings` → `Pages`
2. Source: `GitHub Actions` (should be selected automatically)
3. Custom domain (optional): Configure if needed

## Troubleshooting

### Build Fails
- Check the GitHub Actions logs in the `Actions` tab
- Verify all dependencies are installed correctly
- Ensure `package-lock.json` is committed

### 404 Errors
- Make sure `.nojekyll` file exists in the `public` directory
- Check that `output: "export"` is set in `next.config.ts`
- Verify the base path configuration if using a custom domain

### Images Not Loading
- Ensure `images.unoptimized: true` is set in `next.config.ts`
- Use relative paths for local images
- Check that images are in the `public` directory

## Environment Variables

If you need to add environment variables:

1. Go to: `Settings` → `Secrets and variables` → `Actions`
2. Add new repository secrets
3. Reference them in the workflow file

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use the custom domain

## Monitoring

- Check deployment status in the `Actions` tab
- View live site at: https://syed-reza98.github.io
- Monitor build times and optimize as needed

---

**Note:** The first deployment may take a few minutes. Subsequent deployments are typically faster due to caching.
