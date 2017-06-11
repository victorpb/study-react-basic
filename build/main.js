
var Page = React.createClass({
    displayName: "Page",

    render: function () {
        return React.createElement(
            "myElement",
            null,
            React.createElement(Nav, { title: "Learn React!", linkUrl: "index.html" }),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(Title, { title: "Learning React" }),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(Button, { text: "My component button", textActive: "Button Active" })
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));