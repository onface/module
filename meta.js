var exec = require('child_process').execSync
var fs = require('fs')
var path = require('path')

var componentname = function (name) {
    name = name || ''
    name = name.replace(/face\-/,'').replace(/(react|vue|ng)/g,'').replace(/(_|-)/g, '').replace(/\..*$/,'')
    if (name.length === 0) {
        name = 'some'
    }
    var capitalizeName = name[0].toUpperCase() + name.slice(1)
    return capitalizeName
}
var getUser = function () {
    var name
    var email

    try {
        name = exec('git config --get user.name')
        email = exec('git config --get user.email')
    } catch (e) {}

    name = name && JSON.stringify(name.toString().trim()).slice(1, -1)
    email = email && (' <' + email.toString().trim() + '>')
    return (name || '') + (email || '')
}
module.exports = {
    prompts: {
        name: {
            type: 'string',
            required: true,
            message: 'Npm package name'
        },
        description: {
            type: 'string',
            required: true,
            message: 'Npm package description',
            default: function (data) {
                return componentname(data.name)
            }
        },
        $frame: {
            "type": "list",
            "message": "Choose your frame",
            "choices": [
                "react",
                "vue",
                "none"
            ]
        },
        $username: {
            type: 'string',
            required: true,
            message: 'Github username or organization',
            default: 'onface'
        },
        $repository: {
            type: 'string',
            required: true,
            message: 'Git repository',
            default: function (data) {
                return data.name
            }
        },
        creatorAccount: {
            type: 'string',
            message: 'Maintainer account (Github username, is not organization)',
            default: function (data) {
                return data.$username
            }
        },
        creatorFullName: {
            type: 'string',
            message: 'Maintainer full name (example: Michael Jackson)',
            default: function (data) {
                return data.creatorAccount
            }
        },
        homepage: {
            type: 'string',
            message: 'Online homepage?',
            required: true,
            default: function (data) {
                return 'https://'+ data.$username + '.github.io/' + data.$repository + '/'
            }
        }
    },
    helpers: {
        componentname: componentname,
        vuecomponentname: function (name) {
            return 'face-' + name.replace(/\.vue$/, '')
        },
        saucelabsname: function (name) {
            name = name || ''
            name = name.replace(/\./g,'_')
            return name
        }
    },
    complete: function (data) {
        // switch(data.$frame) {
        //     case 'vue':
        //         fs.unlinkSync(
        //             path.join(
        //                 __dirname,
        //                 './lib/index.js'
        //             )
        //         )
        //         Basic.vue
        //     break
        //     case 'react':
        //         fs.unlinkSync(
        //             path.join(
        //                 __dirname,
        //                 './lib/index.vue'
        //             )
        //         )
        //     break
        //     case 'none':
        //         fs.unlinkSync(
        //             path.join(
        //                 __dirname,
        //                 './lib/index.vue'
        //             )
        //         )
        //     break
        //     default:
        //
        // }
        console.log(
            `To get started:\n\n  cd ./${data.destDirName}\n  yarn\n  npm run dev\n  npm run s\n\nDocumentation can be found at ${data.destDirName}/developers-to-read.md`
        )
    }
}
