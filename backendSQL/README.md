Download and install XAMPP at https://www.apachefriends.org/index.html

If you are using a Linux machine, you can run the following lines to start/stop XAMPP server/database (assuming you installed xampp at the default location):

```
sudo /opt/lampp/lampp start
sudo /opt/lampp/lampp stop
```
You can access the database dashboard at http://localhost/phpmyadmin

You will need to install a global dependency by running:

```
npm install -g nodemon
```

To start the server, you need to:

1. set up your local MySQL database and table
2. set up the proper user who has access to the database and table
3. replace the variables in the .env file (e.g., USER, PASSWORD)
4. start the server by running "npm start"

Here is the script that you can use to create the database and table:

```
CREATE DATABASE Tasks;
USE Tasks;
CREATE TABLE tasks (
     _id VARCHAR(100) NOT NULL,
     text VARCHAR(30) NOT NULL,
     reminder BOOLEAN NOT NULL,
     day VARCHAR(30) NOT NULL,
     PRIMARY KEY (_id)
);
```