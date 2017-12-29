var React = require('react')
var Button = require('button.react')
class Basic extends React.Component {
    render () {
        return (
            <div className="basicDemo" >
                <Button>default</Button>
                <Button type="primary" >primary</Button>
                <Button type="danger" >danger</Button>
                <Button type="info" >info</Button>
                <Button type="warning" >warning</Button>
                <Button type="success" >success</Button>
                <Button type="primary" ghost >ghost</Button>
                <Button ghost dashed >ghost dashed</Button>
                <Button type="primary" ghost dashed >primary ghost dashed</Button>
                <Button dashed >dashed</Button>
                <Button type="primary" loading >loading</Button>
                <Button type="disabled" >diasbled</Button>
            </div>
        )
    }
}
module.exports = require("react-hot-loader").hot(module)(Basic)
