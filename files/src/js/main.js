

var Page = React.createClass({
    getInitialState: function(){
        return {data:[
            {idNumber:"1", name:"Maria", email:"maria@email.com", subject:"R", messenger:"Me messenger text"},
            {idNumber:"2", name:"Joao", email:"joao@email.com", subject:"A", messenger:"Me messenger text 2"},
        ]}
    },
    handleContactSubmit: function(contact){
        // console.log(contact)
        // this.setState({data:this.state.data.push(contact)})
        // console.log(this.state.data)
        var newContacts = this.state.data;
        newContacts.push(contact)
        this.setState({data: newContacts});
        
    },
    render: function(){
        return(
            <myElement>
                
                <Nav title="Learn React!" linkUrl="index.html"/>
                <div className="container">
                    < Title>
                       <p>Learning React</p>
                    </Title>
                    <div className="row">
                        <Form onContactSubmit={this.handleContactSubmit} idNumber={this.state.data.length + 1}/>
                    </div>
                    <div className="row">
                        <List data={this.state.data} />
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