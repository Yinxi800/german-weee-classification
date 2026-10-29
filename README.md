# 德国 WEEE 分类初筛

在线使用：[德国 WEEE 分类初筛工具](https://yinxi800.github.io/german-weee-classification/)

[![在线使用](https://img.shields.io/badge/在线使用-GitHub%20Pages-brightgreen)](https://yinxi800.github.io/german-weee-classification/)
[![隐私](https://img.shields.io/badge/产品信息-浏览器本地处理-success)](https://yinxi800.github.io/german-weee-classification/)

通过产品名称查询或条件引导，获取德国 WEEE 初步分类建议。产品信息在浏览器本地处理。

## 核心功能

- **🔎 产品匹配**：支持中文、德语和英语名称；未命中时提供相关产品候选，已识别信息不重复提问，必要规格同页确认。
- **💬 条件引导**：无需产品名称，同页填写功能、用途和尺寸后统一判断；两种方式各自保留进度。
- **📋 结果导出**：查看分类建议、复制结果或导出 JSON。
- **🔗 官方核对**：提供 EAR 官方查询入口和分类依据。

## 使用流程

```text
输入产品名称 → 确认关键条件 → 查看初筛结果 → 到 EAR 官方核对
```

## 使用说明

本工具用于初步筛查，不替代 EAR 官方决定或注册审核。EAR 产品词库是部分搜索结果的本地快照，并非完整数据库或实时查询；未匹配或条件不明确的产品需要进一步核实。

## 开发维护

名称索引、产品资料、判定规则和证据分别保存在 `data/names.js`、`data/products.js`、`lib/classification-engine.js` 和 `data/evidence.js`。新增产品可关联已有规则，无需修改页面判断分支。官方原始示例与人工整理说明分开标记，未覆盖的特殊条件仍进入复核。

使用 Node.js 运行 `node tests/engine.test.cjs` 和 `node tests/knowledge.test.cjs`；浏览器交互测试为 `tests/browser.test.cjs`，需要 Playwright。
