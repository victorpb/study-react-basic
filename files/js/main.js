var Nav = React.createClass({
    render: function(){
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <a href={ this.props.linkUrl } className="navbar-brand">
                        { this.props.title }
                    </a>
                </div>
            </div>
        </nav>
    );
    }
});

var Title = React.createClass({
    render: function (){
        return (
            <div className="container">
                <div className="row">
                    <h1> { this.props.title } </h1>
                </div>
            </div>  
        );
    }
});

var Button = React.createClass({

    getInitialState: function() {
        return {
            click: false,
        };
    },

    toggleClick: function() {
        this.setState({
            click: !this.state.click,
        });
        
    },

    render: function(){
        var btnClass = this.state.click ? 'btn btn-success': 'btn btn-default';
        var text = this.state.click ? this.props.textActive: this.props.text;
       return(
        <button onClick={this.toggleClick} className={ btnClass }> { text }</button>
       );
    }
});

ReactDOM.render(
    < Nav title="Learn React!" linkUrl="index.html"/>,
     document.getElementById('nav') 
);

ReactDOM.render(
    < Title title="Learning React" />,
     document.getElementById('title') 
);

ReactDOM.render(
    < Button text="My component button" textActive="Button Active"/>,
     document.getElementById('button') 
);