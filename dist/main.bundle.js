webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.loadApi = {
            ok: null,
            notok: null
        };
        this.files = [
            {
                fileName: "books.json",
                storageKey: "books"
            },
            {
                fileName: "authors.json",
                storageKey: "authors"
            }
        ];
        var that = this;
        this.apiLoaded = new Promise(function (ok, notok) {
            that.loadApi.ok = ok;
            that.loadApi.notok = notok;
        });
        var download = function (file) {
            that.http.get("assets/api/" + file.fileName).subscribe(function (response) {
                console.log("Saving response to storageKey = " + file.storageKey);
                that.saveData(file.storageKey, response);
                if (that.checkDone())
                    that.loadApi.ok();
            });
        };
        for (var ind = 0; ind < this.files.length; ind++) {
            var file = this.files[ind];
            if (localStorage.getItem(file.storageKey) === null) {
                download(file);
            }
            else {
                console.log("Item " + file.storageKey + " loaded");
                if (that.checkDone()) {
                    that.loadApi.ok();
                    console.log("Found in localStorage as well");
                }
            }
        }
    }
    ApiService.prototype.checkDone = function () {
        var isDone = true;
        for (var ind = 0; ind < this.files.length; ind++) {
            var file = this.files[ind];
            isDone = isDone && localStorage.getItem(file.storageKey) !== null;
        }
        return isDone;
    };
    ApiService.prototype.getData = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    ApiService.prototype.saveData = function (key, data, update) {
        var update = typeof update === 'undefined' ? false : update;
        if (update) {
            var currData = localStorage.getItem(key) !== null ? JSON.parse(localStorage.getItem(key)) : {}; //if item not yet save, default it to {}
            var data = Object.assign(currData, data);
        }
        localStorage.setItem(key, JSON.stringify(data));
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_edit_book_edit_component__ = __webpack_require__("../../../../../src/app/book-edit/book-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_list_book_list_component__ = __webpack_require__("../../../../../src/app/book-list/book-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_view_book_view_component__ = __webpack_require__("../../../../../src/app/book-view/book-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "bookList"
    },
    {
        path: "bookAdd",
        component: __WEBPACK_IMPORTED_MODULE_2__book_edit_book_edit_component__["a" /* BookEditComponent */]
    },
    {
        path: "bookEdit/:id",
        component: __WEBPACK_IMPORTED_MODULE_2__book_edit_book_edit_component__["a" /* BookEditComponent */]
    },
    {
        path: "bookList",
        component: __WEBPACK_IMPORTED_MODULE_3__book_list_book_list_component__["a" /* BookListComponent */]
    },
    {
        path: "bookView/:id",
        component: __WEBPACK_IMPORTED_MODULE_4__book_view_book_view_component__["a" /* BookViewComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar\" class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a routerLink=\"\" class=\"navbar-brand\" href=\"#\" >KinetixLib <i class=\"fas fa-book\"></i></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li [routerLinkActive]=\"['active']\" class=\"nav-item\" *ngFor=\"let link of links\">\n        <a class=\"nav-link\" routerLink=\"{{link.route}}\"  >{{link.name}}</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
var AppComponent = (function () {
    function AppComponent() {
        this.links = [
            {
                name: "List Books",
                route: "bookList"
            },
            {
                name: "Add Book",
                route: "bookAdd"
            }
        ];
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_edit_book_edit_component__ = __webpack_require__("../../../../../src/app/book-edit/book-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_list_book_list_component__ = __webpack_require__("../../../../../src/app/book-list/book-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__book_view_book_view_component__ = __webpack_require__("../../../../../src/app/book-view/book-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__book_edit_book_edit_component__["a" /* BookEditComponent */],
                __WEBPACK_IMPORTED_MODULE_8__book_list_book_list_component__["a" /* BookListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__book_view_book_view_component__["a" /* BookViewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/book-edit/book-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".containerx{\n  margin-top: 15px;\n}\n#publishingDate{\n  background-color: white !important;\n  cursor: pointer;\n}\n.chapter.card{\n  display: inline-block;\n  margin: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book-edit/book-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"bookForm\" novalidate class=\"container containerx\" (submit)=\"save($event)\">\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label text-right\" for=\"ISBN\">ISBN</label>\n    <div class=\"col-sm-5\">\n      <input autofocus formControlName=\"ISBN\" type=\"text\" class=\"form-control\" id=\"ISBN\" name='ISBN' placeholder=\"Enter ISBN\" [ngClass] = \"{\n        'is-invalid' : bookForm.controls.ISBN.invalid && bookForm.controls.ISBN.dirty,\n        'is-valid' : bookForm.controls.ISBN.valid && bookForm.controls.ISBN.dirty\n      }\">\n      <ng-container *ngIf='bookForm.controls.ISBN.errors !== null && bookForm.controls.ISBN.dirty'>\n        <div class='invalid-feedback' *ngIf='bookForm.controls.ISBN.errors.required'>ISBN is required</div>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label text-right\" for=\"author\">Author</label>\n    <div class=\"col-sm-5\">\n      <select formControlName=\"author\" ngModel type=\"text\" class=\"form-control\" id=\"author\" name='author'>\n\t<option value=\"\" disabled hidden >Select author</option>\n        <option *ngFor=\"let author of authors\" value=\"{{author.id}}\">{{author.givenName}} {{author.surName}}</option>\n      </select>\n      <ng-container *ngIf='bookForm.controls.author.errors !== null && bookForm.controls.author.dirty'>\n        <div class='invalid-feedback' *ngIf='bookForm.controls.author.errors.required'>Author is required</div>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label text-right\" for=\"title\">Title</label>\n    <div class=\"col-sm-5\">\n      <input formControlName=\"title\" type=\"text\" class=\"form-control\" id=\"title\" name='title' placeholder=\"Enter title\" [ngClass] = \"{\n        'is-invalid' : bookForm.controls.title.invalid && bookForm.controls.title.dirty,\n        'is-valid' : bookForm.controls.title.valid && bookForm.controls.title.dirty\n      }\">\n      <ng-container *ngIf='bookForm.controls.title.errors !== null && bookForm.controls.title.dirty'>\n        <div class='invalid-feedback' *ngIf='bookForm.controls.title.errors.required'>Title is required</div>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label text-right\" for=\"publishingDate\">Publishing date</label>\n    <div class=\"col-sm-5\">\n      <input formControlName=\"publishingDate\" type=\"text\" class=\"form-control\" id=\"publishingDate\" name='publishingDate' placeholder=\"Enter publishing date\" >\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label text-right\" for=\"edition\">Edition</label>\n    <div class=\"col-sm-5\">\n      <input formControlName=\"edition\" type=\"text\" class=\"form-control\" id=\"edition\" name='edition' placeholder=\"Enter edition\" >\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label text-right\" for=\"publisher\">Publisher</label>\n    <div class=\"col-sm-5\">\n      <input formControlName=\"publisher\" type=\"text\" class=\"form-control\" id=\"publisher\" name='publisher' placeholder=\"Enter publisher\" >\n    </div>\n  </div>\n  <div formArrayName=\"chapters\">\n    <div class=\"chapterx\" *ngFor=\"let chapter of bookForm.controls.chapters.controls; let i = index\">\n      <div [formGroupName]=\"i\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label text-right\">Chapter {{ i + 1 }} <i style=\"cursor:pointer; margin-left:10px;\" (click)=\"removeChapter(i)\" class=\"far fa-trash-alt\"></i></label>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label text-right\" for=\"title\">Title</label>\n          <div class=\"col-sm-4\">\n            <input [ngClass] = \"{\n              'is-invalid' : bookForm.controls.chapters.controls[ i ].invalid && bookForm.controls.chapters.controls[ i ].dirty,\n              'is-valid' : bookForm.controls.chapters.controls[ i ].valid && bookForm.controls.chapters.controls[ i ].dirty\n            }\" formControlName=\"title\" type=\"text\" name='title' class=\"form-control\" placeholder=\"Enter chapter title\" >\n            <ng-container *ngIf='bookForm.controls.chapters.controls[ i ].errors !== null && bookForm.controls.chapters.controls[ i ].dirty'>\n              <div class='invalid-feedback' *ngIf='bookForm.controls.chapters.controls[ i ].errors.required'>Chapter title is required</div>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label text-right\" for=\"chapter\">Start page</label>\n          <div class=\"col-sm-4\">\n            <input formControlName=\"startPage\" type=\"text\" class=\"form-control\" placeholder=\"Enter start page\" >\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label text-right\" for=\"chapter\">Number of pages</label>\n          <div class=\"col-sm-4\">\n            <input formControlName=\"numberOfPages\" type=\"text\" class=\"form-control\" placeholder=\"Enter number of pages\" >\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-sm-7 text-right\">\n      <button class=\"btn btn-dark\" (click)=\"addChapter($event)\" >Add chapter <i class=\"fas fa-plus\"></i></button>\n      <button [disabled]=\"!bookForm.valid\" type=\"submit\" class=\"btn btn-primary\">Save <i class=\"far fa-save\"></i></button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/book-edit/book-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookEditComponent = (function () {
    function BookEditComponent(router, route, api, fb) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.fb = fb;
        this.api.apiLoaded.then((function () {
            this.authors = JSON.parse(localStorage.getItem("authors"));
            this.authorsIndex = {};
            for (var x = 0; x < this.authors.length; x++) {
                this.authorsIndex[this.authors[x].id] = this.authors[x];
            }
        }).bind(this));
        this.bookForm = this.fb.group({
            ISBN: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]],
            author: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]],
            chapters: this.fb.array([]),
            edition: [""],
            publisher: [""],
            publishingDate: [""],
            title: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]]
        });
    }
    BookEditComponent.prototype.makeChapter = function () {
        return this.fb.group({
            numberOfPages: [""],
            startPage: [""],
            title: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]]
        });
    };
    BookEditComponent.prototype.addChapter = function (e) {
        if (typeof e !== 'undefined') {
            e.stopPropagation();
            e.preventDefault();
        }
        var control = this.bookForm.controls["chapters"];
        control.push(this.makeChapter());
    };
    BookEditComponent.prototype.removeChapter = function (i) {
        var control = this.bookForm.controls["chapters"];
        control.removeAt(i);
    };
    BookEditComponent.prototype.makeBook = function (i) {
        return {
            id: i,
            title: this.bookForm.controls.title.value,
            author: this.authorsIndex[this.bookForm.controls.author.value],
            publisher: this.bookForm.controls.publisher.value,
            edition: this.bookForm.controls.edition.value,
            ISBN: this.bookForm.controls.ISBN.value,
            publishingDate: (new Date(this.picker.get())).toISOString(),
            chapters: this.bookForm.controls.chapters.value
        };
    };
    BookEditComponent.prototype.save = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.bookForm.valid) {
            if (this.mode === "edit") {
                var newBook = this.makeBook(this.id);
                this.books[this.id] = newBook;
                for (var x in this.rawBooks)
                    if (this.rawBooks[x].id == this.id)
                        this.rawBooks[x] = newBook;
                this.api.saveData("books", this.rawBooks);
            }
            else {
                var lastID = 0;
                for (var y = 0; y < this.rawBooks.length; y++) {
                    if (lastID < this.rawBooks[y].id)
                        lastID = this.rawBooks[y].id * 1;
                }
                this.rawBooks.push(this.makeBook(lastID + 1));
                this.api.saveData("books", this.rawBooks);
            }
        }
        else {
            for (var ctrl in this.bookForm.controls) {
                this.bookForm.controls[ctrl].markAsDirty();
            }
        }
        this.router.navigateByUrl("");
    };
    BookEditComponent.prototype.load = function () {
        var books = this.api.getData("books");
        var indBooks = {};
        for (var x = 0; x < books.length; x++) {
            var book = books[x];
            indBooks[book.id] = book;
        }
        this.books = indBooks;
        this.rawBooks = books;
        console.log(this.rawBooks);
    };
    BookEditComponent.prototype.fillIn = function (bookId) {
        var book = this.books[bookId];
        for (var x = 0; x < book.chapters.length; x++)
            this.addChapter();
        var state = {
            ISBN: book.ISBN,
            author: book.author.id,
            chapters: book.chapters,
            title: book.title,
            edition: book.edition,
            publisher: book.publisher,
            publishingDate: book.publishingDate,
            chapter: book.chapters
        };
        this.bookForm.patchValue(state);
        this.picker.set("select", new Date(book.publishingDate));
        $.prototype.bookForm = this.bookForm;
    };
    BookEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var $input = $("#publishingDate").pickadate();
        this.picker = $input.pickadate("picker");
        this.route.params.subscribe((function (params) {
            if (typeof params['id'] !== 'undefined') {
                _this.mode = "edit";
                _this.id = params['id'];
                _this.api.apiLoaded.then((function () {
                    this.load();
                    this.fillIn(params['id']);
                }).bind(_this));
            }
            else {
                console.log("new mode");
                _this.api.apiLoaded.then((function () {
                    this.load();
                }).bind(_this));
                _this.mode = "new";
            }
        }).bind(this));
    };
    BookEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-edit',
            template: __webpack_require__("../../../../../src/app/book-edit/book-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/book-edit/book-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], BookEditComponent);
    return BookEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/book-list/book-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btnx{\n  cursor:pointer;\n  min-width: 50px;\n}\n.btnsx{\n  float:right;\n}\n.bookItem{\n  line-height: 34px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book-list/book-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <li class=\"list-group-item bookItem\" *ngFor=\"let book of books; let i = index;\">\n    <span>{{book.title}}</span>\n    <span class='btnsx'>\n      <button routerLink=\"/bookView/{{book.id}}\" class=\"btnx btn btn-info\" ><i class=\"fas fa-info\"></i></button>\n      <button routerLink=\"/bookEdit/{{book.id}}\" class=\"btnx btn btn-dark\" ><i class=\"fas fa-pencil-alt\"></i></button>\n      <button (click)=\"removeBook( i )\" class=\"btnx btn btn-danger\" ><i class=\"far fa-trash-alt\"></i></button>\n    </span>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/book-list/book-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListComponent = (function () {
    function BookListComponent(api) {
        this.api = api;
        var that = this;
        this.api.apiLoaded.then(function () {
            that.books = that.api.getData("books");
        });
    }
    BookListComponent.prototype.ngOnInit = function () {
    };
    BookListComponent.prototype.removeBook = function (i) {
        var that = this;
        this.api.apiLoaded.then(function () {
            var books = that.api.getData("books");
            books.splice(i, 1);
            that.api.saveData("books", books);
            that.books = books;
        });
    };
    BookListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-list',
            template: __webpack_require__("../../../../../src/app/book-list/book-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/book-list/book-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/book-view/book-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\n  max-width: 50rem !important;\n  margin: 1rem !important;\n}\n.tblhold{\n  margin: 1rem !important;\n}\n.authorx .card-title{\n  margin-bottom: 0 !important;\n}\n.tblhold td, .tblhold th{\n  padding: .3rem 2rem  !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book-view/book-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{book.title}}</h1>\n    <p class=\"lead\">{{book.author.givenName}} {{book.author.surName}}</p>\n  </div>\n</div>\n<div class=\"authorx card border-dark mb-3\">\n  <div class=\"card-header\">Author</div>\n  <div class=\"card-body text-dark\">\n    <table class=\"table table-sm\">\n      <tbody>\n        <tr>\n          <td><h5 class=\"card-title\">id</h5></td>\n          <td><p class=\"card-text\">{{book.author.id}}</p></td>\n        </tr>\n        <tr>\n          <td><h5 class=\"card-title\">First name</h5></td>\n          <td><p class=\"card-text\">{{book.author.givenName}}</p></td>\n        </tr>\n        <tr>\n          <td><h5 class=\"card-title\">Last name</h5></td>\n          <td><p class=\"card-text\">{{book.author.surName}}</p></td>\n        </tr>\n        <tr>\n          <td><h5 class=\"card-title\">Birth date</h5></td>\n          <td><p class=\"card-text\">{{book.author.dateOfBirth | date: 'dd MMM yyyy'}}</p></td>\n        </tr>\n        <tr>\n          <td><h5 class=\"card-title\">Bio</h5></td>\n          <td><p class=\"card-text\">{{book.author.bio}}</p></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div *ngIf=\"book.chapters.length > 0\" class='tblhold'>\n  <table class=\"table table-sm\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Title</th>\n        <th scope=\"col\">Start page</th>\n        <th scope=\"col\">Total pages</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let chap of book.chapters\">\n        <th scope=\"row\">{{chap.title}}</th>\n        <td>{{chap.startPage}}</td>\n        <td>{{chap.numberOfPages}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"card text-white bg-info mb-3\">\n  <div class=\"card-header\">Book info</div>\n  <div class=\"card-body\">\n    <table class=\"table table-sm\">\n      <tbody>\n        <tr>\n          <td><h5 class=\"card-title\">Publisher</h5></td>\n          <td><p class=\"card-text\">{{book.publisher}}</p></td>\n        </tr>\n        <tr>\n          <td><h5 class=\"card-title\">Edition</h5></td>\n          <td><p class=\"card-text\">{{book.edition}}</p></td>\n        </tr>\n        <tr>\n          <td><h5 class=\"card-title\">ISBN</h5></td>\n          <td><p class=\"card-text\">{{book.ISBN}}</p></td>\n        </tr>\n        <tr>\n          <td><h5 class=\"card-title\">Publishing date</h5></td>\n          <td><p class=\"card-text\">{{book.publishingDate | date: 'dd MMM yyyy'}}</p></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/book-view/book-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookViewComponent = (function () {
    function BookViewComponent(route, api) {
        this.route = route;
        this.api = api;
    }
    BookViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe((function (params) {
            var books = _this.api.getData('books');
            var id = params['id'];
            for (var x in books)
                if (+books[x].id === +id)
                    _this.book = books[x];
        }).bind(this));
    };
    BookViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-book-view',
            template: __webpack_require__("../../../../../src/app/book-view/book-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/book-view/book-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], BookViewComponent);
    return BookViewComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map