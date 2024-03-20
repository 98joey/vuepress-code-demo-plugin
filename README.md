# vuepress-plugin-code-demo-block

- 在.md文件中按下列方式编写

```markdown
// 只显示组件预览
::: code-demo xxx.vue --isOnlyShowComp --title:这是一个示例
:::

// 只显示源码
::: code-demo xxx.vue --isOnlyShowCode
:::

// 预览及源码均显示
::: code-demo xxx.vue
:::
```



### 配置参数

|        参数        |    说明     |  默认值  |
|:----------------:|:---------:|:-----:|
| --isOnlyShowComp | 仅显示组件预览功能 | false |
| --isOnlyShowCode |  仅显示源码功能  | false |
|   --title:xxx    |   设置标题    |   -   |



### 参考

[markdown-it](https://github.com/markdown-it/markdown-it)

[markdown-it-container](https://github.com/hackmdio/markdown-it-container)

[vuepress](http://www.fenovice.com/doc/vuepress-next/advanced/plugin.html)
