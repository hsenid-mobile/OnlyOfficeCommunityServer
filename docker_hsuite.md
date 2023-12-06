# Changes done to OnlyOffice docker containers during initial implementation

* Since modifying the source code from onlyoffice was unavailable during initial deployment using docker, certain changes were done inside the docker containers, for rebranding purposes.
* All changes done are recorded here

## Loading Screen

* Certain colors were changed and logos replace during the rebranding
* Main logo in the center was replaced by the hSuite logo.

# Logos replaced per module

## Document Server

* Document server consisted of logos on the top left of the screen.
* 86x20 SVG fully white.
* Path `/web-apps/apps/common/main/resources/img/header/header-logo_s.svg`

## Control Panel

* Main control panel logo on top left
* 185x35 SVG Colored Dark
* Path `/var/www/onlyoffice/controlpanel/www/public/stylesheets/images/logo.svg`
* Control panel page favicon
* 16x16 ICO Colored Dark
* Path `/var/www/onlyoffice/controlpanel/www/public/stylesheets/images/favicon.ico`

## Community Server

#### **Portal Configuration Page**

* Main taskbar logo
* 142x23 SVG Colored Light
* Path `var/www/onlyoffice/WebStudio/skins/default/images/logo/light_small_general.svg`

#### Home Page

* Taskbar logo (top left)
* 142x23 SVG Colored Light
* Path `/var/www/onlyoffice/WebStudio/skins/default/images/logo/light_small.svg`\`

#### Module logos in the home page

* All module logos are in 100x100 SVG format.
* They are in different file paths inside the community server but all the files have the same name.
* CRM - `/var/www/onlyoffice/WebStudio/Products/CRM/App_Themes/default/images/product_logolarge.svg`
* Community - `/var/www/onlyoffice/WebStudio/Products/Community/App_Themes/default/images/product_logolarge.svg`
* Documents - `/var/www/onlyoffice/WebStudio/Products/Files/App_Themes/default/images/product_logolarge.svg`
* People - `/var/www/onlyoffice/WebStudio/Products/People/App_Themes/default/images/product_logolarge.svg`
* Projects - `/var/www/onlyoffice/WebStudio/Products/Projects/App_Themes/default/images/product_logolarge.svg`
* Calendar - `/var/www/onlyoffice/WebStudio/addons/calendar/App_Themes/default/images/product_logolarge.svg`
* Mail - `/var/www/onlyoffice/WebStudio/addons/mail/App_Themes/default/images/product_logolarge.svg`
* Talk - `/var/www/onlyoffice/WebStudio/addons/talk/App_Themes/default/images/product_logolarge.svg`
* Other logos that are not visible in the homepage can be added manually in the settings page by an administrator.

#### About Company Screen

* Light Mode - 432x70 PNG
* Path - `/var/www/onlyoffice/WebStudio/skins/default/images/logo/about_dark.png`
* Dark Mode - 432x70 PNG
* Path - `/var/www/onlyoffice/WebStudio/skins/default/images/logo/about_light.png`