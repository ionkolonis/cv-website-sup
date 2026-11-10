# Recovered live website

This restores the live website with the rare logo update. Edit files in site/. Original build templates and unbundled Firebase source were lost; published HTML and JavaScript are preserved. Authentication, database rules and records are unchanged.

Logo odds: site/static/logos.js. Images: site/static/bogos/. Keep page.html and page/index.html copies consistent when editing.

From this folder run npm run build, then npx firebase-tools deploy --project cv-website-sup --only hosting. Use npx firebase-tools login if asked. Do not edit generated dist/. Commit and push edits separately for backup.

The older finalproject_COMPLETE folder remains your Flask archive. Use website-live for the public website. No private credentials or submissions are included.
