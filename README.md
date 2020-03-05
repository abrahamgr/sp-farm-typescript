# Introduction 
The solution contains 2 projects with different approaches how to use typescript. This example is for SharePoint but you can implement in any version.

## Requirements
Install latest version of nodejs.
All packages are included on the `package.json` file.

# Typescript.Simple
This example only compiles typescript to javascript without using modules, it allow us to minimize typing and types issues.
You dont need to install anything else, just create ts files and it will compiles .js and .map files in the same location, then you can load into the webparts or whatever.
If you need to use functions from another files you need to work with namespaces to achieve it.

# Typescript.Webpack
This is a more complex example when you can work with npm modules and compile into javascript to use in the webparts. Also we compile sass to create separate css files.
We included PnPjs modules to create an example.

## Compile typescript
We use webpack to compile javascript based on the `webpack.config.js` you need to add the entries on this file to create separated js files.

Example create a `home.js` file from `home.ts` and `script.js` from `main.ts`:
````
entry: {
    home: "home.ts",
    script: "main.ts"
}
````

## Compile SASS
To compile sass we use the `gulp-sass` module to do it and generates the files into a specific folder.

## Gulp
We use gulp to compile typescript and sass at the same time with only one command, if you need to add new tasks you can do it in the files `gulpfile.js`.


### Install the packages.

`
npm i
`
### Build 

`
npm run build
`
### Watch files
It allow us to ru the command and continue working with the files without run each time the build command. It only compiles sass of you modify `.scss` files and it only compiles typescript if you modify `.ts` files. 

`
npm run watch
`