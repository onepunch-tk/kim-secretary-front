import { useQuery } from "@apollo/client";
import { GET_USER_QUERY } from "@graphql/queries.ts";
import { useBearStore } from "@/zustand/stores/user.ts";

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
