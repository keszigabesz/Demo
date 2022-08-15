# Goal of the Application and Installation Instructions

## *Goal of the Application*
The purpose of the Application is to record, maintain and manage the Micro-Lab microbiology laboratory's data on patients, doctors, samples, laboratory tests and reagents for tests.

---

## *Installation Instructions*

### **Required Applications and Softwares** (telepítés az adott sorrendben történjen)
1. Git: Download and install the Git application. Choose the appropriate installer for your computer's operating system (Windows, Mac, Linux): https://git-scm.com/downloads
2. Node JS: Download and install the latest LTS version: https://nodejs.org/en/
3. Angular framework: In the command line issue the command: `npm i -g @angular/cli`
4. Docker Desktop: Download and install the Docker Desktop application. Choose the appropriate installer for your computer's operating system (Windows, Mac, Linux): https://www.docker.com/get-started/

### **Download the Application**
1. In the command line clone the repository: `git clone https://github.com/keszigabesz/vizsgaremek.git`

### **Install Dependencies**
1. In the cloned repository change to the frontend directory.
2. Run the `npm i --force` command.
3. In the cloned repository change to the backend directory.
2. Run the `npm i` command.

### **Running Docker Desktop**
1. Start the Docker Desktop application.

### **Running the Application**
1. Change to the backend directory.
2. Run the `npm run deploy` command in the command line.
3. If the start was successfull, in the command line appeared: `micro_lab  | App is listening at http://localhost:3000`
4. In a browser open: http://localhost:3000

### **Error During Running the Application**
*If the previous method does not start the application, you can start the application in the following way.*
1. Change to the backend directory.
2. Run the `npm start` command to run the server.
3. In a new command line change to the frontend directory.
4. Run the `ng serve -o` command to build the angular application.
5. The application opens automatically in the default browser at http://localhost:4220
6. In this case you don't need to run Docker Desktop.

### **Login**  
*You must be logged in to edit the data:*  

- Username: username 
- Password: password1234

---
## *Endpoint Documentation*
A swagger documentation can be found at: https://localhost:3000/api-docs

---
## *User Story*
A User Story can be found at: https://github.com/keszigabesz/vizsgaremek/blob/main/README.md
