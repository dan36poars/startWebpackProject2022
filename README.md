# Start a Project with Webpack 5 tool

# Get Started

## **Install:**

    npm install

if you receive a ***message error*** like:

    npm ERR! code ERESOLVE
    npm ERR! ERESOLVE unable to resolve dependency tree
    npm ERR! npm ERR! While resolving: 
    startwebpackproject@1.0.0 
    npm ERR! Found: pug@3.0.2
    npm ERR! node_modules/pug
    npm ERR!   pug@"^3.0.2" from the root project

You can type:

    npm install --force

to force the install.

## **Development Mode**
    npm run dev

it will serve the at address **http://localhost:3000**

## **Builder Mode**
    npm run prod

it will build a folder name **`dist/`** in root path project.

## **Server Mode**
    npm run server
  
it will serve the static folder **`dist/`** at address **http://localhost:8080**

## Structure Project (Main Folders)

        ├ src(**source folder**)
        │ ├── data (**put data file \*.csv**)
        │ ├── fonts (**put fonts**)
        │ ├── images (**put images and the favicons image**)
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

## **How to install favicon:**
1) go to site: `https://www.favicon-generator.org/`
2) upload your image in PNG, JPG, GIF.
3) Download the folder generated.
4) paste the images inside `images/` folder
5) the `manifest.json` and `browserconfig.xml` files copy to `data/` folder

6) change code colors in meta tag inside the `index.pug` and `contact.pug` files or another page that your created inside the attribute `content=#000000`. That color affect the favicon background color for other devices.

7) put inside the `images/` folder your desing `favicon.png` and `favicon.svg` files with transparent background. use this names.

if you want the transparent favicon comment the other lines link tag leaving these:

        link(rel="icon" type="image/svg+xml" href="assets/images/favicon.svg")
        link(rel="icon" type="image/png" href="assets/images/favicon.png")

or cleaner the background of images download from site `https://www.favicon-generator.org/` on editor that your preference.

And that is it!!!

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
* Favicon support



Author: Daniel Corrêa 🚀