var iPackage = require('../package.json')
var markrun = require('markrun')
var path = require('path')
var fs = require('fs')
var json5 = require('json5')
var compileConfig = require('../compile')
fis.match('**.css', {
    parser: fis.plugin('less-2.x', compileConfig.less),
    rExt: '.css'
})


var htmlEntryScriptParser = function (content, file) {
    var matchScript = /\<script(.*)?src="(.*demo\.js)"\s*\>/g
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
                compile: {
                    code: function (source, data, info) {
                        var settings = json5.parse(source)
                        var filePath= path.join(info.file.dirname, settings.source)
                        var code = fs.readFileSync(filePath).toString()
                        settings.desc = settings.desc || ''
                        settings.title = settings.title || path.parse(filePath).name
                        settings.html = settings.html || ''
                        code = code.replace(/\/\*ONFACE-DEL\*\/.*/g, '')
                        code = markrun.markdownParserHighlight(code, 'js')
                        return {
                            lang: 'replace',
                            code: `
<div class="face-one-code ${settings.open?' face-one-code--open':''}">
                    <div class="face-one-code-example">
                        ${settings.html}
                    </div>
                    <div class="face-one-code-info">
                        <div class="face-one-code-info-title">${settings.title}</div>
                        <div class="face-one-code-info-desc">
                            ${markrun(settings.desc, {template: '<%- content %>'})}
                        </div>
                        <span class="face-one-code-info-switchCode fi fi-code"></span>
                    </div>
                    <div class="face-one-code-source">
                        <div class="face-one-code-source-tool">
                            <span class="face-one-code-source-tool-copy fi fi-files-o"></span>
                        </div>
                        ${code}
                    </div>
                    <script data-markrun-lastrun="true">
                    document.write('<scri' + 'pt src="${settings.js}"' + '" ></sc' + 'ript>')
                    </script>
                </div>
                            `
                        }
                    }
                },
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
            }, {
                file: file
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
