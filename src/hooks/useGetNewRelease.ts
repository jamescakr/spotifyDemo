import { useQuery } from "@tanstack/react-query";
import { getNewRelease } from "../apis/albumApi";
import useClientCredentialToken from "./useClientCredentialToken";

const useGetNewRelease = () => {
  const clientCredentialToken = useClientCredentialToken();
  return useQuery({
    queryKey: ["new-release"],
    queryFn: () => {
      if (!clientCredentialToken) {
        throw new Error("No Token Available");
      }
      return getNewRelease(clientCredentialToken);
    },
  });
};

export default useGetNewRelease;
