# Modifications done when compiling into local server

## MYSQL configurations

* On some mysql versions, when running the onlyoffice.sql file in the build/sql/ directory, there can be an issue with the sql mode. Due to a zero default value issue in the 'res_files' table.
* Check the sql_mode by running `SELECT @@sql_mode`
* Usually, it should be set to `NO_ENGINE_SUBSTITUTION` (you can double check this by finding thesql_mode of an already running version of the software - try the mysql docker container in the Docker-CommunityServer repositary.)
* To change it find the `my.ini` file on windows in the mysql program files directory. Change the line to : `sql_mode = 'NO_ENGINE_SUBSTITUTION'`