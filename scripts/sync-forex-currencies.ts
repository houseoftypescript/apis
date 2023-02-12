import { syncCurrencies } from '../src/modules/forex/forex.service';

const main = async () => {
  const result = await syncCurrencies();
  console.log(result);
  process.exit();
};

main().catch(console.error);
