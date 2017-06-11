
var Page = React.createClass({
    render: function(){
        return(
            <myElement>
                
                <Nav title="Learn React!" linkUrl="index.html"/>
                <div className="container">
                    < Title>
                       <p>Learning React</p>
                    </Title>
                    <div className="row">
                        <Form />
                        <Button text="Submit" textActive="Wait..."/>
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