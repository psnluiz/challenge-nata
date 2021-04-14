import React from 'react';

export default class InputBox extends React.Component{
    constructor(props){
        super(props);

        this.state = { distance: '' };
    }

    onDistanceSubmit = () => {
        console.log(this.state.distance);
        this.props.onFormSubmit(this.state.distance);
    };


    render(){
        return (
            <>
                <div className="ui center aligned header">
                    <h1>Star <br/>Travelers</h1>
                </div>
                <div className="ui segment">
                    <form className="ui form large">
                        <label className="my-label">Quão distante você quer ir no espaço?</label>
                        <div className="ui input large" style={{marginLeft: "10px"}} >
                            <input 
                                type="text" 
                                placeholder="Distance in mega lights"
                                value={this.state.distance}
                                onChange={(e) => {
                                    if (isNaN(Number(e.target.value))) {
                                      return;
                                    } else {
                                      this.setState({ distance: e.target.value });
                                    }
                                  }}
                            />
                        </div>
                        <div className="ui button large" style={{marginLeft: "10px"}} onClick={this.onDistanceSubmit}> 
                            Viajar
                        </div>
                    </form>
                </div>
            </>
        );
    };
};