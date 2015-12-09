angular.module("testApp").run(["$templateCache",function(a){"use strict";a.put("app/account/login/login.html",'<navbar></navbar><div class=container><div class=row><div class=col-sm-12><h1>Login</h1><p>Accounts are reset on server restart from <code>server/config/seed.js</code>. Default account is <code>test@example.com</code> / <code>test</code></p><p>Admin account is <code>admin@example.com</code> / <code>admin</code></p></div><div class=col-sm-12><form class=form name=form ng-submit=vm.login(form) novalidate><div class=form-group><label>Email</label><input type=email name=email class=form-control ng-model=vm.user.email required></div><div class=form-group><label>Password</label><input type=password name=password class=form-control ng-model=vm.user.password required></div><div class="form-group has-error"><p class=help-block ng-show="form.email.$error.required && form.password.$error.required && vm.submitted">Please enter your email and password.</p><p class=help-block ng-show="form.email.$error.email && vm.submitted">Please enter a valid email.</p><p class=help-block>{{ vm.errors.other }}</p></div><div><button class="btn btn-inverse btn-lg btn-login" type=submit>Login</button> <a class="btn btn-default btn-lg btn-register" ui-sref=signup>Register</a></div><hr><div class=row><div class="col-sm-4 col-md-3"><oauth-buttons classes=btn-block></oauth-buttons></div></div></form></div></div><hr></div>'),a.put("app/account/settings/settings.html",'<navbar></navbar><div class=container><div class=row><div class=col-sm-12><h1>Change Password</h1></div><div class=col-sm-12><form class=form name=form ng-submit=vm.changePassword(form) novalidate><div class=form-group><label>Current Password</label><input type=password name=password class=form-control ng-model=vm.user.oldPassword mongoose-error><p class=help-block ng-show=form.password.$error.mongoose>{{ vm.errors.other }}</p></div><div class=form-group><label>New Password</label><input type=password name=newPassword class=form-control ng-model=vm.user.newPassword ng-minlength=3 required><p class=help-block ng-show="(form.newPassword.$error.minlength || form.newPassword.$error.required) && (form.newPassword.$dirty || vm.submitted)">Password must be at least 3 characters.</p></div><div class=form-group><label>Confirm New Password</label><input type=password name=confirmPassword class=form-control ng-model=vm.user.confirmPassword match=vm.user.newPassword ng-minlength=3 required><p class=help-block ng-show="form.confirmPassword.$error.match && vm.submitted">Passwords must match.</p></div><p class=help-block>{{ vm.message }}</p><button class="btn btn-lg btn-primary" type=submit>Save changes</button></form></div></div></div>'),a.put("app/account/signup/signup.html",'<navbar></navbar><div class=container><div class=row><div class=col-sm-12><h1>Sign up</h1></div><div class=col-sm-12><form class=form name=form ng-submit=vm.register(form) novalidate><div class=form-group ng-class="{ \'has-success\': form.name.$valid && vm.submitted,\n                                            \'has-error\': form.name.$invalid && vm.submitted }"><label>Name</label><input name=name class=form-control ng-model=vm.user.name required><p class=help-block ng-show="form.name.$error.required && vm.submitted">A name is required</p></div><div class=form-group ng-class="{ \'has-success\': form.email.$valid && vm.submitted,\n                                            \'has-error\': form.email.$invalid && vm.submitted }"><label>Email</label><input type=email name=email class=form-control ng-model=vm.user.email required mongoose-error><p class=help-block ng-show="form.email.$error.email && vm.submitted">Doesn\'t look like a valid email.</p><p class=help-block ng-show="form.email.$error.required && vm.submitted">What\'s your email address?</p><p class=help-block ng-show=form.email.$error.mongoose>{{ vm.errors.email }}</p></div><div class=form-group ng-class="{ \'has-success\': form.password.$valid && vm.submitted,\n                                            \'has-error\': form.password.$invalid && vm.submitted }"><label>Password</label><input type=password name=password class=form-control ng-model=vm.user.password ng-minlength=3 required mongoose-error><p class=help-block ng-show="(form.password.$error.minlength || form.password.$error.required) && vm.submitted">Password must be at least 3 characters.</p><p class=help-block ng-show=form.password.$error.mongoose>{{ vm.errors.password }}</p></div><div class=form-group ng-class="{ \'has-success\': form.confirmPassword.$valid && vm.submitted,\n                                            \'has-error\': form.confirmPassword.$invalid && vm.submitted }"><label>Confirm Password</label><input type=password name=confirmPassword class=form-control ng-model=vm.user.confirmPassword match=vm.user.password ng-minlength=3 required><p class=help-block ng-show="form.confirmPassword.$error.match && vm.submitted">Passwords must match.</p></div><div><button class="btn btn-inverse btn-lg btn-register" type=submit>Sign up</button> <a class="btn btn-default btn-lg btn-login" ui-sref=login>Login</a></div><hr><div class=row><div class="col-sm-4 col-md-3"><oauth-buttons classes=btn-block></oauth-buttons></div></div></form></div></div><hr></div>'),a.put("app/admin/admin.html",'<navbar></navbar><div class=container><p>The delete user and user index api routes are restricted to users with the \'admin\' role.</p><ul class=list-group><li class=list-group-item ng-repeat="user in admin.users"><strong>{{user.name}}</strong><br><span class=text-muted>{{user.email}}</span> <a ng-click=admin.delete(user) class=trash><span class="glyphicon glyphicon-trash pull-right"></span></a></li></ul></div>'),a.put("app/main/main.html",'<navbar></navbar><header class=hero-unit id=banner><div class=container><h1>\'Allo, \'Allo!</h1><p class=lead>Kick-start your next web app with Angular Fullstack</p><img src=assets/images/yeoman.png alt="I\'m Yeoman"></div></header><div class=container><div class=row><div class=col-lg-12><h1 class=page-header>Features:</h1><ul class="nav nav-tabs nav-stacked col-md-4 col-lg-4 col-sm-6" ng-repeat="thing in main.awesomeThings"><li><a href=# tooltip={{thing.info}}>{{thing.name}}<button type=button class=close ng-click=main.deleteThing(thing)>&times;</button></a></li></ul></div></div><form class=thing-form><label>Syncs in realtime across clients</label><p class=input-group><input class=form-control placeholder="Add a new thing here." ng-model=main.newThing> <span class=input-group-btn><button type=submit class="btn btn-primary" ng-click=main.addThing()>Add New</button></span></p></form></div><footer></footer>'),a.put("components/footer/footer.html",'<div class=container><p>Angular Fullstack v3.0.2 | <a href=https://twitter.com/tyhenkel>@tyhenkel</a> | <a href="https://github.com/DaftMonk/generator-angular-fullstack/issues?state=open">Issues</a></p></div>'),a.put("components/modal/modal.html",'<div class=modal-header><button ng-if=modal.dismissable type=button ng-click=$dismiss() class=close>&times;</button><h4 ng-if=modal.title ng-bind=modal.title class=modal-title></h4></div><div class=modal-body><p ng-if=modal.text ng-bind=modal.text></p><div ng-if=modal.html ng-bind-html=modal.html></div></div><div class=modal-footer><button ng-repeat="button in modal.buttons" ng-class=button.classes ng-click=button.click($event) ng-bind=button.text class=btn></button></div>'),a.put("components/navbar/navbar.html",'<div class="navbar navbar-default navbar-static-top" ng-controller=NavbarController><div class=container><div class=navbar-header><button class=navbar-toggle type=button ng-click="nav.isCollapsed = !nav.isCollapsed"><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href="/" class=navbar-brand>testing-delete-later</a></div><div collapse=nav.isCollapsed class="navbar-collapse collapse" id=navbar-main><ul class="nav navbar-nav"><li ng-repeat="item in nav.menu" ui-sref-active=active><a ui-sref={{item.state}}>{{item.title}}</a></li><li ng-show=nav.isAdmin() ui-sref-active=active><a ui-sref=admin>Admin</a></li></ul><ul class="nav navbar-nav navbar-right"><li ng-hide=nav.isLoggedIn() ui-sref-active=active><a ui-sref=signup>Sign up</a></li><li ng-hide=nav.isLoggedIn() ui-sref-active=active><a ui-sref=login>Login</a></li><li ng-show=nav.isLoggedIn()><p class=navbar-text>Hello {{ nav.getCurrentUser().name }}</p></li><li ng-show=nav.isLoggedIn() ui-sref-active=active><a ui-sref=settings><span class="glyphicon glyphicon-cog"></span></a></li><li ng-show=nav.isLoggedIn()><a ui-sref=logout>Logout</a></li></ul></div></div></div>'),a.put("components/oauth-buttons/oauth-buttons.html",'<a ng-class=classes ng-click="OauthButtons.loginOauth(\'facebook\')" class="btn btn-social btn-facebook"><i class="fa fa-facebook"></i> Connect with Facebook</a> <a ng-class=classes ng-click="OauthButtons.loginOauth(\'google\')" class="btn btn-social btn-google"><i class="fa fa-google-plus"></i> Connect with Google+</a> <a ng-class=classes ng-click="OauthButtons.loginOauth(\'twitter\')" class="btn btn-social btn-twitter"><i class="fa fa-twitter"></i> Connect with Twitter</a>')}]);