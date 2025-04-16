import { writable } from 'svelte/store';

interface DataState {
  loading: boolean;
  error: string | null;
  data: any[];
  lastUpdated: number;
}

class DataStore {
  private store = writable<DataState>({
    loading: false,
    error: null,
    data: [],
    lastUpdated: Date.now()
  });

  subscribe = this.store.subscribe;

  async updateData(newData: any[]) {
    this.store.update(state => ({
      ...state,
      loading: false,
      error: null,
      data: newData,
      lastUpdated: Date.now()
    }));
  }

  async fetchData() {
    this.store.update(state => ({ ...state, loading: true, error: null }));
    try {
      // 模拟异步数据获取
      const response = await new Promise(resolve => 
        setTimeout(() => resolve([{ id: 1, value: Math.random() }]), 500)
      );
      this.updateData(response as any[]);
    } catch (error) {
      this.store.update(state => ({
        ...state,
        loading: false,
        error: error instanceof Error ? error.message : '未知错误'
      }));
    }
  }

  clearError() {
    this.store.update(state => ({ ...state, error: null }));
  }
}

export const dataStore = new DataStore();