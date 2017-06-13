var Form = React.createClass({

    render: function(){
        var InputStyle = {
            padding: "20px",
            fontSize: "16px",
            color: "#A7A5A5"
        };
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" style={InputStyle} placeholder="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" style={InputStyle} placeholder="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select defaultValue="R" className="form-control"  id="suject" >
                        <option value="A">Angular</option>
                        <option value="J">Jquery</option>
                        <option value="R">React</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="messenger">Email</label>
                    <textarea row="3" className="form-control" id="messenger" style={InputStyle}> </textarea>
                </div>
            </form>
        );
    },
});