{{#if_eq $frame "react"}}
var ReactDOM = require('react-dom')
var Basic = require('./Basic')
ReactDOM.render(
    <Basic />,
    document.getElementById('basic-demo')
)

{{/if_eq}}
{{#if_eq $frame "none"}}
var {{componentname name}} = require('{{name}}')
new {{componentname name}}({
    el: document.getElementById('basic-demo')
})
{{/if_eq}}
{{#if_eq $frame "vue"}}
import Vue from 'vue';
import app from './Basic.vue';

new Vue({
	el:'#vue-demo',
	template:'<app/>',
	components: { app }
})
{{/if_eq}}
