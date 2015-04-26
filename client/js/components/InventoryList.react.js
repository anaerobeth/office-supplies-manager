var CategoryListItem = React.createClass({
    render: function() {
        var inventoryList = this.props.tasks.map(function(task, i) {
            return (
                <InventoryListItem key={i} item={task} />
            );
        });

        return (
            <li>{this.props.category.get('name')}
                <ul>
                    {inventoryList}
                </ul>
            </li>
        );
    }
});

var InventoryListItem = React.createClass({
    completeTask: function(e) {
        e.preventDefault();

        this.props.item.toggleStatus();
    },

    render: function() {
        return (
            <li data-status={this.props.item.get('status')}><a href="#" onClick={this.completeTask}>{this.props.item.get('name')}</a></li>
        );
    }
});

var InventoryList = React.createClass({
    render: function() {
        var categoryList = this.props.categories.map((category, i) => {
            var tasks = this.props.tasks.where({category: category.get('id')});
            
            return (
                <CategoryListItem key={i} category={category} tasks={tasks} />
            );
        });

        return (
            <ul className="inventoryList">
                {categoryList}
            </ul>
        );
    }
});

export default InventoryList;
