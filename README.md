## TEAM 38 - CAR COMPANION

# Prerequisites

Install Prerequisites on your Machine
Both for the back end and front end application check

- nodejs [official website](https://nodejs.org/en/) - nodejs includes [npm](https://www.npmjs.com/) (node package manager)

Also for the backend application:

- mongodb [official installation guide](https://docs.mongodb.org/manual/administration/install-community/) **Hint**: Make sure to follow all the installation guide, especially in Windows where you need to set the Environment Variables for mongod

- Git Bash (for Windows users only) [Installation Guide](https://gitforwindows.org/). **Hint**: You might need to open Git Bash as Administrator

# First Time Setup

1. Clone this repository in your machine

2. Open Terminal inside the `carcompanion-website` folder

3. Run `npm install` to install minor dependencies

4. Run `npm run bootstrap` to install all dependencies in both backend and frontend

# Development

1. Clone this repository in your machine

2. Open Terminal inside the `carcompanion-website` folder

3. Run this command
   ```
     npm run start
   ```
   ...**This wonderful script** is developed precisely to run the whole project in only one single command. It runs the backend and front end as well. Works with MacOS and Windows. Linux not tested yet.

# Contribution Rules

1. Checkout the develop branch on your machine

   ```
     git checkout develop
   ```
   
2. If you haven't done so make sure you first pull the latest changes so you have the latest version locally

   ```
     git pull 
   ```
   
3. After pulling from develop it is reccomended that you install any packages that were added, into your local machine:
   ```
     npm run bootstrap // in root folder
   ```
   or
   ```
     npm install // in /frontend folder
     npm install // in /backend folder
   ```

4. Create a new branch IN_description where IN = **I**ssue **N**umber ex:
   ```
     git checkout -b 12_add_dropdown_box
   ```
5. Write your amazing code

6. Commit your changes

   ```
     git commit -am 'Wrote amazing code'
   ```

7. Push your changes
   ```
     git push
   ```
8. [Create a pull request](https://github.com/ndricimrr/carcompanion-website/compare?expand=1)

9. Wait for reviews & review if necessary

10. Merge to `develop` after reviewed
