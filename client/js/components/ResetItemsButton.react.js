var ResetItemsButton = React.createClass({
    handleClick: function(e) {
        e.preventDefault();

        this.props.tasks.resetItems();
    },

    render: function() {
        return (
            <button type="button" className="btn btn-primary" onClick={this.handleClick}>Reset Items</button>
        );
    }
});

export default ResetItemsButton;
