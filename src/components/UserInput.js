import React from 'react';

class UserInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ticker: '',
        company: '',
        startDate: '',
        window: '',
        votes: '',
        userPrediction: '',
        userComment: ''
      }
    }
    render() {
        return (
            <div>
                Whats your Prediction?
                <form>
                    <label> Price: <input type="text" name="name" />
                    </label><br/>
                    <label> Comment/Analysis: <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}


export default UserInput;