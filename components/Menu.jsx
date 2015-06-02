var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;

module.exports = React.createClass({

    getInitialState: function(){
        return { focused: 0 };
    },

    clicked: function(index){
        this.setState({focused: index});
    },

    render: function() {
        var self = this;
        return (
                <ul className="nav navbar-nav navbar-right">{ this.props.items.map(function(item, index){
                    var style = '';
                    if(self.state.focused == index){
                        style = 'focused';
                    }
                    return <li className={style} onClick={self.clicked.bind(self, index)}>{item}</li>;
                }) }
                </ul>
        );
    }
});
