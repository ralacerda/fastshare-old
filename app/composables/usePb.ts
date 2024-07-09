import PocketBase from "pocketbase";

export function usePb() {
  const runtimeConfig = useRuntimeConfig();

  if (!runtimeConfig.public.pbURL) {
    throw new Error("pbURL not found in runtime config");
  }

  const pb = new PocketBase(runtimeConfig.public.pbURL);
  return pb;
}
