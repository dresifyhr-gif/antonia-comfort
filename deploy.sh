#!/bin/bash
set -e

# ── Antonia Comfort — Netlify deploy ──────────────────────
# Requires: npm install -g netlify-cli
# First run: netlify login  →  netlify init
# After that: ./deploy.sh

echo ""
echo "Deploying to Netlify..."
echo ""

netlify deploy --prod --dir .

echo ""
echo "Deploy complete."
echo ""
