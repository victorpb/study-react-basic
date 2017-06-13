
var Contact = React.createClass({
    
    render: function(){

        return(
            
            <tr>
                <th scope="row">{this.props.data.idNumber}</th>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.mail}</td>
                <td>{this.props.data.subject}</td>
                <td>{this.props.data.messenger}</td>
            </tr>
        );
    }
})

var List = React.createClass({
    render: function(){
        var contactNodes = this.props.data.map(function(contact){
           return(<Contact data={contact}/>)
        });
        
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Messenger</th>
                    </tr>
                </thead>
                <tbody>
                    {contactNodes}
                </tbody>
            </table>
        );
    }
})