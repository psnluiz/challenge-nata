import React from 'react';

export default class InputBox extends React.Component{
    constructor(props){
        super(props);

        this.state = { distance: '' };
    }

    onDistanceSubmit = () => {
        this.props.onFormSubmit(this.state.distance);
    };

    render(){
        return (
            <>
                <div className="ui center aligned header">
                    <h1>Star <br/>Travelers</h1>
                </div>
                <div className="ui segment">
                    <form className="ui form large" onSubmit={(e) => e.preventDefault()}>
                        <label className="my-label">Quão distante você quer ir no espaço?</label>
                        <div className="row">
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
                        </div>
                    </form>
                </div>
            </>
        );
    };
};