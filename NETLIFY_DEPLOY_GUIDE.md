# MHGA - Netlify Deployment Guide

## Quick Deploy Steps

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Push this project to the repository

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account and select your MHGA repository

3. **Build Settings** (should auto-detect from netlify.toml)
   - Base directory: `frontend`
   - Build command: `npm install --legacy-peer-deps && npm run build`
   - Publish directory: `frontend/build`

4. **Environment Variables** (already set in netlify.toml)
   - NODE_VERSION: 20
   - CI: false
   - DISABLE_ESLINT_PLUGIN: true

5. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete

## Files Created for Netlify

- `/netlify.toml` - Main Netlify configuration
- `/.nvmrc` - Node version (20)
- `/frontend/.nvmrc` - Node version (20)
- `/frontend/.npmrc` - npm config (legacy-peer-deps)
- `/frontend/.yarnrc.yml` - Yarn config

## Update Content

Edit `/frontend/src/data/mock.js` to update:
- `contractAddress` - Your contract address
- `buyLink` - Pump.fun link
- `socials.twitter` - Twitter/X link
- `socials.telegram` - Telegram link
- `socials.discord` - Discord link
- `memeGallery` - Your meme images

## Domain Setup

After deployment, you can add a custom domain in:
Netlify Dashboard → Site settings → Domain management
