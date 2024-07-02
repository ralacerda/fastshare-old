import PocketBase, { type RecordModel, RecordService } from "pocketbase";
import type { InjectionKey, Plugin } from "vue";

export const pbKey = Symbol("pb") as InjectionKey<TypedPocketBase>;

export default defineNuxtPlugin((nuxtApp) => {
  const pb = new PocketBase("http://127.0.0.1:8090");
  nuxtApp.vueApp.provide(pbKey, pb);
});

export interface Post extends RecordModel {
  description: string;
  link: string;
  owner: string;
}

export interface Users extends RecordModel {
  description: string;
}

interface TypedPocketBase extends PocketBase {
  collection(idOrName: string): RecordService; // default fallback for any other collection
  collection(idOrName: "Posts"): RecordService<Post>;
  collection(idOrName: "Users"): RecordService<Users>;
}
