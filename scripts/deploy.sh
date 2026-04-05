#!/bin/bash

cd /vercel/share/v0-project

# Configure git if needed
git config user.email "v0[bot]@users.noreply.github.com" || true
git config user.name "v0[bot]" || true

# Add all changes
git add -A

# Commit with message
git commit -m "feat: Update hero section, add skills section, services with images, and contact form integration

- Removed image card from hero section
- Added 'Abdellah Ait Lahbib Digital Artisan & Vibe Coder' below THE FUTURE OF DESIGN headline
- Added comprehensive skills section with 4 categories (Creative Suite, Vibe Coding, Growth & Marketing, AI Orchestration)
- Added 6 service categories with generated images (Branding, Logo Design, Website Design, UI/UX, Print on Demand, Digital Products)
- Enhanced contact form with n8n webhook integration ready
- Implemented Framer Motion animations throughout
- Full responsive design for mobile, tablet, desktop

Co-authored-by: v0[bot] <v0[bot]@users.noreply.github.com>"

# Push to remote
git push origin HEAD

echo "✓ Changes committed and pushed successfully!"
