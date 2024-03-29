import React from "react"

class Box extends React.Component {
    constructor() {
        super() // permet de récupérer les props
    }

    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{color : `${this.props.color}`}}>
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit} </p>
            </div>
        )
    }
}
export default Box