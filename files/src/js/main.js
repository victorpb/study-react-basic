
var data = [
    {idNumber:"1", name:"Maria", email:"maria@email.com", subject:"R", messenger:"Me messenger text"},
    {idNumber:"2", name:"Joao", email:"joao@email.com", subject:"A", messenger:"Me messenger text 2"},
]


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
                    <div className="row">
                        <List data={data} />
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