import ShortUniqueId from "short-unique-id";
import PocketBase from "pocketbase";

type CreateLinkBody = {
  url: string;
};

type CreateLinkResponse = {
  shortID: string;
};

export default defineEventHandler<
  { body: CreateLinkBody },
  Promise<CreateLinkResponse>
>(async (event) => {
  const uid = new ShortUniqueId({
    dictionary: "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789".split(""),
  });

  const runtimeConfig = useRuntimeConfig();

  if (!runtimeConfig.public.pbURL) {
    throw new Error("pbURL not found in runtime config");
  }

  const pb = new PocketBase(runtimeConfig.public.pbURL);

  const shortID = uid.fmt("$r3-$r3");
  const { url } = await readBody(event);

  try {
    await pb.collection("links").create({
      shortID,
      link: url,
    });
  } catch (e) {
    throw createError({
      statusCode: 500,
      message: "Failed to create link",
    });
  }

  return { shortID };
});
