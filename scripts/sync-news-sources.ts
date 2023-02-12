import { syncSources } from '../src/modules/news/news.service';

const main = async () => {
  const result = await syncSources();
  console.log(result);
  process.exit();
};

main().catch(console.error);
