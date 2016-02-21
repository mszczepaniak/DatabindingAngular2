System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.myself = { name: '', age: '' };
                    this.ifFilled = false;
                    this.isValid = false;
                }
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: "\n    <h1>Your details, please</h1>\n    <div>\n        <label for=\"name\">Your Name</label>\n        <input type=\"text\" id=\"name\">\n    </div>\n    <div>\n        <label for=\"age\">Your age</label>\n        <input type=\"text\" id=\"age\">\n    </div>\n    <br>\n    <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>\n    <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>\n    <br>\n    <button [disabled]=\"!isValid\">Submit</button> \n   "
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            })();
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJJbnB1dENvbXBvbmVudCIsIklucHV0Q29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFBQUE7b0JBc0JHQyxXQUFNQSxHQUFHQSxFQUFDQSxJQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxHQUFHQSxFQUFFQSxFQUFFQSxFQUFDQSxDQUFDQTtvQkFDN0JBLGFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO29CQUNqQkEsWUFBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ25CQSxDQUFDQTtnQkF6QkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1JBLFFBQVFBLEVBQUVBLFVBQVVBO3dCQUNwQkEsUUFBUUEsRUFBRUEsNmJBZVRBO3FCQUNIQSxDQUFDQTs7bUNBT0RBO2dCQUFEQSxxQkFBQ0E7WUFBREEsQ0F6QkEsQUF5QkNBLElBQUE7WUF6QkQsMkNBeUJDLENBQUEiLCJmaWxlIjoiYmluZGluZ3MvaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgIHNlbGVjdG9yOiAnbXktaW5wdXQnLFxyXG4gICB0ZW1wbGF0ZTogYFxyXG4gICAgPGgxPllvdXIgZGV0YWlscywgcGxlYXNlPC9oMT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5Zb3VyIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJhZ2VcIj5Zb3VyIGFnZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZ2VcIj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJyPlxyXG4gICAgPGRpdj5GaWxsZWQgb3V0OiB7e2lzRmlsbGVkID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cclxuICAgIDxkaXY+VmFsaWQ6IHt7aXNWYWxpZCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XHJcbiAgICA8YnI+XHJcbiAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhaXNWYWxpZFwiPlN1Ym1pdDwvYnV0dG9uPiBcclxuICAgYCBcclxufSlcclxuLy8gZmFqbmEgc3ByYXdhIHplIG1vem5hIHNvYmllIHR1dGFqIHN0cmluZyBpbnRlcnBvbGF0aW9uXHJcbi8vIG9kIHJhenUgdXp5YyB6IHRlcm5hcnkgb3BlcmF0b3JlbSBcclxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IHtcclxuICAgbXlzZWxmID0ge25hbWU6ICcnLCBhZ2U6ICcnfTtcclxuICAgaWZGaWxsZWQgPSBmYWxzZTtcclxuICAgaXNWYWxpZCA9IGZhbHNlOyAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
