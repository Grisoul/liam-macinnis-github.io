# Portfolio Redesign and Migration

# Goal
The goal of this project is to migrate the existing portfolio website that was created through pure HTML, CSS, and JavaScript to a React/Next.js project.

Much of the code can likely be reused with little to no tweaks required, but simply adjusted into a component-based architecture to work with React and Next.js

# What is not included
This project should not become a full rework of the website, but instead focus on migrating existing code, finishing incomplete functionality such as mobile responsiveness, and small tweaks to the visual design

# File Structure
- app/
    - layout.tsx
    - page.tsx
    - globals.css
- components/
    - Header/
        - Header.tsx
        - Header.module.css
    - Hero/
        - Hero.tsx
        - Hero.module.css
    - About/
        - About.tsx
        - About.module.css
    - Experience/ (Added after the initial migration is complete)
        - Experience.tsx
        - Experience.module.css
    - Skills/
        - Skills.tsx
        - SkillCard.tsx
        - Skills.module.css
    - Projects/
        - Projects.tsx
        - ProjectCard.tsx
        - Projects.module.css
    - Footer/
        - Footer.tsx
        - Footer.module.css
    - ThemeToggle/
        - ThemeToggle.tsx
        - ThemeToggle.module.css
    - TypeWriterText/
        - ThemeToggle.tsx
        - ThemeToggle.module.css
- data/
    - skills.ts
    - projects.ts
    - experience.ts
- types/
    - portfolio.ts
- public/
    - images/
    - Liam_MacInnis_Resume.pdf

# Branching Strategy
The existing website will remain available during development

- Create 'rebuild/nextjs' from the current production branch
- Complete and test the migration on the rebuild branch
- Do not change GitHub Pages publishing configuration until the static export is ready
- Merge into main only after the production build and deployment workflow is verified

# Migration Process

## Step 1: Top-level Migration and Setup
Create Next.js project and set up the framework, including the app/page.tsx with each component that will be added commented out. Then create each of the components as TODO's

- [x] Create Next.js Project
- [x] Set up folder structure as shown above
- [x] Edit page.tsx and add the structure
- [x] Create each component as an empty function
- [x] Create skills.ts, projects.ts, and experience.ts, leave them empty for now. Existing data for skills and projects will be migrated
- [x] Migrate all images used, not the outdated resume however, will decide later on a good resume to upload
- [ ] Migrate global styling

## Step 2: Header Migration
This consists of primarily the navbar

- [ ] Migrate the navbar
- [ ] Migrate the styling for the navbar
- [ ] Migrate the dark mode/light mode button (This might be its own component)
- [ ] Finish the mobile-responsive styling

## Step 3: Hero Migration
This consists of the introduction, the typewriter effect, the resume and github links, and the image of me

- [ ] Migrate the hero section
- [ ] Typewriter effect is its own component, create it
- [ ] Resume and Github buttons might come from a button component

## Step 4: About Migration
This consists of the short paragraph describing me, along with basic information covering education, location, degrees, and contact info

- [ ] Migrate the about section

## Step 5: Skills Migration
This consists of a grid layout of 3 columns and 2 rows, though rows can be expanded. Each skill category should by its own component as its reused for each skill list. This component can then accept a list of skills and create the layout automatically.

- [ ] Migrate the skills section
- [ ] Create the skill component
- [ ] Add the information for each skill in order to create the layout

## Step 6: Projects Migration
Projects lists individual projects that can be academic, professional, or personal. These are separated from experience as it describes a specific project or problem I tackled and explaines the process, while expereince is a more high-level overview of what my general tasks were or what projects I worked on at a company.

- [ ] Migrate projects section
- [ ] Create a project component
- [ ] Add the information for each project to create the format automatically

## Step 7: Footer Migration
Footer is similar to header, just migrate over and complete the mobile responsiveness

- [ ] Migrate footer
- [ ] Complete mobile responsiveness feature

## Step 8: Migration Verification
Verify that the migrated website reproduces the existing website before adding new sections or substantially changing its content.

- [ ] Run the development server and confirm that every section renders
- [ ] Run the production build and resolve all build errors
- [ ] Check the browser console for errors and warnings
- [ ] Compare each migrated section against the original website
- [ ] Test navigation links and smooth scrolling
- [ ] Test the theme toggle
- [ ] Confirm that the selected theme persists after refreshing
- [ ] Test the typewriter animation through multiple complete cycles
- [ ] Confirm that timers and effects are cleaned up correctly
- [ ] Test the website at desktop, tablet, and mobile widths
- [ ] Test the mobile navigation
- [ ] Test keyboard navigation and visible focus states
- [ ] Confirm that all images and other static assets load
- [ ] Confirm that all external links open correctly
- [ ] Confirm that no migration-related placeholder components remain
- [ ] Confirm that the website can be statically exported

## Step 9: Content and Experience Update
After migration parity is achieved, update the portfolio to accurately represent current skills, experience, and projects.

- [ ] Review the existing website and identify outdated content
- [ ] Rewrite the About section to reflect my current education and career direction
- [ ] Create the Experience section
- [ ] Create the experience data structure and TypeScript types
- [ ] Add relevant professional and placement experience
- [ ] Review project information for confidential or employer-owned information
- [ ] Add completed hackathon projects
- [ ] Add relevant data analytics projects
- [ ] Replace the placeholder project
- [ ] Update the skills categories and remove unnecessary duplication
- [ ] Remove the placeholder skill category
- [ ] Update spelling, grammar, capitalization, and terminology
- [ ] Select and upload an updated résumé
- [ ] Verify that the résumé link opens the correct file
- [ ] Add a page title and description
- [ ] Add a favicon and social-sharing metadata
- [ ] Review all content from the perspective of a recruiter or hiring manager

## Step 10: Static Export and GitHub Pages Deployment
Configure the completed Next.js website as a static export and deploy it through GitHub Pages.

- [ ] Determine whether the website is deployed as a GitHub user site or project site
- [ ] Configure Next.js for static export
- [ ] Configure the correct base path if the website is a project site
- [ ] Confirm that the production build generates the static output directory
- [ ] Test the exported website locally
- [ ] Create the GitHub Actions deployment workflow
- [ ] Configure GitHub Pages to use GitHub Actions
- [ ] Commit and push the completed deployment configuration
- [ ] Verify that the GitHub Actions build succeeds
- [ ] Verify that the GitHub Pages deployment succeeds
- [ ] Test the deployed website on desktop and mobile
- [ ] Check every deployed image, link, and downloadable file
- [ ] Confirm that refreshing the deployed website does not produce a 404 error
- [ ] Merge the rebuild branch into main
- [ ] Perform a final production review

# Migration Acceptance Criteria

- [ ] All existing sections have been migrated.
- [ ] The Next.js production build completes without errors.
- [ ] The site can be exported statically.
- [ ] Desktop appearance matches or improves upon the original.
- [ ] Navigation works on desktop and mobile.
- [ ] Light and dark themes work and persist after refreshing.
- [ ] Typewriter animation starts, loops, and cleans up correctly.
- [ ] All project, GitHub, social, and email links work.
- [ ] All meaningful images have alternative text.
- [ ] No placeholder content remains.
- [ ] The current résumé is available.
- [ ] GitHub Pages deploys successfully.