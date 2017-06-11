
var Page = React.createClass({
    render: function(){
        return(
            <myElement>
                
                < Nav title="Learn React!" linkUrl="index.html"/>
                <div className="container">
                    < Title title="Learning React" />
                    <div className="row">
                        < Button text="My component button" textActive="Button Active"/>
                    </div>
                </div>
            </myElement>
        );
    }
});


ReactDOM.render(
    < Page />,
     document.getElementById('page') 
);