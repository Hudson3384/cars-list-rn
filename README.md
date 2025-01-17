# Car List App

### A mobile application developed to provide users with a experience in viewing car brands and models. This project leverages modern technologies to ensure efficiency, scalability, and maintainability.

#### App Screenshots


| Login Screen                         | Car Brands Screen                         | Car Models by Brand Screen 3                          |
|----------------------------------|----------------------------------|----------------------------------|
| ![Login Screen](https://github.com/user-attachments/assets/07ec55e6-fa9c-4f36-b9e9-3821468f4073)  |  ![Car Brands Screen](https://github.com/user-attachments/assets/3beece74-9972-4f0e-8127-edbd0eb878e7)  | ![Car Models by Brand Screen](https://github.com/user-attachments/assets/c7840f31-9202-4bd5-a88c-ef78d020abe4)   |


		
  


#### Technologies Used
- **React Native**
- **Expo**
- **NativeWind**
- **TypeScript**

### Features

User Authentication: Integrates with an external login API to authenticate users.
Car Brands and Models Display: Fetches and displays a list of car brands and their respective models from an external API.

### Getting Started
To set up and run the project locally, follow these steps:

Clone the Repository:

```bash
git clone https://github.com/Hudson3384/cars-list-rn.git
```
Navigate to the Project Directory:

```bash
cd cars-list-rn
```
Install Dependencies:

```bash
npm install
```
Configure Environment Variables:

Copy the .env.example file to .env.
Update the .env file with the necessary environment-specific variables.
Start the Application:

```bash
expo start
```
Run the Application:

Use the Expo Go app on your mobile device to scan the QR code generated by the expo start command.
Alternatively, use an emulator to run the application.

### Troubleshooting
In case of issues with external APIs, the application provides fallback mechanisms:

#### Login Server Downtime:

Update the EXPO_PUBLIC_LOGIN_URL in the .env file to point to http://localhost:3000.

Navigate to the /server directory.

Run the following command to start the local login validation server:

```bash
docker-compose up -d
```
#### Cars API Server Downtime:

Update the EXPO_PUBLIC_API_URL in the .env file to point to http://localhost:3000.

Navigate to the /server directory.

Run the following command to start the local cars API server:

```bash
docker-compose up -d
```
