[English Version](./README_EN.md)

# Svelte Surfer

Svelte Surfer 是一个基于 Svelte + TypeScript + Vite 的高性能数据流管理系统示例项目，演示了如何使用 Svelte Store 实现实时数据流的获取、展示与错误处理。

## 主要特性
- 实时数据流展示与刷新
- 错误处理与提示
- 响应式 UI 设计，支持深色模式
- 代码结构清晰，便于扩展

## 目录结构
```
src/
  App.svelte           // 应用主入口，页面结构与样式
  main.ts              // 应用挂载入口
  app.css              // 全局样式
  assets/
    svelte.svg         // Logo 资源
  lib/
    DataDisplay.svelte // 数据流展示与交互组件
    Counter.svelte     // 计数器示例组件
    stores/
      DataStore.ts     // 数据流状态管理与异步获取逻辑
```

## 主要组件说明
- **App.svelte**：应用主页面，包含 Logo、标题、描述和数据展示区。
- **DataDisplay.svelte**：核心数据展示组件，负责从数据仓库获取数据，支持刷新、错误清除等操作。
- **DataStore.ts**：自定义 Svelte Store，封装了数据的异步获取、状态管理与错误处理。
- **Counter.svelte**：简单计数器组件（演示用，可选）。

## 数据流实现
- 使用 Svelte 的 `writable` store 管理数据状态（loading、error、data、lastUpdated）。
- `fetchData` 方法模拟异步数据获取，支持刷新与错误处理。
- 组件通过订阅 store 实现响应式 UI 更新。

## 安装与启动
1. 安装依赖：
   ```bash
   npm install
   ```
2. 启动开发服务器：
   ```bash
   npm run dev
   ```
3. 构建生产包：
   ```bash
   npm run build
   ```
4. 预览生产包：
   ```bash
   npm run preview
   ```

## 截图
![Svelte Surfer 截图](./src/assets/svelte.svg)

## 依赖环境
- Node.js 16+
- Svelte 5+
- TypeScript 5+
- Vite 6+

## 许可证
MIT
