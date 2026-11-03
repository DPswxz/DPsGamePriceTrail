import { readFile, writeFile, rename } from 'node:fs/promises';

const DAY_MS = 86400000;
const OFFSET_MS = 8 * 3600000;

export function nextHongKongRefresh(now = Date.now()) {
  const today = Math.floor((now + OFFSET_MS) / DAY_MS) * DAY_MS - OFFSET_MS;
  const deadline = today + 4 * 3600000;
  return deadline > now ? deadline : deadline + DAY_MS;
}

// 执行前持久保存下一次时间，失败和重启均不会导致当天反复请求。
export class DailyRefresh {
  constructor(file, now = () => Date.now()) {
    this.file = file;
    this.now = now;
  }

  async init() {
    try {
      const state = JSON.parse(await readFile(this.file, 'utf8'));
      if (Number.isFinite(state.nextAt) && state.nextAt > 0) {
        this.nextAt = state.nextAt;
        return;
      }
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    this.nextAt = nextHongKongRefresh(this.now());
    await this.save();
  }

  async claim() {
    const now = this.now();
    if (now < this.nextAt) return false;
    this.nextAt = nextHongKongRefresh(now);
    await this.save();
    return true;
  }

  async save() {
    const temporary = `${this.file}.tmp`;
    await writeFile(temporary, JSON.stringify({ nextAt: this.nextAt }) + '\n');
    await rename(temporary, this.file);
  }
}
