import TaskModel from './TaskModel';

var TaskCollection = Backbone.Collection.extend({
    url: 'http://localhost:3000/tasks',

    model: TaskModel,

    removeCompleted: function() {
        var completed = _.filter(this.models, function(task) {
            return task.get('status') === 2;
        });

        _.forEach(completed, function(task) {
            task.destroy();
        });
    },

    resetItems: function() {
        var selected = _.filter(this.models, function(task) {
            return task.get('status') === 2;
        });

        _.forEach(selected, function(task) {
            task.set('status', 0);
            task.save();
        });
    },

    createList: function() {
        var selected = _.filter(this.models, function(task) {
            return task.get('status') === 2;
        });

        _.forEach(selected, function(task) {
          return
            <div>FOO</div>;
        });
    }
});

export default TaskCollection;
