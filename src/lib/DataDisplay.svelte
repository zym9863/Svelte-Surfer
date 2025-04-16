<script lang="ts">
  import { dataStore } from './stores/DataStore';
  import { onMount } from 'svelte';

  let loading: boolean;
  let error: string | null;
  let data: any[];
  let lastUpdated: string;

  // 订阅数据流变化
  dataStore.subscribe(state => {
    loading = state.loading;
    error = state.error;
    data = state.data;
    lastUpdated = new Date(state.lastUpdated).toLocaleString();
  });

  // 组件挂载时开始获取数据
  onMount(() => {
    dataStore.fetchData();
  });

  // 手动刷新数据
  function refreshData() {
    dataStore.fetchData();
  }

  // 清除错误信息
  function clearError() {
    dataStore.clearError();
  }
</script>

<div class="data-display">
  <h2>实时数据流</h2>
  
  <div class="controls">
    <button on:click={refreshData} disabled={loading}>刷新数据</button>
    {#if error}
      <button on:click={clearError} class="error-btn">清除错误</button>
    {/if}
  </div>

  {#if loading}
    <div class="loading">加载中...</div>
  {:else if error}
    <div class="error">{error}</div>
  {:else}
    <div class="data-container">
      {#each data as item (item.id)}
        <div class="data-item">
          <span>ID: {item.id}</span>
          <span>值: {item.value}</span>
        </div>
      {/each}
    </div>
    <div class="last-updated">最后更新: {lastUpdated}</div>
  {/if}
</div>

<style>
  .data-display {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: rgba(10, 10, 18, 0.8);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(79, 70, 229, 0.1);
    box-shadow: 0 8px 32px rgba(0, 247, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .data-display:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 48px rgba(0, 247, 255, 0.2);
  }

  h2 {
    color: #00F7FF;
    margin-bottom: 20px;
    font-family: 'Space Mono', monospace;
    text-shadow: 0 0 8px rgba(0, 247, 255, 0.3);
  }

  .controls {
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
  }

  button {
    padding: 8px 16px;
    background: linear-gradient(45deg, #4F46E5, #00F7FF);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
    position: relative;
    overflow: hidden;
  }

  button::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(130, 0, 255, 0.4) 0%, transparent 70%);
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.5s;
  }

  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 247, 255, 0.3);
  }

  button:hover::after {
    transform: translate(-50%, -50%) scale(3);
  }

  button:disabled {
    background: #1a1a2e;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .error-btn {
    background: linear-gradient(45deg, #6C00FF, #FF0080);
  }

  .loading {
    text-align: center;
    color: #00F7FF;
    padding: 20px;
    font-family: 'JetBrains Mono', monospace;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
  }

  .error {
    color: #FF0080;
    padding: 15px;
    background: rgba(255, 0, 128, 0.1);
    border-radius: 8px;
    margin-bottom: 15px;
    font-family: 'IBM Plex Sans', sans-serif;
    border: 1px solid rgba(255, 0, 128, 0.2);
  }

  .data-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .data-item {
    background: rgba(79, 70, 229, 0.1);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 247, 255, 0.1);
    display: flex;
    justify-content: space-between;
    border: 1px solid rgba(0, 247, 255, 0.1);
    transition: all 0.3s ease;
    font-family: 'JetBrains Mono', monospace;
    color: #00F7FF;
  }

  .data-item:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 24px rgba(0, 247, 255, 0.2);
    background: rgba(79, 70, 229, 0.2);
  }

  .last-updated {
    margin-top: 20px;
    color: rgba(0, 247, 255, 0.6);
    font-size: 0.9em;
    text-align: right;
    font-family: 'JetBrains Mono', monospace;
  }
</style>