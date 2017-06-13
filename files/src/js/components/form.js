var Form = React.createClass({

    getInitialState: function(){
        return {name:'', email:'', subject:'R', messenger:''}
    },

    handleNameChange: function(e){
        this.setState({ name: e.target.value })
    },

    handleEmailChange: function(e){
        this.setState({ email: e.target.value })
    },

    handleSubjectChange: function(e){
        this.setState({ subject: e.target.value })
    },

    handleMessengerChange: function(e){
        this.setState({ messenger: e.target.value })
    },

    handleSubmit: function(e){
        e.preventDefault();
        var name = this.state.name.trim();
        var email = this.state.email.trim();
        var subject = this.state.subject;
        var messenger = this.state.messenger.trim();
        
        if (!name|| !email || !subject|| !messenger ){
            return confirm("error")
        };
        this.props.onContactSubmit({idNumber:this.props.idNumber.toString(), name:name, email:email, subject:subject, messenger:messenger})
    },

    render: function(){
        var InputStyle = {
            padding: "20px",
            fontSize: "16px",
            color: "#A7A5A5"
        };
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={this.handleNameChange} type="text" className="form-control" id="name" style={InputStyle} placeholder="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleEmailChange} type="email" className="form-control" id="email" style={InputStyle} placeholder="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select onChange={this.handleSubjectChange} defaultValue={this.state.subject} className="form-control"  id="suject" >
                        <option value="A">Angular</option>
                        <option value="J">Jquery</option>
                        <option value="R">React</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="messenger">Email</label>
                    <textarea onChange={this.handleMessengerChange}row="3" className="form-control" id="messenger" style={InputStyle}> </textarea>
                </div>
                <Button text="Submit" textActive="Wait..."/>
            </form>
        );
    },
});