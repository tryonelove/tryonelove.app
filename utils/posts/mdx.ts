import { readdirSync, readFileSync, stat, statSync } from 'fs';
import path from 'path';
import { read } from 'gray-matter';
import { PostData, PostDataDetailed } from './types';
import { MdxPostMeta } from '@/posts/PostMeta';
import { DateTime } from 'luxon';

const POSTS_PATH = path.join(process.cwd(), 'posts');
const MDX_EXTENSION = 'mdx';
const ROOT_POST = `index.${MDX_EXTENSION}`;

const getCreationDate = (postPath: string) =>
  DateTime.fromJSDate(statSync(postPath).birthtime);

const getFullPostPath = (parentDirName: string) =>
  path.join(POSTS_PATH, parentDirName, ROOT_POST);

const getPostsDirectories = () =>
  readdirSync(POSTS_PATH, { withFileTypes: true }).filter((d) =>
    d.isDirectory()
  );

const checkIfPostData = (data: Record<string, any>): data is MdxPostMeta =>
  'title' in data && 'author' in data;

export function getAllPostsData() {
  const postsDirectories = getPostsDirectories();

  const posts = postsDirectories.map<PostData>((d) => {
    const postPath = getFullPostPath(d.name);

    const { data } = read(postPath);
    const createdAt = getCreationDate(postPath);

    if (!checkIfPostData(data)) {
      throw new Error(`${postPath} is not MDX component`);
    }

    return { data, createdAt, slug: d.name };
  });

  return posts;
}

export function getPostData(slug: string): PostDataDetailed {
  const postPath = getFullPostPath(slug);
  const { data, content } = read(postPath);
  const createdAt = getCreationDate(postPath);

  if (!checkIfPostData(data)) {
    throw new Error(`${postPath} is not MDX component`);
  }

  return {
    data,
    createdAt,
    content,
    slug,
  };
}
