var Form = React.createClass({
    displayName: "Form",

    render: function () {
        return React.createElement(
            "form",
            null,
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "name" },
                    "Name"
                ),
                React.createElement("input", { type: "text", className: "form-control", id: "name", placeholder: "name" })
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "email" },
                    "Email"
                ),
                React.createElement("input", { type: "email", className: "form-control", id: "email", placeholder: "email" })
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "messenger" },
                    "Email"
                ),
                React.createElement(
                    "textarea",
                    { row: "3", className: "form-control", id: "messenger" },
                    " "
                )
            )
        );
    }
});