var React = require('react')
var {{ componentname name }} = require('{{ name }}')
class Basic extends React.Component {
    render () {
        return (
            <div className="basicDemo" >
                <{{ componentname name }}>default</{{ componentname name }}>
            </div>
        )
    }
}
/*ONFACE-DEL*/Basic = require("react-hot-loader").hot(module)(Basic)
module.exports = Basic
