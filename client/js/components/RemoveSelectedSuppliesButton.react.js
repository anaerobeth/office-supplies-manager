var RemoveSelectedSuppliesButton = React.createClass({
    handleClick: function(e) {
        e.preventDefault();

        this.props.tasks.removeSelected();
    },

    render: function() {
        return (
            <button type="button" className="btn btn-primary" onClick={this.handleClick}>Remove Selected Items</button>
        );
    }
});

export default RemoveSelectedSuppliesButton;
