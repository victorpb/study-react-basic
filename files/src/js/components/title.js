var Title = React.createClass({
    render: function (){
        var TitleStyle = {
            color: '#777676',
            fontSize: '36px', //font-size
        }; //É uma boa prática isso?
        return (
                <div className="row">
                    <h1 style={TitleStyle}> { this.props.children } </h1>
                </div> 
        );
    }
});
