/**
 * @fileOverview Webkit Notification API jQuery Wrapper
 *
 * @see http://www.chromium.org/developers/design-documents/desktop-notifications/api-specification
 * @see http://www.html5rocks.com/en/tutorials/notifications/quick/
 *
 * @author azproduction
 * @licence MIT (c) azproduction 2011
 */
jQuery.notification=function(a,b){var c=function(){if(b.Notification&&(b.Notification.permissionLevel||b.Notification.permission))return b.Notification;var c=b.webkitNotifications;if(!c)return function(){var b={};return b.permission="unsupported",b.permissionLevel=function(){return"unsupported"},b.requestPermission=a.noop,b}();var d=["granted","default","denied"],e=function(b,d){if(d=d||{},b){var f=c.createNotification(d.iconUrl||"",b,d.body||"");return f.titleDir=d.titleDir||"auto",f.body=d.body||"",f.bodyDir=d.bodyDir||"auto",f.tag=d.tag||"",f.replaceId=d.tag||"",f.iconUrl=d.iconUrl||"",f.onclick=d.onclick||a.noop,f.onshow=d.onshow||a.noop,f.onerror=d.onerror||a.noop,f.onclose=d.onclose||a.noop,f.close=function(){f.cancel()},"granted"===e.permissionLevel()&&f.show(),f}};return e.permissionLevel=function(){return e.permission=d[c.checkPermission()]},e.permissionLevel(),e.requestPermission=function(d){return"default"!==e.permissionLevel()?(d(),void 0):(a(document).one("click",function(){if(c.requestPermission.length)return c.requestPermission(function(){e.permissionLevel(),d()}),void 0;c.requestPermission();var a=b.setInterval(function(){var c=e.permissionLevel();"default"!==c&&(b.clearInterval(a),d())},200)}),void 0)},e}(),d=function(b){var d=a.Deferred();if(!c.prototype)return d.reject("unsupported"),d.promise();"string"==typeof b&&(b={title:b}),b=b||{},b.autoclose="undefined"==typeof b.autoclose?!0:b.autoclose,b.timeout=b.timeout||1/0;var e=b.iconUrl||b.icon;return e&&(b.icon=e),c.requestPermission(function(){if("granted"!==(c.permission||c.permissionLevel()))return d.reject(c.permissionLevel()),void 0;var a=new c(b.title,b);isFinite(b.timeout)&&a.addEventListener("show",function(){setTimeout(function(){a.close()},b.timeout)},!1),b.autoclose&&a.addEventListener("click",function(){a.close()},!1),d.resolve(a)}),d.promise()};return d.permission=c.permission,d.permissionLevel=c.permissionLevel||function(){return c.permission},d.requestPermission=c.requestPermission,d}(jQuery,window);