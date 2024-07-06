## Angular Application Setup with Firebase and Configuration Guide

**Prerequisites**:
Ensure you have Node.js and npm installed using below command:
- `node -v`
- `npm -v`

## Installation Guide for Node.js (if not installed):

If Node.js is not installed on your machine, follow these steps to install it:

**Download Node.js**:

  - 1.Visit [nodejs.org.](https://nodejs.org/en/about/previous-releases)
  - 2.Download the LTS (Long Term Support) version for your operating system.
  - 3.Verify the installation by opening a terminal or command prompt by using command `node -v` and `npm -v`


## Angular 16 Setup

**Install Angular CLI**:
Install Angular 16 globally using the command

- Command: `npm install -g @angular/cli@16.0.1`


**Verify Angular CLI Installation**
- Check the installed version of Angular CLI using command `ng v`

 **Create a New Angular Application**

- Command: `ng new your_application_name`

- here I named test-application : `ng new test-application`

During setup, provide the following inputs:
   
   - Would you like to add Angular routing? (y/N): y
   - Which stylesheet format would you like to use? I recommended you to Choose scss

 **Navigate to Application Directory**

- Navigate to project directory using command `cd directory_name`

**Navigate to Application Directory**

- Start the development server using command `ng s`

- You will be prompted to share usage data. Choose y.

- The application will be running on http://localhost:4200/.
  

## Additional Steps

**Create a Module for Angular Material**

Generate a new module under src folder 

- Open Terminal and generate module by using command `ng g m angular-material`

- Import all Angular Material components you plan to use into the new AngularMaterialModule. You can do this by given file. [Angular Material File](src/app/angular-material/angular-material.module.ts)

 **Install Angular Material**

Run the following command to add Angular Material

- `ng add @angular/material`

**I Recommended you to Follow the prompts:**

- Choose a prebuilt theme name: Indigo/Pink
- Set up global Angular Material typography styles: y
- Set up browser animations for Angular Material: y

**Import Angular Material Modules**

- Import the Angular Material modules in app.module.ts.  [App Module.ts](src/app/app.module.ts)

**Install Angular Flex Layout**

- Install Angular Flex Layout using command `npm i @angular/flex-layout`

- Import the Flex Layout module in app.module.ts. [App Module.ts](src/app/app.module.ts)


## Angular CLI Commands

**Generate a New Component**

- To generate a new component in Angular, use the following command `ng g c component-name`

**Generate a New Service**

- To generate a new service in Angular, use the following command `ng g s service-name`

**Generate a New Pipe**

- To generate a new pipe in Angular, use the following command  `ng g p pipe-name`

**Generate a New Directive**

- To generate a new directive in Angular, use the following command `ng g d directive-name`

**Generate a New Module**

- To generate a new module in Angular, use the following command  `ng g m module-name`

**Generate a New Class**

- To generate a new class in Angular, use the following command `ng g cl class-name`

**Generate a New Module with Routing**

- To generate a new module with routing in Angular, use the following command `ng g m module-name --routing`

**Generate a New Interface**

- To generate a new interface in Angular, use the following command `ng g i interface-name` 

**Generate a New Guard**

- To generate a new guard in Angular, use the following command  `ng g g guard-name`

**Run Unit Tests**

- To run unit tests, use the following command  `ng test`

**Run End-to-End Tests**

- To run end-to-end tests, use the following command `ng e2e`

**Additional Resources**

- For a complete list of Angular CLI commands and their options, refer to the Angular CLI documentation. 

[ Angular CLI documentation](https://v17.angular.io/cli?c=bolhadev?c=bolhadev)


## Firebase Configuration

**Install Firebase**

- Install Firebase and AngularFire using command npm install firebase @angular/fire --legacy-peer-deps

- Verify the installation in package.json. [package.json File](package.json)

**Set Up Firebase Project**

- 1.Go to the Firebase Console.
- 2.Click on "Add project" and follow the instructions to create a new Firebase project.
- 3.After the project is created, go to the "Project Settings" and click on the web icon (</>).
- 4.Register your app by providing a nickname and optionally setting up Firebase Hosting. Click "Register app".
- 5.You will be provided with Firebase configuration details. Copy this configuration.

**Configure Firebase in Angular**

- 1.Under the src folder, create a folder named environments.
- 2.In the environments folder, create a file named environment.ts and add the Firebase configuration.

**Initialize Firebase in app.module.ts**

- Import the Firebase and AngularFire modules in app.module.ts  [App Module.ts](src/app/app.module.ts)

**Hosting on Firebase**

Firebase provides a powerful platform for hosting web applications. Follow the steps below to host your application on Firebase.

**Step 1: Install Firebase CLI**

- First, you need to install Firebase CLI (Command Line Interface) tools. This allows you to interact with Firebase services from the command line. If you already installed ignore it.

- Open your terminal and run the command  `npm install -g firebase-tools`

**Step 2: Initialize Your Project**

Before deploying your project, you need to initialize it with Firebase.

  - Login to Firebase: Authenticate with your Firebase account by running the command  `firebase login`
  
  - This will open a browser window where you can log in to your Firebase account. Once authenticated, return to your terminal.

  - Initialize Firebase: Navigate to your project directory in the terminal and run `firebase init`

 - Follow the on-screen instructions to configure Firebase for your project. You will be prompted to:

   - 1. Select Firebase features (choose "Hosting").
   - 2. Select your Firebase project.
   - 3. Set up your public directory (usually build or public).
   - 4. Configure as a single-page app (if applicable).
   - 5. Set up automatic builds and deploys (optional).
   - 6. build your application 
   - 7. Deploy to firebase using command `firebase deploy`

**Deploy to Firebase**

- Build the application using command `ng build`

**Deploy to Firebase:**

- Deploy to Firebase using command `firebase deploy`

## Contact Information:
For any questions or further information, feel free to contact:

- **Name:** Dheepan S
- **Email:** csdheepan18@gmail.com
- **Website:** [dheepanportfolio.in](https://dheepanportfolio.in)