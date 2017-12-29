var React = require('react')
class Basic extends React.Component {
    render () {
        return (
            <div>demo</div>
        )
    }
}
module.exports = require("react-hot-loader").hot(module)(Basic)
