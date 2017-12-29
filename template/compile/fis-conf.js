var iPackage = require('../package.json')
var markrun = require('markrun')
var path = require('path')
var fs = require('fs')
fis.match('doc/theme/**.html', {
    release: false
})
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
        }
    ],
    useDomain: true,
    isHtmlLike: true,
    rExt: '.html'
})
fis.match('(**)README.md', {
    release: '$1index'
})
