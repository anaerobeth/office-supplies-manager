// components
import Navbar from './Navbar.react';
import CategoryForm from './CategoryForm.react';
import InventoryForm from './InventoryForm.react';
import InventoryList from './InventoryList.react';
import RemoveSelectedSuppliesButton from './RemoveSelectedSuppliesButton.react';
import SupplyList from './SupplyList.react';
import CreateItemListButton from './CreateItemListButton.react';
import ResetItemsButton from './ResetItemsButton.react';

// collections
import CategoryCollection from '../domain/CategoryCollection';
import TaskCollection from '../domain/TaskCollection';

var App = React.createClass({
    getInitialState: function() {
        return {
            categories: new CategoryCollection(),
            tasks: new TaskCollection()
        }
    },

    componentDidMount: function() {
        this.state.categories.fetch();
        this.state.tasks.fetch();

        this.state.categories.on('all', () => {
            this.setState({categories: this.state.categories});
        });

        this.state.tasks.on('all', () => {
            this.setState({tasks: this.state.tasks});
        });
    },

    componentWillUnmount: function() {
        this.state.categories.off('all');
        this.state.tasks.off('all');
    },

    render: function() {
        return (
            <section>
                <Navbar title="Office Supplies Inventory" />

                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <br />
                            <ResetItemsButton tasks={this.state.tasks} />
                            <InventoryList categories={this.state.categories} tasks={this.state.tasks} />
                        </div>
                        <div className="col-md-4">
                            <InventoryForm categories={this.state.categories} tasks={this.state.tasks} />
                            <hr/>
                            <h3>Supplies To Order:</h3>
                            <SupplyList categories={this.state.categories} tasks={this.state.tasks} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

export default App;
