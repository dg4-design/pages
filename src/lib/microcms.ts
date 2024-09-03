import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
});

export const categoryNames = [
  {
    en: '?',
    ja: '?',
    order: 10,
  },
  {
    en: 'Viewing Content',
    ja: '端末機器',
    order: 20,
  },
  {
    en: 'Taking Shots',
    ja: '撮影する',
    order: 30,
  },
  {
    en: 'Audio',
    ja: '音響処理',
    order: 40,
  },
  {
    en: 'Music Performance',
    ja: '演奏する',
    order: 50,
  },
] as const;

export type categoryNamesProps = (typeof categoryNames)[number];

export type Post = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  order: number;
  name: string;
  maker: string[];
  about: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  generation?: number;
  category: categoryNamesProps['en'];
  variety?: string;
  owning?: number;
};

export async function getAllPosts() {
  const limit = 100;
  let offset = 0;
  let allPosts: Post[] = [];

  while (true) {
    const response = await client.get({
      endpoint: 'equipments',
      queries: { limit, offset },
    });

    allPosts = [...allPosts, ...response.contents];

    if (response.totalCount <= allPosts.length) {
      break;
    }

    offset += limit;
  }

  return allPosts;
}

export async function getPostById(id: string) {
  const post = await client.get({
    endpoint: 'equipments',
    contentId: id,
  });
  return post as Post;
}
