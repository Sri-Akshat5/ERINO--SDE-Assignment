# ERINO-Assignment
This is for ERINO SDE Internship Assignment - Contact Management - Mini Feature of a CRM ## Project Overview This project is a Contact Management App built with React for the frontend, Node.js for the backend, and MySQL (or any preferred database) for storing contact details. The goal of the project is to provide users with a simple interface for adding, viewing, and managing contacts. 

## Features 
Add a new contact (first name, last name, email, phone number, company, job title).
View a list of all saved contacts. 
Responsive and user-friendly UI.

## Technologies Used 
Frontend: React, Material-UI (for UI components), Axios (for making API requests). 
Backend: Node.js, Express. 
Database: MySQL (using Sequelize as the ORM). 
Version Control: Git, GitHub. 

## Prerequisites 
Node.js and npm installed on your machine. 
MySQL database (either local installation or use MySQL cloud-based service). 

## Setup and Installation Follow these steps to set up both the frontend and backend. 

### 1. Clone the Repository git clone https://github.com/Sri-Akshat5/ERINO-Assignment.git 

### 2. Backend Setup 
cd contact-management-backend 
npm install 

### 3. Frontend Setup 
cd contact-management 
npm install 

### 4. MySQL Database Setup Ensure that you have MySQL installed and running locally, or use a cloud-based MySQL service. Create a new database in MySQL: 

```
CREATE DATABASE contact_db; 
CREATE TABLE contacts
( id INT AUTO_INCREMENT PRIMARY KEY, firstName VARCHAR(255) NOT NULL, lastName VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, phoneNumber VARCHAR(255) NOT NULL, company VARCHAR(255), jobTitle VARCHAR(255) );
 ``` 

### 5. Configure Database Connection In the contact-management-backend folder, 
create a .env file with the following content to configure the database connection: 
``` 
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=contact_db
PORT=5000
 ```
Replace the password with your actual MySQL password 

### 6. Running the Application 
cd contact-management-backend 
npm start 

cd contact-management 
npm start 

### 7. Access the App After running both servers, navigate to 

http://localhost:3000 in your browser to access the Contact Management App. 

## Screenshots 
![Screenshot (37)](https://github.com/user-attachments/assets/ae9a1a87-54c5-4f0b-aa8b-1bf4ac92bc44)
![Screenshot (36)](https://github.com/user-attachments/assets/3a4dc2c1-de7f-4a89-8f4f-ca0cb8ec41e6)
![Screenshot (35)](https://github.com/user-attachments/assets/f2676c6f-ab7f-4b3f-884e-1504cacf0e51)
