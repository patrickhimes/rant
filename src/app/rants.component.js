"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var rant_service_1 = require("./rant.service");
var RantsComponent = (function () {
    function RantsComponent(rantService) {
        this.rantService = rantService;
    }
    RantsComponent.prototype.add = function (rantText) {
        var _this = this;
        rantText = rantText.trim();
        if (!rantText) {
            return;
        }
        this.rantService.create(rantText)
            .then(function (rant) {
            _this.rants.push(rant);
        });
    };
    RantsComponent.prototype.getRants = function () {
        var _this = this;
        this.rantService.getRants().then(function (rants) { return _this.rants = rants; });
    };
    RantsComponent.prototype.ngOnInit = function () {
        this.getRants();
    };
    return RantsComponent;
}());
RantsComponent = __decorate([
    core_1.Component({
        selector: 'rants',
        templateUrl: './rants.component.html'
    }),
    __metadata("design:paramtypes", [rant_service_1.RantService])
], RantsComponent);
exports.RantsComponent = RantsComponent;
//# sourceMappingURL=rants.component.js.map