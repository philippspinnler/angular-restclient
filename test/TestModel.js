(function() {
    angular.module('TestModel', [])
        .factory('TestModel', function(Model) {
            function TestModel(object) {

                this.id = {
                    type: 'string',
                    save: false
                };

                this.firstname = {
                    type: 'string'
                };

                this.lastname = {
                    type: 'string'
                };

                this.fullname = {
                    type: 'string',
                    save: false
                };

                // Map the given object
                this.init(object);
            }

            angular.extend(TestModel.prototype, Model.prototype);

            TestModel.prototype.afterLoad = function() {
                this.fullname = this.__foreignData['firstname'] + ' ' + this.__foreignData['lastname'];
            };

            TestModel.prototype.beforeSave = function() {
                this.firstname = this.firstname + '_';
            };

            return TestModel;
        })
})();