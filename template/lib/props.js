import p from 'prop-types'
export default function (app) {
    app.defaultProps = {
        prefixClassName: '{{ $repository }}-{{ $username }}',
        themes: ''
    }
    app.propTypes = {
        prefixClassName: p.string,
        themes: p.string
    }
}
