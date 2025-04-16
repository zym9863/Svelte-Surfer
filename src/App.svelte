<script lang="ts">
  import DataDisplay from './lib/DataDisplay.svelte';
  import SvelteLogo from './assets/svelte.svg';
</script>

<main>
  <div class="header">
    <img src={SvelteLogo} alt="Logo" class="logo" />
    <h1>Svelte Surfer</h1>
  </div>
  <p class="description">基于Svelte的高性能数据流管理系统</p>
  
  <DataDisplay />
</main>

<style>
  :global(body) {
    margin: 0;
    background-color: #0A0A12;
    background-image: radial-gradient(#4F46E5 1px, transparent 1px);
    background-size: 50px 50px;
    min-height: 100vh;
  }

  main {
    padding: 3rem 2rem 2rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    margin-bottom: 0.5em;
  }

  .logo {
    width: 56px;
    height: 56px;
    filter: drop-shadow(0 0 12px #00F7FF88);
    border-radius: 50%;
    background: rgba(0,247,255,0.08);
    padding: 6px;
  }

  h1 {
    color: #00F7FF;
    text-align: center;
    font-size: 2.5em;
    font-family: 'Space Mono', monospace;
    text-shadow: 0 0 10px rgba(0, 247, 255, 0.5);
    margin: 0;
    letter-spacing: 2px;
  }

  .description {
    text-align: center;
    color: #fff;
    margin-bottom: 2em;
    font-family: 'Inter', sans-serif;
    opacity: 0.8;
    font-size: 1.2em;
    letter-spacing: 1px;
  }
</style>
