{{#if_eq $frame "react"}}
import { Component } from "react"
import extend from "extend"
import util from "util.react"
require('./index.css')
class {{ componentname name }} extends Component {
    constructor (props) {
        super(props)
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
                ref={(node) => { self.refsRoot = node}}
                style={self.props.style}
                className={rootClassName}
            >
            {self.props.children}
            </span>
        )
    }
}
require('./props').default({{ componentname name }})
export default {{ componentname name }}
module.exports = {{ componentname name }}
{{/if_eq}}
{{#if_eq $frame "none"}}
import extend from "safe-extend"
class {{ componentname name }} {
    constructor(props) {
        this.settings = extend.clone(props)
        this.settings.el.innerHTML = 'init'
    }
}
export default {{ componentname name }}
module.exports = {{ componentname name }}
{{/if_eq}}
{{#if_eq $frame "vue"}}
module.exports = require('./index.vue')
{{/if_eq}}
