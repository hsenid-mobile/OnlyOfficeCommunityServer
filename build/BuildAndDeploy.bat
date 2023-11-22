set Cultures=fr,de,es,ru,lv,pt-BR,pt,it,tr,el,zh-CN,pl,cs,uk,vi,fi,az-Latn-AZ,ko,ja,sl,sk,nl,bg
set YarnBuild=false
"C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools\MSBuild\Current\Bin\MSBuild.exe" msbuild\build.proj /fl1 /flp1:LogFile=Build.log;Verbosity=Normal /m -v:m
set BuildTargets=PrepareResourceNames;ResolveAssemblyReferences;CopyFilesToOutputDirectory
set ProjectReferenceBuildTargets=PrepareResourceNames;ResolveAssemblyReferences;CopyFilesToOutputDirectory
if %errorlevel% == 0 "C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools\MSBuild\Current\Bin\MSBuild.exe" msbuild\deploy.proj /fl1 /flp1:LogFile=Deploy.log;Verbosity=Normal /m -v:m
pause
