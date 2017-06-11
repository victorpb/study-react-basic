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