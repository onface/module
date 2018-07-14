# {{ name }}

<!--MR-D{tpl: 'home'}-->

<!-- MARKRUN-HTML
<style>h1 {display:none;}</style>
-->

<div class="face-one-intro">
    <div class="face-one-intro-title">{{name}}</div>
    <h2 class="face-one-intro-desc">
        {{ description }}
    </h2>
    <!-- MARKRUN-HTML
        <div class="face-one-readmedemo">
            <div class="face-one-readmedemo-node">
                <div id="simple-demo" class="face-one-readmedemo-node-render"></div>
            </div>
        </div>
        <script data-markrun-lastrun="true">
        ;(function(){
            var  date = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate()
            document.write('<scri' + 'pt src="./doc/simple.demo.js?v="' + date + '" ></sc' + 'ript>')
        }())
        </script>
    -->
    <div class="face-one-intro-tool">
        <a href="https://{{$username}}.github.io/{{$repository}}" class="face-one-intro-btn face-one-intro-btn--primary mr-online-hide" >在线文档</a>
        <!-- MARKRUN-HTML
            <a href="./doc/intro.md" class="face-one-intro-btn face-one-intro-btn--primary">指引</a>
            <a href="http://github.com/{{$username}}/{{$repository}}" class="face-one-intro-btn">GITHUB</a>
        -->
    </div>
</div>
<div class="face-one-feature">
    <table style="width:100%;" data-comments="In order to github typesetting so use the table tag" >
        <tr>
            <td align="center" >
                <div class="face-one-feature-item">
                    <img src="./doc/theme/media/cogwheel.svg" alt="" class="face-one-feature-item-photo">
                    <br />
                    {{#if_eq $frame "react"}}
                        <div class="face-one-feature-item-label">定制开发</div>
                        <div class="face-one-feature-item-desc">提供样式文件便于二次开发</div>
                    {{/if_eq}}
                    {{#if_eq $frame "vue"}}
                        <div class="face-one-feature-item-label">定制开发</div>
                        <div class="face-one-feature-item-desc">提供样式文件便于二次开发</div>
                    {{/if_eq}}
                    {{#if_eq $frame "none"}}
                        <div class="face-one-feature-item-label">定制开发</div>
                        <div class="face-one-feature-item-desc">配套 react vue 成品组件</div>
                    {{/if_eq}}
                </div>
            </td>
            <td align="center" >
                <div class="face-one-feature-item">
                    <img src="./doc/theme/media/browser.svg" alt="" class="face-one-feature-item-photo">
                    <br />
                    <div class="face-one-feature-item-label">用户体验</div>
                    <div class="face-one-feature-item-desc">界面细致、即时反馈，更好的用户体验</div>
                </div>
            </td>
            <td align="center" >

                <div class="face-one-feature-item">
                    <img src="./doc/theme/media/share.svg" alt="" class="face-one-feature-item-photo">
                    <br />
                    {{#if_eq $frame "react"}}
                        <div class="face-one-feature-item-label">组件生态</div>
                        <div class="face-one-feature-item-desc">可与 <a href="https://onface.live/">onface</a> 中任意组件组合使用</div>
                    {{/if_eq}}
                    {{#if_eq $frame "vue"}}
                        <div class="face-one-feature-item-label">组件生态</div>
                        <div class="face-one-feature-item-desc">可与 <a href="http://onface.github.io/">onface</a> 中任意组件组合使用</div>
                    {{/if_eq}}
                    {{#if_eq $frame "none"}}
                        <div class="face-one-feature-item-label">面向过程接口</div>
                        <div class="face-one-feature-item-desc">接口易于理解，快速与业务逻辑结合</div>
                    {{/if_eq}}
                </div>
            </td>
        </tr>
    </table>
</div>


<div style="text-align:center;" >
    <a href="https://travis-ci.org/onface/{{ $repository }}" style="text-decoration: none;" >
        <img alt="Build Status" src="https://api.travis-ci.org/onface/{{ $repository }}.svg?branch=master" />
    </a>
    <a href="https://npmjs.org/package/{{ name }}"  style="text-decoration: none;" >
        <img alt="NPM version" src="https://img.shields.io/npm/v/{{ name }}.svg?style=flat" />
    </a>
    <a href="https://npmjs.org/package/{{ name }}"  style="text-decoration: none;" >
        <img alt="NPM downloads" src="https://img.shields.io/npm/dm/{{ name }}.svg?style=flat" />
    </a>
</div>


<a href="https://saucelabs.com/u/{{ $username }}-{{ $repository }}" >
    <img alt="Saucelabs Tests" style="display:block;margin-left:auto;margin-right:auto;" src="https://saucelabs.com/browser-matrix/{{ $username }}-{{ $repository }}.svg" >
</a>


<h3 class="face-one-feature-title">
    维护者
</h3>
<div class="face-one-feature face-one-feature--creator">
    <table style="width:100%;" data-comments="In order to github typesetting so use the table tag" >
        <tr>
            <td align="center" >
                <a class="face-one-feature-item" href="https://github.com/{{ creatorAccount }}">
                    <img src="https://github.com/{{ creatorAccount }}.png" width="150 height="150" alt="" class="face-one-feature-item-avatar">
                    <br />
                    <div class="face-one-feature-item-label">{{ creatorFullName }}</div>
                </a>
            </td>
        </tr>
    </table>
</div>
