# 1.1.1

- Updated copyright year

# 1.1.0

## Features

- Added login page
- Added forgot password page
- Added dashboard
  - Dash
  - Messages
  - Analytics

## Enhancements

- Footer last updated field now uses latest release publish date
- Chalice link now opens tab with Chalice new site instead of chalice's old site
- Updated employer

# 1.0.0

- Bumped portfolio api client version
- Added Rust technology card

# 0.8.0-beta

- Fixed bug that caused contact form to immediately contain error upon navigating to it on mobile.
- Updated challenges project link to new challenges repository.
- Updated home hero image

# 0.7.2-beta

- Added link preview

# 0.7.1-beta

- Footer email is now positioned for better mobile experience
- Compressed images
- Fixed typos
- Updated date in footer to be dynamically updated.

# 0.7.0-beta

- Added Serverless technology card
- Added extent of content to Home, About and Career Projects pages
- Added email address to footer
- Fixed bug causing project summary cards to spill out of container
- Updated message on successful contact creation page
- Removed period/timestamp from project cards. Replaced with type of project

# 0.6.3-alpha

- Removed message length requirement
- Fixed bug that incorrectly sent empty phone number to API resulting in 400

# 0.6.2-alpha

- Fixed bug that didnt allow scroll position to be at top of screen after navigating to a different location.
- Fixed bug that did not allow phone number to be correctly validated

# 0.6.1-alpha

- Fixed bug making contact creation form refresh page on submit
- Integrated contact form with Portfolio Contact Message API and NodeJS Client
  - https://github.com/jsexton-portfolio/contact-message-service
  - https://github.com/jsexton-portfolio/portfolio-api-nodejs-client

# 0.6.0-alpha

- Added Chalice technology card
- Added Django technology card

# 0.5.0-alpha

- Removed yarn from project
- Updated dependencies
- Removed vscode settings
- Added career section
  - Added project cards
  - Added technology cards

# 0.4.0-alpha

- NavBar Logo is now displayed slightly larger
- Project Summary Cards now have a default minimum width of 300px

# 0.3.1-alpha

- Project Summary Cards on home page now elevate when moused over

# 0.3.0-alpha

- Added career page
  - Added Technologies section
    - Added technology cards and sections
  - Added Projects section
    - Added Project Cards with skeleton information
    - Renamed Home project cards as Project Summary Cards

# 0.2.2-alpha

- Contact form state is now persisted and will maintain when navigating away from contact form

# 0.2.1-alpha

- Fixed contact form select input label. Changed from 'Purpose' to 'Reason'

# 0.2.0-alpha

- Added contact page to website

  - Form validation
    - Name is required
    - Email is required and must be correctly formatted
    - Contact reason is required
    - Contact message is required and must be between 50 and 1000 characters
  - No API currently exists so page is not integrated with contact service.

# 0.1.2-alpha

- Added Justin Logo to website

# 0.1.1-alpha

- Fixed bug not allowing project cards on home page to be fully responsive.

# 0.1.0-alpha

- Added initial project infrastructure
- Added material-ui dependencies
- Added linting configuration
- Added initial navigation bar
- Added initial footer
- Added initial home page with skeleton content
- Added initial about page with skeleton content
