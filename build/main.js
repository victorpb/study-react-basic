var Nav = React.createClass({
    displayName: "Nav",

    render: function () {
        return React.createElement(
            "nav",
            { className: "navbar navbar-default" },
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "navbar-header" },
                    React.createElement(
                        "a",
                        { href: this.props.linkUrl, className: "navbar-brand" },
                        this.props.title
                    )
                )
            )
        );
    }
});

var Title = React.createClass({
    displayName: "Title",

    render: function () {
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "h1",
                    null,
                    " ",
                    this.props.title,
                    " "
                )
            )
        );
    }
});

var Button = React.createClass({
    displayName: "Button",


    getInitialState: function () {
        return {
            click: false
        };
    },

    toggleClick: function () {
        this.setState({
            click: !this.state.click
        });
    },

    render: function () {
        var btnClass = this.state.click ? 'btn btn-success' : 'btn btn-default';
        var text = this.state.click ? this.props.textActive : this.props.text;
        return React.createElement(
            "button",
            { onClick: this.toggleClick, className: btnClass },
            " ",
            text
        );
    }
});

ReactDOM.render(React.createElement(Nav, { title: "Learn React!", linkUrl: "index.html" }), document.getElementById('nav'));

ReactDOM.render(React.createElement(Title, { title: "Learning React" }), document.getElementById('title'));

ReactDOM.render(React.createElement(Button, { text: "My component button", textActive: "Button Active" }), document.getElementById('button'));