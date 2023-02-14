export type Chamber = 'house' | 'senate';

export type CongressResponse = {
  status: string;
  copyright: string;
  results: CongressResult[];
};

export type CongressResult = {
  congress: string;
  chamber: string;
  num_results: number;
  committees?: CongressCommittee[];
  members?: CongressMember[];
};

export type CongressCommittee = {
  id: string;
  name: string;
  chamber: string;
  url: string;
  api_uri: string;
  chair: string;
  chair_id: string;
  chair_party: string;
  chair_state: string;
  chair_uri: string;
  ranking_member_id: string;
  subcommittees: { id: string; name: string; api_uri: string }[];
};

export type CongressMember = {
  id: string;
  title: string;
  short_title: string;
  api_uri: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  suffix: string;
  date_of_birth: string;
  gender: string;
  party: string;
  leadership_role: string;
  twitter_account: string;
  facebook_account: string;
  youtube_account: string;
  govtrack_id: string;
  cspan_id: string;
  votesmart_id: string;
  icpsr_id: string;
  crp_id: string;
  google_entity_id: string;
  fec_candidate_id: string;
  url: string;
  rss_url: string;
  contact_form: string;
  in_office: boolean;
  cook_pvi: string;
  dw_nominate: string;
  ideal_point: string;
  seniority: string;
  next_election: string;
  total_votes: number;
  missed_votes: number;
  total_present: number;
  last_updated: string;
  ocd_id: string;
  office: string;
  phone: string;
  fax: string;
  state: string;
  district: string;
  at_large: false;
  geoid: string;
  missed_votes_pct: number;
  votes_with_party_pct: number;
  votes_against_party_pct: number;
};
