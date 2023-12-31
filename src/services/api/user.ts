import { useQuery } from "@apollo/client";
import { GET_USER_QUERY } from "@/services/graphql/queries.ts";
import { useBearStore } from "@/services/state/stores/user.ts";

export const useGetUser = (userId: string) => {
  const { loading, error, data } = useQuery<number>(GET_USER_QUERY, {
    variables: { userId },
  });

  const { increase } = useBearStore();

  if (data) {
    increase(data);
  }

  return { loading, error, user: data };
};
