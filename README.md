# Uptycs UI Interview

In this exercise you will handle a variety of UI tasks within the environment of the provided application. The tasks are based on real-life bugs and basic requests you would handle as a UI engineer at Uptycs.

Complete the tasks and answer the questions in each section below.

## Tasks

### The broken help button

The assets page has an issue with the help button. Using the latest version of Chrome, clicking the help button on the assets page causes the page to crash, presenting a whitescreen.

1. Fix the page so it does not crash the intro or asset pages.
      Answer: a)Added below style in Asset and Intro Page 
            helpPopoverPaper: {
                                width: 300
                              }
            <HelpButton paper={classes.helpPopoverPaper}></HelpButton>
            b) HelpButton chnages: 
                    classes={{
                                paper: paper
                              }}

2. What is the source of the issue?
      Answer:  helpButton used style = {{}}, which will accept inline style, not class name.
      PaperProps is defined as object  but withStyles() passes all style object to string classname.
      
3. How would you change the design/implementation of the `HelpButton` component to avoid this kind of error in the future?
    Answer:  To avoid future crash, added below line in HelpButton component.
            a) const paperStyle = typeof popoverStyle === 'object' ? popoverStyle : {};
            b)  classes={{
                            paper: paper
                        }}

### UptycsTable implementation

The assets page is a work-in-progress. The page fetches asset data but does not render it.

5. Update the `UptycsTable` implementation to render a table of assets received from the assets API. Refer to `AssetsTable.js` file for the props passed to `UptycsTable`. Use the [Material UI table components](https://material-ui.com/demos/tables/) to render the table, rendering the columns provided in the `columnDefinitions` object. A sample screenshot of what this should look like is shown below.
6. While the data is fetching, show a loading indicator.

![Asset table example](asset-table-example.png?raw=true "Asset table example")

## What to submit

You should submit a zip file or provide access to a source code repository that contains your updated version of this project.

Uptycs will be looking at overall code quality and completeness of work.

Visual design of your solution will not be assessed other than fitting in with the Material UI look and feel. Using off-the-shelf Material UI components for this exercise is perfectly fine.

## Project Reference

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It uses the [Material UI](https://material-ui.com/) and [Reach Router](https://reach.tech/router) libraries.

### Directory structure

```txt
/common           - common components used across the app
/pages            - components organized by specific page use
api.js            - mock API utility
App.js            - main application wrapper containing app title bar and side nav
ContentRouter.js  - router for primary page content
Navlist.js        - side nav content
```

### API utility

The api utility located at `/src/api.js` mocks a basic API interaction.

`api.get` accepts a URL string, returning a promise of the mocked API call result. The URLs are modelled after RESTish API patterns.

Examples:

#### API: Get all assets

```js
api.get("/assets").then(assets => {
  console.log(assets); // array of asset objects
});
```

#### API: Get asset by id

```js
api.get("/assets/123").then(asset => {
  console.log(asset); // asset object
});
```

#### Asset object example

```js
{
  id: 'c74c5f57-e32f-46e1-b7c6-aa2d0fd5eee4',
  hostname: 'elsieComputer',
  os: 'Mac OS',
  ip: '118.237.146.36',
  enrolledAt: new Date()
}
```

## Helpful links
