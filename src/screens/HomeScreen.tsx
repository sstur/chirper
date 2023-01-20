import { Spinner, Text, YStack } from 'tamagui';
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
    return (
      <YStack flex={1} justifyContent="center" alignItems="center">
        <Spinner />
      </YStack>
    );
  }
  return <PostList posts={data.posts} />;
}
