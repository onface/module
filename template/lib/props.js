{{#if_eq $frame "react"}}
import p from 'prop-types'
export default function (app) {
    app.defaultProps = {
        prefixClassName: 'face-name',
        themes: ''
    }
    app.propTypes = {
        prefixClassName: p.string,
        themes: p.string
    }
}
{{/if_eq}}
{{#if_eq $frame "none"}}

{{/if_eq}}
