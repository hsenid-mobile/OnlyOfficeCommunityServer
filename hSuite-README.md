# Modifications done whe compiling into local server

## MYSQL configurations

* On some mysqlversion when running the onlyoffice.sql file in the build/sql/ directory, line 2339, there can be an issue with the sql mode. If so, modify th my.ini file as follows :

[mysqld]
sql_mode = NO_ENGINE_SUBSTITUTION
