# Marameo - Code_Connect

Code_Connect is a developer mentorship program aimed at supporting developers getting ready to enter the job market.

**Start Date:** June 17, 2024

## Working On:

- Polish current codebase
- Complete 2 other pages by Friday, Week 6 (07/26/2024)
  - <strike>Fix responsive filter tag container</strike>

[Media & News page](https://marameo-codeconnect.netlify.app/blocks/news-resource-page)
[Event page](https://marameo-codeconnect.netlify.app/blocks/events-page)

## Goals:

- Week 1-2 Target:

  - <strike>Approved Estimates (docs being worked on)</strike>
  - <strike>Theme Structure (+ repo) - Codebase setup</strike>
  - <strike>Header (static)</strike>
  - <strike>Footer</strike>
  - <strike>At least 1 block from the home page</strike>

- Week 3 Target:

  - <strike>Complete 90% of the page</strike>

- Week 4-5 Target:
  - Make further improvements to existing containers and css codes as per Mentor notes/corrections
  - Continue creating the other pages

## Tech used:

<img src="https://img.shields.io/badge/HTML5%20-%20?style=plastic&logo=html5&label=%E2%94%82&labelColor=rgba(15%2C%2066%2C%20110%2C%200.9)&color=rgba(20%2C%20132%2C%20167%2C%200.9)"> <img src="https://img.shields.io/badge/CSS3%20-%20?style=plastic&logo=css3&label=%E2%94%82&labelColor=rgba(15%2C%2066%2C%20110%2C%200.9)&color=rgba(20%2C%20132%2C%20167%2C%200.9)"/> <img src="https://img.shields.io/badge/JavaScript%20-%20?style=plastic&logo=javascript&label=%E2%94%82&labelColor=rgba(15%2C%2066%2C%20110%2C%200.9)&color=rgba(20%2C%20132%2C%20167%2C%200.9)"/>

## Optimizations

1. <strike>Footer Styling</strike>
2. <strike>Responsive Header/Nav</strike>
   - Create functional burger menu on Week 3 (JS)
3. <strike>Footer Flag Spacing on Responsive</strike>
4. <strike>Further organize classes name in accordance with the [BEM Naming Convention](https://getbem.com/naming/)</strike>
   - <strike>Maximize potential shared atoms/components and further optimize reusable codes as a result of organizing classes</strike>
5. <strike>Change files and class naming convention from camelCase to kebab-case</strike>
6. <strike>Switch some button elements to anchor</strike>
   - <strike>anchor strictly for linking to other pages</strike>
   - <strike>buttons if it's behavioral actions</strike>
7. <strike>Add inline width and height to images to prevent shifting during/after page load</strike>
8. <strike>Add basic description for alt properties in image for SEO and accessibility purposes</strike>
9. <strike>Create subfolders in css</strike>
   - <strike>i.e. css => atoms folder => button.css</strike>
   - <strike>i.e. css => block folder => nav.css</strike>
10. Refactor images on main page

- Fix inline width and height
- Appropriate width on css file in accordance with the inline width

## Notes

1. navi-hover put on display: none, and then display:block on havi-(linkname) on hover
   - don't forget to put navi\_\_properties on hover contents
2. Current issue: alt="xx" prevents inline width and height from taking place, causing layout shift.

## Resources:

1. [BEM Naming Convention](https://getbem.com/naming/)
2. [Bootstrap Breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/)
3. [Cumulative Layout Shift (CLS)](https://web.dev/articles/cls)
