var Title = React.createClass({
    displayName: "Title",

    render: function () {
        return React.createElement(
            "div",
            { className: "row" },
            React.createElement(
                "h1",
                null,
                " ",
                this.props.title,
                " "
            )
        );
    }
});