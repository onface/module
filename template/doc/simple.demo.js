{{#if_eq $frame "react"}}
var React = require('react')
var ReactDOM = require('react-dom')
var {{ componentname name }} = require('{{ name }}')
class Simple extends React.Component {
    render () {
        return (
            <div>
                <{{ componentname name }}>default</{{ componentname name }}>
            </div>
        )
    }
}
/*ONFACE-DEL*/Simple = require("react-hot-loader").hot(module)(Simple)
ReactDOM.render(
    <Simple />,
    document.getElementById('simple-demo')
)

{{/if_eq}}
{{#if_eq $frame "none"}}
var {{componentname name}} = require('{{name}}')
new {{componentname name}}({
    el: document.getElementById('simple-demo')
})
{{/if_eq}}
{{#if_eq $frame "vue"}}
import Vue from 'vue';
import app from './simple.vue';

new Vue({
	el:'#simple-demo',
	template:'<app/>',
	components: { app }
})
{{/if_eq}}
