import { Text } from 'tamagui';
import { useQuery } from '@apollo/client';

import { PostList } from '../components/PostList';
import { GET_POSTS } from '../graphql/GetPosts';
import { GetPosts } from '../graphql/__generated__/GetPosts';

export function HomeScreen() {
  const { data, error } = useQuery<GetPosts>(GET_POSTS);
  if (error) {
    return <Text>{String(error)}</Text>;
  }
  if (!data) {
    return <Text>Loading...</Text>;
  }
  return <PostList posts={data.posts} />;
}
