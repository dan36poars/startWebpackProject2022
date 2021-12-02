# Start a Project with Webpack 5 tool

# Get Started

## **Install:**

    $ npm install

if you receive a ***message error*** like:

    npm ERR! code ERESOLVE
    npm ERR! ERESOLVE unable to resolve dependency tree
    npm ERR! npm ERR! While resolving: 
    startwebpackproject@1.0.0 
    npm ERR! Found: pug@3.0.2
    npm ERR! node_modules/pug
    npm ERR!   pug@"^3.0.2" from the root project

You can type:

    $ npm install --force

to force the install.

## **Development Mode**
    $ npm run dev

it will serve the at address **http://localhost:3000**

## **Builder Mode**
    $ npm run prod

it will build a folder name **`dist/`** in root path project.

## **Server Mode**
    $ npm run server
  
it will serve the static folder **`dist/`** at address **http://localhost:8080**

## Structure Project (Main Folders)
├ src(**source folder**)
│ ├── data (**put data file \*.csv**)
│ ├── fonts (**put fonts**)
│ ├── images (**put images**)
│ ├── js (**\*.js files**) 
│ │   ├── commons (**common features**)
│ │   ├── contact (**folder contact page sample**)
│ │   ├── index (**folder index page sample**)
│ ├── pug
│ │   ├── _includes (**components for structures**)
│ │   │   ├── _contact.pug (**components**)
│ │   │   ├── _index.pug(**components**)
│ │   ├── contact.pug (**main structure**)
│ │   ├── index.pug (**main structure**)
│ ├── scss (**don't touch**)


## **Features available:**

* Bootstrap 5.1
* FontAwesome 4.7
* Sass
* PollyFill for IE 11
* Webpack 5
* CSV data file
* Custom fonts
* New Fonts
* Import Images
* Babel
* PostCSS
* ES5 (EcmaScript)
* Pug 3



Author: Daniel Corrêa 🚀