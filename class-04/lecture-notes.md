# Class 04 Lecture Notes

## Links from Today's Class
- [Lecture Notes with Pair Programming Instructions](lecture-notes.md)
- [Code Review Demo Code](inclass-code-review/app.js)
- [CSS Positioning Demo Code](inclass-demo-positioning/style.css)
- [CodePen: CSS Positioning Demo](https://codepen.io/reyjroliva/pen/gOKpaaz)
- [Anatomy of a Function Whiteboard](https://reyoliva373652.invisionapp.com/freehand/Anatomy-of-a-Function-UB6nfNgma?dsid_h=35697c2acc4ce2fccc3087774ca358127d9c68b4169b8adff1b5c173dd74dc78&uid_h=b95583210544a4295593501b546841c264bd8d0e02dd00a2c56517dab88833d4)
- [Functions REPLIT](https://replit.com/join/nbcekecybc-reynaldooliva)


## Functions

-  A data type!

### What is a function??
- Reusable piece of code
- group of statements that perform a task or calcuate a value stored in structure that prevents them from running until the function is 'called' or 'invoked'
  - input -> processing -> output

### Why od we use functions?
- reusable
- easy to read
- efficient (save us time)
- keep code dry (clean) - DON'T REPEAT YOURSELF
- prevent bugs (limit them, easier to debug)
- Quick patches, iterations on code (single source of truth for your operations)
- performs actions!

### 2 Step Process
- Define / Declare 
- Call / Invoke

## CSS Positioning

2 types

- static-type
- relative-type
  - relative
  - absolute
  - fixed

### Static - standard - element sits where it normally

### Position Relative

Elements that are `position: relative` can be moved out of their normal flow position while still taking up the same space. This is achieved by utilising those offset properties (top, bottom, left, right) to offset the element, relative to itself.

### Position Absolute

Essentially does the same thing as position: relative, with two key differences:
The element is taken out of normal flow and leaves no space behind.
The element is positioned relative to its nearest parent with a relative-type (relative, absolute, fixed) positioning.

### Position Fixed

fixed is the same as absolute with one key difference:
The element is positioned relative to the viewport.

## Pair Programming Instructions

### NAVIGATOR ROLE:

Direct the *driver* with the following steps:

On github.com:

- Tell the driver to fork your Repository.
- In GitHub, navigate the driver to **THEIR COPY** of the forked repo. This will have the driver's name followed by the name of the repo they forked.

``` js
   driverGitHub/repo-name
   forked from navigatorGitHub/repo-name
```

- Direct the driver to copy the link from the green button that says 'code'.

In the **driver's** terminal:

- Direct the driver to cd into Projects or 201 folder and use the command `git clone` followed by the link that you asked the driver to copy from GitHub
  - This will clone down the repo on to the driver's local machine
- Direct the driver to cd into the repo and use `code .` to open VSCode

In the **driver's** VSCode:

- Direct the driver to update your code.

In the **driver's** terminal:

- Instruct the driver to do an A-C-P and push the modified file(s) up to the **DRIVER'S COPY** of the forked repo.

Instruct the driver to return to GitHub.com:

- Navigate the driver to the **DRIVER'S COPY** of the forked repo and have them click on 'Pull Requests' in the options bar across the top of the screen.
- Below the heading that says Compare Changes, you will see a bar with two input fields. One says 'base' and one says 'compare'
- Set base to the repo the driver **FORKED FROM**
- Set compare to **DRIVER'S COPY OF THE REPO**
- Push the button to 'Create the Pull Request' and follow the directions on the next screen to 'Create Pull Request'

### NAVIGATOR'S NEXT STEPS

The Navigator will then do the following on GitHub.com:

- Go to your repository and navigate to the 'Pull Requests' in the options bar across the top of the screen.
- Click on the open 'Pull Request' that the **driver** initiated.
- Review the pull request and then merge the changes.

In the **navigators's** terminal:

- cd into your repo and do a `git pull origin main` to pull down the accepted changes from the 'Pull Request'.