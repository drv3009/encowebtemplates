(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_board_login_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-board/login-board.component */ "./src/app/login-board/login-board.component.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");
/* harmony import */ var _loginguard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loginguard.service */ "./src/app/loginguard.service.ts");
/* harmony import */ var _single_note_single_note_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-note/single-note.component */ "./src/app/single-note/single-note.component.ts");
/* harmony import */ var _edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-note/edit-note.component */ "./src/app/edit-note/edit-note.component.ts");








var routes = [
    { path: "", component: _login_board_login_board_component__WEBPACK_IMPORTED_MODULE_3__["LoginBoardComponent"] },
    {
        path: "notes",
        canActivate: [_loginguard_service__WEBPACK_IMPORTED_MODULE_5__["LoginguardService"]],
        component: _notes_notes_component__WEBPACK_IMPORTED_MODULE_4__["NotesComponent"]
    },
    {
        path: "addnote",
        canActivate: [_loginguard_service__WEBPACK_IMPORTED_MODULE_5__["LoginguardService"]],
        component: _single_note_single_note_component__WEBPACK_IMPORTED_MODULE_6__["SingleNoteComponent"]
    },
    {
        path: "editnote",
        canActivate: [_loginguard_service__WEBPACK_IMPORTED_MODULE_5__["LoginguardService"]],
        component: _edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_7__["EditNoteComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'crud';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_board_login_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-board/login-board.component */ "./src/app/login-board/login-board.component.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");
/* harmony import */ var _single_note_single_note_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./single-note/single-note.component */ "./src/app/single-note/single-note.component.ts");
/* harmony import */ var _edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-note/edit-note.component */ "./src/app/edit-note/edit-note.component.ts");
/* harmony import */ var _capiatalise_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./capiatalise-directive */ "./src/app/capiatalise-directive.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_board_login_board_component__WEBPACK_IMPORTED_MODULE_6__["LoginBoardComponent"],
                _notes_notes_component__WEBPACK_IMPORTED_MODULE_7__["NotesComponent"],
                _single_note_single_note_component__WEBPACK_IMPORTED_MODULE_8__["SingleNoteComponent"],
                _edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_9__["EditNoteComponent"],
                _capiatalise_directive__WEBPACK_IMPORTED_MODULE_10__["MyCapitaliseDirective"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/capiatalise-directive.ts":
/*!******************************************!*\
  !*** ./src/app/capiatalise-directive.ts ***!
  \******************************************/
/*! exports provided: MyCapitaliseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCapitaliseDirective", function() { return MyCapitaliseDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyCapitaliseDirective = /** @class */ (function () {
    function MyCapitaliseDirective(elr) {
        var el = elr.nativeElement;
        el.oninput;
    }
    MyCapitaliseDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[my-capitaliseDirective]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MyCapitaliseDirective);
    return MyCapitaliseDirective;
}());



/***/ }),

/***/ "./src/app/edit-note/edit-note.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-note/edit-note.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtbm90ZS9lZGl0LW5vdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-note/edit-note.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-note/edit-note.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form-group\">\n    <span> topic </span>\n    <input type=\"text\" [(ngModel)]=\"topic\" class=\"form-control\" />\n  </div>\n  <div class=\"form-group\">\n    <span> content </span>\n    <input type=\"text\" [(ngModel)]=\"content\" class=\"form-control\" />\n  </div>\n  <button (click)=\"pushNote()\" class=\"btn btn-primary\">done</button>\n  <button (click)=\"cancelNote()\" class=\"btn btn-primary\">cancel</button>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-note/edit-note.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-note/edit-note.component.ts ***!
  \**************************************************/
/*! exports provided: EditNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNoteComponent", function() { return EditNoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loginguard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loginguard.service */ "./src/app/loginguard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditNoteComponent = /** @class */ (function () {
    function EditNoteComponent(state, router) {
        this.state = state;
        this.router = router;
    }
    EditNoteComponent.prototype.pushNote = function () {
        var topic = this.topic;
        var content = this.content;
        var index = this.state.EditedNote.index;
        this.state.noteArray[index] = { topic: topic, content: content };
        this.router.navigateByUrl("notes");
    };
    EditNoteComponent.prototype.cancelNote = function () {
        this.router.navigateByUrl("notes");
    };
    EditNoteComponent.prototype.ngOnInit = function () {
        this.topic = this.state.EditedNote.topic;
        this.content = this.state.EditedNote.content;
    };
    EditNoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-edit-note",
            template: __webpack_require__(/*! ./edit-note.component.html */ "./src/app/edit-note/edit-note.component.html"),
            styles: [__webpack_require__(/*! ./edit-note.component.css */ "./src/app/edit-note/edit-note.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loginguard_service__WEBPACK_IMPORTED_MODULE_2__["LoginguardService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditNoteComponent);
    return EditNoteComponent;
}());



/***/ }),

/***/ "./src/app/login-board/login-board.component.css":
/*!*******************************************************!*\
  !*** ./src/app/login-board/login-board.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWJvYXJkL2xvZ2luLWJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login-board/login-board.component.html":
/*!********************************************************!*\
  !*** ./src/app/login-board/login-board.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form-group\">\n    <span> User Name </span>\n    <input\n      my-capitaliseDirective\n      type=\"text\"\n      [(ngModel)]=\"userName\"\n      class=\"form-control\"\n    />\n  </div>\n  <div class=\"form-group\">\n    <span> Password </span>\n    <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" />\n  </div>\n  <button\n    (click)=\"signin()\"\n    class=\"btn btn-primary\"\n    [disabled]=\"!userName || !password\"\n  >\n    Sign In\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/login-board/login-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login-board/login-board.component.ts ***!
  \******************************************************/
/*! exports provided: LoginBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBoardComponent", function() { return LoginBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loginguard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loginguard.service */ "./src/app/loginguard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginBoardComponent = /** @class */ (function () {
    function LoginBoardComponent(guard, Router) {
        this.guard = guard;
        this.Router = Router;
    }
    LoginBoardComponent.prototype.signin = function () {
        if (this.userName == "harit" && this.password == "harit") {
            this.guard.permit = true;
            this.Router.navigateByUrl("notes");
        }
    };
    LoginBoardComponent.prototype.ngOnInit = function () {
        this.userName = "harit";
    };
    LoginBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login-board",
            template: __webpack_require__(/*! ./login-board.component.html */ "./src/app/login-board/login-board.component.html"),
            styles: [__webpack_require__(/*! ./login-board.component.css */ "./src/app/login-board/login-board.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loginguard_service__WEBPACK_IMPORTED_MODULE_2__["LoginguardService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginBoardComponent);
    return LoginBoardComponent;
}());



/***/ }),

/***/ "./src/app/loginguard.service.ts":
/*!***************************************!*\
  !*** ./src/app/loginguard.service.ts ***!
  \***************************************/
/*! exports provided: LoginguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginguardService", function() { return LoginguardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginguardService = /** @class */ (function () {
    function LoginguardService() {
        this.permit = false;
        this.noteArray = [
            { topic: "topic 1", content: "content 1" },
            { topic: "topic 2", content: "content 2" },
            { topic: "topic 3", content: "content 3" }
        ];
    }
    LoginguardService.prototype.canActivate = function () {
        return this.permit;
    };
    LoginguardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginguardService);
    return LoginguardService;
}());



/***/ }),

/***/ "./src/app/notes/notes.component.css":
/*!*******************************************!*\
  !*** ./src/app/notes/notes.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/notes/notes.component.html":
/*!********************************************!*\
  !*** ./src/app/notes/notes.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"table\">\n    <table>\n      <thead>\n        <tr>\n          <th>Topic</th>\n          <th>Content</th>\n          <th>Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let el of noteArray; let i = index\">\n          <td>{{ el.topic }}</td>\n          <td>{{ el.content }}</td>\n          <td>\n            <button (click)=\"deleteNote(i)\" class=\"btn btn-danger\">\n              delete\n            </button>\n          </td>\n          <td>\n            <button (click)=\"editNote(i)\" class=\"btn btn-info\">\n              edit\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <!-- <div class=\"row\" *ngFor=\"let el of noteArray\">\n    <div class=\"col-3\">\n      <strong>{{ el.topic }}</strong>\n      <span>{{ el.content }}</span>\n      <button (click)=\"deleteNote(el.topic)\" class=\"btn btn-danger\">\n        delete\n      </button>\n    </div>\n  </div> -->\n  <button (click)=\"addNote()\" class=\"btn btn-primary\">\n    addnote\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/notes/notes.component.ts":
/*!******************************************!*\
  !*** ./src/app/notes/notes.component.ts ***!
  \******************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loginguard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loginguard.service */ "./src/app/loginguard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NotesComponent = /** @class */ (function () {
    function NotesComponent(state, router) {
        this.state = state;
        this.router = router;
    }
    NotesComponent.prototype.addNote = function () {
        this.router.navigateByUrl("addnote");
    };
    NotesComponent.prototype.deleteNote = function (Index) {
        this.state.noteArray.splice(Index, 1);
        // this.state.noteArray.map((note, i, arr) => {
        //   if (note.topic == topic) {
        //     arr.splice(i, 1);
        //     console.log(arr);
        //   }
        this.noteArray = this.state.noteArray;
    };
    NotesComponent.prototype.editNote = function (i) {
        this.state.EditedNote = this.state.noteArray[i];
        this.state.EditedNote.index = i;
        console.log(this.state.EditedNote);
        this.router.navigateByUrl("editnote");
    };
    NotesComponent.prototype.ngOnInit = function () {
        this.noteArray = this.state.noteArray;
    };
    NotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-notes",
            template: __webpack_require__(/*! ./notes.component.html */ "./src/app/notes/notes.component.html"),
            styles: [__webpack_require__(/*! ./notes.component.css */ "./src/app/notes/notes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loginguard_service__WEBPACK_IMPORTED_MODULE_2__["LoginguardService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NotesComponent);
    return NotesComponent;
}());

// class NoteObject {
//   topic = "";
//   content = "";
// }


/***/ }),

/***/ "./src/app/single-note/single-note.component.css":
/*!*******************************************************!*\
  !*** ./src/app/single-note/single-note.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1ub3RlL3NpbmdsZS1ub3RlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/single-note/single-note.component.html":
/*!********************************************************!*\
  !*** ./src/app/single-note/single-note.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form-group\">\n    <span> topic </span>\n    <input type=\"text\" [(ngModel)]=\"topic\" class=\"form-control\" />\n  </div>\n  <div class=\"form-group\">\n    <span> content </span>\n    <input type=\"text\" [(ngModel)]=\"content\" class=\"form-control\" />\n  </div>\n  <button (click)=\"pushNote()\" class=\"btn btn-primary\">done</button>\n  <button (click)=\"cancelNote()\" class=\"btn btn-primary\">cancel</button>\n</div>\n"

/***/ }),

/***/ "./src/app/single-note/single-note.component.ts":
/*!******************************************************!*\
  !*** ./src/app/single-note/single-note.component.ts ***!
  \******************************************************/
/*! exports provided: SingleNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleNoteComponent", function() { return SingleNoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loginguard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loginguard.service */ "./src/app/loginguard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SingleNoteComponent = /** @class */ (function () {
    function SingleNoteComponent(state, router) {
        this.state = state;
        this.router = router;
    }
    SingleNoteComponent.prototype.pushNote = function () {
        var topic = this.topic;
        var content = this.content;
        this.state.noteArray.push({ topic: topic, content: content });
        this.router.navigateByUrl("notes");
    };
    SingleNoteComponent.prototype.cancelNote = function () {
        this.router.navigateByUrl("notes");
    };
    SingleNoteComponent.prototype.ngOnInit = function () { };
    SingleNoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-single-note",
            template: __webpack_require__(/*! ./single-note.component.html */ "./src/app/single-note/single-note.component.html"),
            styles: [__webpack_require__(/*! ./single-note.component.css */ "./src/app/single-note/single-note.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loginguard_service__WEBPACK_IMPORTED_MODULE_2__["LoginguardService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SingleNoteComponent);
    return SingleNoteComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\harit practice\crud\crud\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map