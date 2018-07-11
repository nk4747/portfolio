"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var todos = [
            {
                title: 'Изучить Javascript',
                completed: true
            },
            {
                title: 'Изучить Angular 2',
                completed: false
            },
            {
                title: 'Написать приложение',
                completed: false
            }
        ];
        return { todos: todos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=data.service.js.map