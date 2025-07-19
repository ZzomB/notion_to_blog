import post1 from '../notion-data/126ce18c-fd83-8023-9ad1-d0e1809b21c3.json'
import post2 from '../notion-data/235edab2-f6d9-803c-9baf-dd85fe18c9a6.json'

const posts = [
  {
    title: "첫번째ㅔMaximizing the Benefits of BFF Pattern in API Design",
    slug: "api-design-in-bff",
    content: post1,
    date: "2023-10-22",
    description: "Exploring the shift from domain-centric to data-centric API endpoints after introducing BFF. This article introduces BFF and DDD concepts, then proposes API endpoint design strategies in the context of the BFF pattern.",
    image: undefined
  },
  {
    title: "테스트",
    slug: "first-post",
    content: post2,
    date: "2025-07-19",
    description: "asasdgawrbabbabab",
    image: undefined
  }
] as Post[];

export default posts;

export type Post = {
  title: string;
  slug: string;
  content: { blocks: any[] };
  date: string;
  description: string;
  image?: string;
};
