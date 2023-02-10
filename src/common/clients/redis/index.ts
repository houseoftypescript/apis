import environments from '../../environments';
import { createClient } from 'redis';

console.log(environments.database.redis);
export const redisClient = createClient({ url: environments.database.redis });

export default redisClient;
