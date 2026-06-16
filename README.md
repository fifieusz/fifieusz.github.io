# Filip Dominik Niewiadomski Portfolio

This repository contains a static one-page CV and portfolio website for GitHub Pages.

## 1. Upload your profile photo

1. Add your photo to the `assets` folder.
2. Rename it to `profile.jpg`.
3. The final path should be:

```text
assets/profile.jpg
```

Use a clear portrait photo with enough light. A square or vertical image works best.

## 2. Upload your CV PDF

1. Add your CV PDF to the `assets` folder.
2. Rename it to `Filip_Niewiadomski_CV.pdf`.
3. The final path should be:

```text
assets/Filip_Niewiadomski_CV.pdf
```

The "Last ned CV" button in `index.html` already points to this file.

## 3. Enable GitHub Pages

1. Open your repository on GitHub: `fifieusz.github.io`.
2. Go to `Settings`.
3. Open `Pages` in the left menu.
4. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Click `Save`.

GitHub Pages can take a few minutes to publish after the first setup.

## 4. Final website link

Because this is a user GitHub Pages repository, the website should be available at:

```text
https://fifieusz.github.io/
```

## Editing the website

- Main content: `index.html`
- Design and responsive layout: `style.css`
- Mobile navigation, profile-image fallback and subtle reveal animations: `script.js`
- Images and downloadable files: `assets/`

No build step, framework, backend, database or paid service is required.
