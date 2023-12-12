# Modifications done when compiling into local server

## MYSQL configurations

* On some mysql versions, when running the onlyoffice.sql file in the build/sql/ directory, there can be an issue with the sql mode. Due to a zero default value issue in the 'res_files' table.
* Check the 'sql_mode' by running `SELECT @@sql_mode`
* Usually, it should be set to `NO_ENGINE_SUBSTITUTION` (you can double check this by finding the 'sql_mode' of an already running version of the software - try the mysql docker container in the Docker-CommunityServer repositary.)
* To change it find the `my.ini` file on windows in the mysql program files directory. Change the line to : `sql_mode = 'NO_ENGINE_SUBSTITUTION'` or whatever is the mode you found in the already running version.

## Adding Document Templates

* There are some sub modules that do not get cloned during the initial cloning.
* These include sample document templates found in the documents module.
* Some of these files are quite large (sample videos), therefore if you are using a size limited source control system, you can avoid or delete the larger files.
* To get them, navigate to the /OnlyOfficeCommunityServer directory and run `git submodule update --init --recursive`
* To delete the larger files, they will be in the `\web\studio\ASC.Web.Studio\Products\Files\DocStore` directory.
* You can also replace the sample video into a smaller size, that is what I have done.

## Modify the BuildandDeploy.bat file

* Paths in the run script need to be modified depending on your installation path.
* Mainly, the path of the MSBuild.exe needs to be changed. Currently it has been set to `C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools\MSBuild\Current\Bin\MSBuild.exe` as per the machine I am using.
* If you are unable to find the MSBuild.exe file, navigate to the `C:\` or home directory and run `dir /s /b "MSBuild.exe"` You will most likely find multiple files, so use the path most similar to the one mentioned above.

## Running the .bat script

* Make sure all services have been switched on (mysql, yarn etc)
