export type Place = {
  country: string;
  countryCode: string;
  name: string;
  parentid: number;
  placeType: {
    code: number;
    name: string;
  };
  url: string;
  woeid: number;
};

export type Trend = {
  name: string;
  url: string;
  promoted_content: boolean;
  query: string;
  tweet_volume: number;
};

export type Location = {
  name: string;
  woeid: number;
};

export type TrendsResponse = {
  trends: Trend[];
  as_of: string;
  created_at: string;
  locations: Location[];
}[];
