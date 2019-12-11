CREATE DATABASE REGEX;
CREATE USER 'regex_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'test12345';
SELECT USER FROM mysql.user;
GRANT ALL ON regex.* TO 'regex_user'@'localhost';
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'regex_user'@'localhost';
USE regex;