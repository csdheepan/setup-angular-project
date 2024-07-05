## Angular Application Setup with Firebase and Configuration Guide

**Prerequisites**:
Ensure you have Node.js and npm installed using below command:
- node -v
- npm -v

**Install Angular CLI**:
Install Angular 16 globally using the command

- Command: `npm install -g @angular/cli@16.0.1`


**Verify Angular CLI Installation**
- Check the installed version of Angular CLI using command- `ng v`

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

- ng g m angular-material

 ![Angular Material File](src/app/angular-material/angular-material.module.ts)

 **Install Angular Material**

Run the following command to add Angular Material

- `ng add @angular/material`

**I Recommended you to Follow the prompts:**

- Choose a prebuilt theme name: Indigo/Pink
- Set up global Angular Material typography styles: y
- Set up browser animations for Angular Material: y

**Import Angular Material Modules**

- Import the Angular Material modules in app.module.ts.

 ![App Module.ts](src/app/app.module.ts)

**Install Angular Flex Layout**

- Install Angular Flex Layout using command `npm i @angular/flex-layout`

- Import the Flex Layout module in app.module.ts.

![App Module.ts](src/app/app.module.ts)


## Firebase Configuration

**Install Firebase**

- Install Firebase and AngularFire using command npm install firebase @angular/fire --legacy-peer-deps

- Verify the installation in package.json.

**Set Up Firebase Project**

- 1.Go to the Firebase Console.
- 2.Click on "Add project" and follow the instructions to create a new Firebase project.
- 3.After the project is created, go to the "Project Overview" and click on the web icon (</>).
- 4.Register your app by providing a nickname and optionally setting up Firebase Hosting. Click "Register app".
- 5.You will be provided with Firebase configuration details. Copy this configuration.

**Configure Firebase in Angular**

- 1.Under the src folder, create a folder named environments.
- 2.In the environments folder, create a file named environment.ts and add the Firebase configuration.

**Initialize Firebase in app.module.ts**

- Import the Firebase and AngularFire modules in app.module.ts:

**Deploy to Firebase**

- Build the application using cmd ng build

**Deploy to Firebase:**

- Deploy to Firebase using cmd firebase deploy

## Contact Information:
For any questions or further information, feel free to contact:

- **Name:** Dheepan S
- **Email:** csdheepan18@gmail.com
- **Website:** [dheepanportfolio.in](https://dheepanportfolio.in)
