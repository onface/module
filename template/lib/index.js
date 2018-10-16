{{#if_eq $frame "react"}}
import { Component } from "react"
import extend from "safe-extend"
import util from "util.react"
import spreadProps from "react-spread-props"
require('./index.css')
class {{ componentname name }} extends Component {
    constructor (props) {
        super(props)
        const self = this
        this.state = {}
    }
    render() {
        const self = this
        const ref = util.ref(self)
        let rootClassName = [
            self.props.prefixClassName,
            util.themes(self.props),
        ].join(' ')
        let domProps = spreadProps(
           self.props,
           {
               className: rootClassName,
               /*
               onClick: function (e) {
                   console.log('proxy click')
                   // this.stopTrigger()
               },
               */
           }
       )
        return (
            <span
                ref={ref`root`}
               {...domProps}
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
import Component from "./component"
import "./index.css"
const comment = {
  install: function(Vue) {
    Vue.component(Component.name, Component)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(comment)
}
export default comment
{{/if_eq}}
