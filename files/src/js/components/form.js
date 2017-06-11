var Form = React.createClass({
    render: function(){
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="messenger">Email</label>
                    <textarea row="3" className="form-control" id="messenger"> </textarea>
                </div>
            </form>
        );
    },
});