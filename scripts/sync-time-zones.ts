import { syncTimeZones } from '../src/modules/time-zones/time-zones.service';

const main = async () => {
  const result = await syncTimeZones();
  console.log(result);
  process.exit();
};

main().catch(console.error);
