var iPackage = require('../package.json')
var markrun = require('markrun')
var path = require('path')
var fs = require('fs')
var htmlEntryScriptParser = function (content, file) {
    var matchScript = /\<script(.*)?src="(.*demo\.(vue\.)?js)"\s*\>/g
    return content.replace(matchScript, function (source, attr, src) {
        var url = path.join(file.dirname, src).replace(fis.project.getProjectPath(), '')
        var html = `
        <script>
          document.write('<scr'+ 'ipt ${attr} src="${url}"></scr' + 'ipt>')
        `
        return html
    })
}

fis.match('**.md', {
    parser: [
        function (content, file) {
            var type = 'default'
            var html = markrun(content, {
                templateDefaultData: {
                    keywords: '',
                    description: '',
                    navPath: 'sidebar.html',
                    PACKAGE: iPackage
                },
                template: function (data) {
                    var typePath = data.type || type
                    var templatePath = path.join(__dirname, '../doc/theme/template/' + typePath + '.html')
                    var templateContent = fs.readFileSync(templatePath).toString()
                    return templateContent
                }
            })
            html = html.replace(/href="([^"]+)"/g, function (all, url) {
               if (!require('is-absolute-url')(url) && !/^\/\//.test(url)) {
                   url = url.replace(/README\.md$/,'index.html')
                           .replace(/\.md$/,'.html')
               }
               return 'href="' + url + '"'
            })
            return html
        },
        htmlEntryScriptParser
    ],
    useDomain: true,
    isHtmlLike: true,
    rExt: '.html'
})
fis.match('(**)README.md', {
    release: '$1index'
})
fis.match('**.js', {
    release: false
})
fis.match('doc/theme/**', {
    release: true
}, true)

fis.match('doc/theme/template/default.html', {
    release: false
}, true)
