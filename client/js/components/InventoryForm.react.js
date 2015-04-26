import CategorySelect from './CategorySelect.react';

var InventoryForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();

        var inventory = this.refs.task.getDOMNode().value.trim();
        var category = this.refs.category.getDOMNode().value.trim();

        if (!inventory || !category) {
            return;
        }

        this.props.tasks.create({
            name: inventory,
            category: parseInt(category)
        });

        this.refs.task.getDOMNode().value = '';
    },

    render: function() {
        return (
            <form role="form" className="inventoryForm" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Item</label>
                    <input type="text" className="form-control" ref="task" />
                </div>
        
                <div className="form-group">
                    <label>Category</label>
                    <CategorySelect categories={this.props.categories} ref="category" />
                </div>
        
                <p><button type="submit" className="btn btn-primary">Add Item</button></p>
            </form>
        );
    }
});

export default InventoryForm;
