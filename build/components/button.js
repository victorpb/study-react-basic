var Button = React.createClass({
    displayName: 'Button',


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
        var btnClass = this.state.click ? 'btn btn-default  active' : 'btn btn-success';
        var text = this.state.click ? this.props.textActive : this.props.text;
        return React.createElement(
            'button',
            { onClick: this.toggleClick, className: btnClass },
            ' ',
            text
        );
    }
});