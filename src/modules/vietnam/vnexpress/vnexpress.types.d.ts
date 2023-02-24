export type VnExpressResponse = {
  data: Record<string, VnExpressArticles>;
};

export type VnExpressArticles = {
  data: VnExpressArticle[];
};

export type VnExpressArticle = {
  article_id: string;
  category_id: string;
  article_type: string;
  original_cate: string;
  site_id: string;
  title: string;
  lead: string;
  share_url: string;
  thumb_list: {
    thumb_500_300_100_1_crop: string;
    thumb_500_300_100_2_crop: string;
    thumb_default: string;
    thumb_380_228_100_1_crop: string;
    thumb_380_228_100_2_crop: string;
    thumb_300_180_100_1_crop: string;
    thumb_300_180_100_2_crop: string;
    thumb_100_100_100_1_crop: string;
    thumb_100_100_100_2_crop: string;
    thumb_120_72_100_1_crop: string;
    thumb_120_72_100_2_crop: string;
  };
  thumbnail_url: string;
  thumbnail_url2: string;
  thumbnail_url3: string;
  publish_time: string;
  publish_time_format: string;
  privacy: string;
  article_icon: number;
  author_id: string;
  score: string;
  iscomment: string;
  article_category: {
    cate_name: string;
    cate_url: string;
  };
  location_name: string;
  off_thumb: string;
  content: string;
  vn_zone: number;
  type_new: string;
};
