# Summary

This is a project used to showcase how I would make an app in Next.js using external APIs. With the app, users can browse pictures of dogs and pin their favorites with a small comment.

# Overview

## Pages
The app will be divided into the following pages.

### Landing page
A basic page that introduces the app.

### Breed list page
A page where the user chooses dog breeds from a list.

### Dog collection page
A page that shows pictures of the selected dog breed.  

## Layout and modals
Besides the pages, there will also be other more loosely coupled elements.

### Layout
Every page will be contained inside the layout element.

### Sidebar
All pinned dogs will be visible and can be unpinned from the sidebar of the layout.

### Pin modal
A modal that contains a form which lets the user attach a comment to the pictures they want to pin.

# Tasks

Install and setup frameworks (next.js, material-ui, useSwr, js-cookie, cypress).
Estimate: 1 hour

Create page layout (including app icons and containers).
Estimate: 1 hour 

Create the landing page.
Estimate: 1 hour

Create the breed list as a page that can be statically genereated.
Estimate: 2 hours

Create the dog collection as a page that will be server-side rendered.
Estimate: 2 hours

Create the pin modal.
Estimate: 3 hours

Create a collapsible sidebar with a list of pinned dogs that can be viewed and removed.
Estimate: 3 hours

Create an automated test for when a user pins, and unpins a Golden Retriever.
Estimate: 2 hours

# Libraries

Next.js will be used because that is the entire point of this showcase. 😁

UseSWR will be used to handle remote fetching because it also handles state managament of the fetched resources.

Material-UI will be used as the designated design framework and provide all visual components. It saves a lot of time and deals with strange browser specific behaviour.

js-cookie will be used to handle cookies, and basically act as a substitute for having a remote storage.

Cypress will be used for End-2-End testing. It might be extremely overkill to get out the big Cypress-Gun for a small and silly dog app, but it will be so much fun!

# Thoughts

To be filled out later...

# Credit

https://dog.ceo/
Thank you very much for all the free adorable pictures