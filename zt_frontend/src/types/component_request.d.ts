/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Originid = string;
export type Userid = string;

export interface ComponentRequest {
  originId: Originid;
  components: Components;
  userId: Userid;
  [k: string]: unknown;
}
export interface Components {
  [k: string]: string | boolean | number | unknown[] | null;
}
