import { syncRates } from '../src/modules/forex/forex.service';

const main = async () => {
  const result = await syncRates();
  console.log(result);
  process.exit();
};

main().catch(console.error);
