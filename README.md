  # Summary

This is a project used to showcase how I would make an app in Next.js using external APIs. With the app, users browse pictures of preferred dog breed and pin their favorites with a small comment.

# How-To-Run

Go to the solution folder and run the following.

`````Bash
npm run dev
`````

To run the cypress test, use the following instead.

`````Bash
npm run cypress
`````

# Overview
This is a short overview of the different high-level components the app will be made of. The app will be divided into pages and more loosely coupled elements like modals, sidebars and the top-level layout component.

**Layout**
Every page will be contained inside the layout element.

**Landing page**
A basic page that introduces the app.

**Breed list page**
A page where the user chooses a dog breed from a list.

**Dog collection page**
A page that shows pictures of the selected dog breed.

**Pin modal**
A modal that contains a form which lets the user attach a comment to the picture they want to pin.

**Sidebar**
A sidebar where all pinned dogs will be visible and can be unpinned.

# Tasks

Install and setup frameworks (next.js, material-ui, swr, js-cookie, cypress).
<br />
Estimate: 1 hour
<br />
Took: 20 minutes

Create page layout (including app icons and containers).
<br />
Estimate: 1 hour
<br />
Took: 40 minutes

Create the landing page.
<br />
Estimate: 1 hour
<br />
Took: 30 minutes

Create the breed list as a page that can be statically generated.
<br />
Estimate: 2 hours
<br />
Took: 1.5 hours

Create the dog collection as a page that will be server-side rendered.
<br />
Estimate: 2 hours
<br />
Took: 2 hours

Create the pin modal.
<br />
Estimate: 3 hours
<br />
Took: 1½ hous

Create a collapsible sidebar with a list of pinned dogs that can be viewed and removed.
<br />
Estimate: 3 hours
<br />
Took: 2 hous

Create an automated test for when a user pins, and unpins a picture.
<br />
Estimate: 2 hours
<br />
Took: 2 hous

Do the final polish and cleaning-up
<br />
Took: 2 hous

# Libraries

Next.js will be used because that is the entire point of this showcase. 😁

Material-UI will be used as the designated design framework and provide all visual components. It saves a lot of time and deals with strange browser specific behaviour.

js-cookie will be used to handle cookies which will be used to persist pinned dogs.

Cypress will be used for End-2-End testing. It might be a bit overkill, but even small silly dog apps deserves testing!

# Discussion

The breed list page uses SSG because I made the assumption that there won't be a new dog breed every week.

The dog collection page uses SSR because I again made an assumption that the API will occasionally be updated with new pictures. It probably doesn't happen often enough to warrant using SSR over SSG, since SSG is the usually the better way to serve pages. But since this is a showcase, I decided to mix things up a bit.

From a UX perspective, I would like to have 1 less click for pinning and unpinning. Probably have a pin/unpin icon appear over each image when the user is hovering over, depending on their state.

# Credit

https://dog.ceo/ - Thank you very much for all the free adorable pictures