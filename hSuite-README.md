# Modifications done whe compiling into local server

## MYSQL configurations

* On some mysql versions, when running the onlyoffice.sql file in the build/sql/ directory, there can be an issue with the sql mode. Due to a zero default value issue in the 'res_files' table.  

* If so, you need tochange the sql-mode - modify th my.ini file as follows :

* [mysqld]
* sql_mode = NO_ENGINE_SUBSTITUTION