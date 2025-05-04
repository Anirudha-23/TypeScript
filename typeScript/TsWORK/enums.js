"use strict";
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "admin";
    userRoles["GUEST"] = "guest";
    userRoles["SUPER_ADMIN"] = "super_admin";
})(userRoles || (userRoles = {}));
userRoles.GUEST;
userRoles.ADMIN;
userRoles.SUPER_ADMIN;
