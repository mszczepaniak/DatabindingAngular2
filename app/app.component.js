System.register(['angular2/core', './bindings/input.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, input_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.myself = { name: '', age: '' };
                    this.confirmMyself = { name: '', age: '' };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div class=\"container\">\n            <my-input></my-input>\n        </div>\n        <div class=\"container\">\n            ...\n        </div>        \n    ",
                        directives: [input_component_1.InputComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFBQUE7b0JBYUlDLFdBQU1BLEdBQUdBLEVBQUNBLElBQUlBLEVBQUVBLEVBQUVBLEVBQUVBLEdBQUdBLEVBQUVBLEVBQUVBLEVBQUNBLENBQUNBO29CQUM3QkEsa0JBQWFBLEdBQUdBLEVBQUNBLElBQUlBLEVBQUVBLEVBQUVBLEVBQUVBLEdBQUdBLEVBQUVBLEVBQUVBLEVBQUNBLENBQUNBO2dCQUN4Q0EsQ0FBQ0E7Z0JBZkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsUUFBUUEsRUFBRUEsMEtBT1RBO3dCQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSxnQ0FBY0EsQ0FBQ0E7cUJBQy9CQSxDQUFDQTs7aUNBSURBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FmQSxBQWVDQSxJQUFBO1lBZkQsdUNBZUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0lucHV0Q29tcG9uZW50fSBmcm9tICcuL2JpbmRpbmdzL2lucHV0LmNvbXBvbmVudCc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxteS1pbnB1dD48L215LWlucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgPC9kaXY+ICAgICAgICBcclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbSW5wdXRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgbXlzZWxmID0ge25hbWU6ICcnLCBhZ2U6ICcnfTtcclxuICAgIGNvbmZpcm1NeXNlbGYgPSB7bmFtZTogJycsIGFnZTogJyd9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
