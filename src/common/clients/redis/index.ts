import environments from '../../environments';
import { SetOptions, createClient } from 'redis';
import logger from '../../libs/logger';

class RedisClient {
  private client: ReturnType<typeof createClient>;

  constructor(url: string) {
    this.client = createClient({ url });
  }

  public async connect(): Promise<void> {
    if (this.client.isOpen) return;
    await this.client.connect();
  }

  public async get<T>(key: string): Promise<T | null> {
    if (!this.client.isOpen) throw new Error('Redis is not connected yet');
    const value: string | null = await this.client.get(key);
    if (!value) return null;
    try {
      return JSON.parse(value) as T;
    } catch (error) {
      logger.error(`redisClient.get - JSON.parse - Error ${error}`);
      return value as T;
    }
  }

  public async set<T>(
    key: string,
    value: T,
    options: SetOptions = {}
  ): Promise<string | null> {
    if (!this.client.isOpen) throw new Error('Redis is not connected yet');
    return this.client.set(key, JSON.stringify(value), options);
  }

  public async disconnect(): Promise<void> {
    if (!this.client.isOpen) return;
    await this.client.disconnect();
  }
}

const redisClient = new RedisClient(environments.database.redis);

export default redisClient;
