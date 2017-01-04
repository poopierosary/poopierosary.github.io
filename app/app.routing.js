"use strict";
var router_1 = require("@angular/router");
// *********************************************************************
// Import compoents from within the app here
var home_component_1 = require("./pages/home.component");
var about_component_1 = require("./pages/about.component");
//**********************************************************************
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=app.routing.js.map
