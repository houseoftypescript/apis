export type FixerRatesResponse = {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Record<string, number>;
};

export type FixerSymbolsResponse = {
  success: boolean;
  symbols: Record<string, string>;
};
