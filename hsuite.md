# All changes made before compiling will be found here

# Modifications done whe compiling into local server

## MYSQL configurations

* On some mysql versions, when running the onlyoffice.sql file in the build/sql/ directory, there can be an issue with the sql mode. Due to a zero default value issue in the 'res_files' table.  

* If so, you need to change the sql-mode - modify the my.ini file as follows :

* [mysqld]
* sql_mode = NO_ENGINE_SUBSTITUTION

* onlyoffice.resources.sql not found in "C:\Users\hSenid\hsuite_repos\hsuite_v1\onlyofficecommunityserver\build\sql" directory. Copied from version 11.0.0
