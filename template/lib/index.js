import { Component } from "react"
import extend from "extend"
import util from "util.react"
require('./index.css')
class {{ componentname name }} extends Component {
    constructor (props) {
        super(props)
        util.betterDefaultValue(props)
        const self = this
        this.state = {}
    }
    render() {
        const self = this
        var rootClassName = [
            self.props.prefixClassName,
            util.themes(self.props),
        ].join(' ')

        return (
            <span
                ref="root"
                className={rootClassName}
            >
            {self.props.children}
            </span>
        )
    }
}
require('./props').default({{ componentname name }})
export default {{ componentname name }}
module.exports= {{ componentname name }}
