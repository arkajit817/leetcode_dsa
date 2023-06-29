import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        // this.setState({
        //     count : this.state.count +1
        // })
        this.setState(prevState => {
            return {
                count: prevState.count + 1 //this is good way of doing
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementCount}> Count {this.state.count}</button>

            </div>
        )
    }
}

export default ClassComponent