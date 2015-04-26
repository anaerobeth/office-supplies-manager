var SupplyList = React.createClass({
    render: function() {
        var supplyList = this.props.tasks.where({status: 2})
        supplyList = supplyList.map(function(task, i) {
            return (
                <SupplyListItem key={i} item={task} />
            );
        });

        return (
            <ul>
                {supplyList}
            </ul>
        );
    }
});

var SupplyListItem = React.createClass({
    completeTask: function(e) {
        e.preventDefault();

        this.props.item.toggleStatus();
    },

    render: function() {
        return (
            <strong><li>{this.props.item.get('name')}</li></strong>
        );
    }
});


export default SupplyList;
