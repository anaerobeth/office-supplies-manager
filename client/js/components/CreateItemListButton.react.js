var CreateItemListButton = React.createClass({
    handleClick: function(e) {
        e.preventDefault();

        this.props.tasks.createList();
    },

    render: function() {
        return (
            <button type="button" className="btn btn-primary" onClick={this.handleClick}>Create Order List</button>
        );
    }
});

export default CreateItemListButton;
