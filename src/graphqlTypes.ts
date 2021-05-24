export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars["Boolean"]>;
  ne?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars["Date"]>;
  ne?: Maybe<Scalars["Date"]>;
  gt?: Maybe<Scalars["Date"]>;
  gte?: Maybe<Scalars["Date"]>;
  lt?: Maybe<Scalars["Date"]>;
  lte?: Maybe<Scalars["Date"]>;
  in?: Maybe<Array<Maybe<Scalars["Date"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
  __typename?: "Directory";
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryConnection = {
  __typename?: "DirectoryConnection";
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: "DirectoryEdge";
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  sourceInstanceName = "sourceInstanceName",
  absolutePath = "absolutePath",
  relativePath = "relativePath",
  extension = "extension",
  size = "size",
  prettySize = "prettySize",
  modifiedTime = "modifiedTime",
  accessTime = "accessTime",
  changeTime = "changeTime",
  birthTime = "birthTime",
  root = "root",
  dir = "dir",
  base = "base",
  ext = "ext",
  name = "name",
  relativeDirectory = "relativeDirectory",
  dev = "dev",
  mode = "mode",
  nlink = "nlink",
  uid = "uid",
  gid = "gid",
  rdev = "rdev",
  ino = "ino",
  atimeMs = "atimeMs",
  mtimeMs = "mtimeMs",
  ctimeMs = "ctimeMs",
  atime = "atime",
  mtime = "mtime",
  ctime = "ctime",
  birthtime = "birthtime",
  birthtimeMs = "birthtimeMs",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: "DirectoryGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  __typename?: "File";
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileConnection = {
  __typename?: "FileConnection";
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: "FileEdge";
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  sourceInstanceName = "sourceInstanceName",
  absolutePath = "absolutePath",
  relativePath = "relativePath",
  extension = "extension",
  size = "size",
  prettySize = "prettySize",
  modifiedTime = "modifiedTime",
  accessTime = "accessTime",
  changeTime = "changeTime",
  birthTime = "birthTime",
  root = "root",
  dir = "dir",
  base = "base",
  ext = "ext",
  name = "name",
  relativeDirectory = "relativeDirectory",
  dev = "dev",
  mode = "mode",
  nlink = "nlink",
  uid = "uid",
  gid = "gid",
  rdev = "rdev",
  ino = "ino",
  atimeMs = "atimeMs",
  mtimeMs = "mtimeMs",
  ctimeMs = "ctimeMs",
  atime = "atime",
  mtime = "mtime",
  ctime = "ctime",
  birthtime = "birthtime",
  birthtimeMs = "birthtimeMs",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: "FileGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars["Float"]>;
  ne?: Maybe<Scalars["Float"]>;
  gt?: Maybe<Scalars["Float"]>;
  gte?: Maybe<Scalars["Float"]>;
  lt?: Maybe<Scalars["Float"]>;
  lte?: Maybe<Scalars["Float"]>;
  in?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export enum GatsbyImageFormat {
  NO_CHANGE = "NO_CHANGE",
  AUTO = "AUTO",
  JPG = "JPG",
  PNG = "PNG",
  WEBP = "WEBP",
  AVIF = "AVIF",
}

export enum GatsbyImageLayout {
  FIXED = "FIXED",
  FULL_WIDTH = "FULL_WIDTH",
  CONSTRAINED = "CONSTRAINED",
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars["Int"]>;
  ne?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type Internal = {
  __typename?: "Internal";
  content?: Maybe<Scalars["String"]>;
  contentDigest: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ignoreType?: Maybe<Scalars["Boolean"]>;
  mediaType?: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  type: Scalars["String"];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars["JSON"]>;
  ne?: Maybe<Scalars["JSON"]>;
  in?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  regex?: Maybe<Scalars["JSON"]>;
  glob?: Maybe<Scalars["JSON"]>;
};

/** Node Interface */
export type Node = {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  currentPage: Scalars["Int"];
  hasPreviousPage: Scalars["Boolean"];
  hasNextPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage?: Maybe<Scalars["Int"]>;
  totalCount: Scalars["Int"];
};

export type Query = {
  __typename?: "Query";
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sanityDefinitions?: Maybe<SanityDefinitions>;
  allSanityDefinitions: SanityDefinitionsConnection;
  sanityLanguages?: Maybe<SanityLanguages>;
  allSanityLanguages: SanityLanguagesConnection;
  sanityPages?: Maybe<SanityPages>;
  allSanityPages: SanityPagesConnection;
  sanityFileAsset?: Maybe<SanityFileAsset>;
  allSanityFileAsset: SanityFileAssetConnection;
  sanityImageAsset?: Maybe<SanityImageAsset>;
  allSanityImageAsset: SanityImageAssetConnection;
  sanityTechnologies?: Maybe<SanityTechnologies>;
  allSanityTechnologies: SanityTechnologiesConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySiteFunctionArgs = {
  apiRoute?: Maybe<StringQueryOperatorInput>;
  originalFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySanityDefinitionsArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  technology?: Maybe<SanityTechnologiesFilterListInput>;
  content?: Maybe<SanityContentTranslationsFilterInput>;
  code?: Maybe<SanityCodeFilterListInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawTechnology?: Maybe<JsonQueryOperatorInput>;
  _rawContent?: Maybe<JsonQueryOperatorInput>;
  _rawCode?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSanityDefinitionsArgs = {
  filter?: Maybe<SanityDefinitionsFilterInput>;
  sort?: Maybe<SanityDefinitionsSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySanityLanguagesArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSanityLanguagesArgs = {
  filter?: Maybe<SanityLanguagesFilterInput>;
  sort?: Maybe<SanityLanguagesSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySanityPagesArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  content?: Maybe<SanityContentTranslationsFilterInput>;
  code?: Maybe<SanityCodeFilterListInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawContent?: Maybe<JsonQueryOperatorInput>;
  _rawCode?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSanityPagesArgs = {
  filter?: Maybe<SanityPagesFilterInput>;
  sort?: Maybe<SanityPagesSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySanityFileAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  altText?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSanityFileAssetArgs = {
  filter?: Maybe<SanityFileAssetFilterInput>;
  sort?: Maybe<SanityFileAssetSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySanityImageAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  altText?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  metadata?: Maybe<SanityImageMetadataFilterInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata?: Maybe<JsonQueryOperatorInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSanityImageAssetArgs = {
  filter?: Maybe<SanityImageAssetFilterInput>;
  sort?: Maybe<SanityImageAssetSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySanityTechnologiesArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  technologie?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSanityTechnologiesArgs = {
  filter?: Maybe<SanityTechnologiesFilterInput>;
  sort?: Maybe<SanityTechnologiesSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type SanityAssetSourceData = {
  __typename?: "SanityAssetSourceData";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type SanityAssetSourceDataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type SanityBlock = {
  __typename?: "SanityBlock";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  children?: Maybe<Array<Maybe<SanitySpan>>>;
  style?: Maybe<Scalars["String"]>;
  list?: Maybe<Scalars["String"]>;
  _rawChildren?: Maybe<Scalars["JSON"]>;
};

export type SanityBlock_RawChildrenArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlockFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<SanitySpanFilterListInput>;
  style?: Maybe<StringQueryOperatorInput>;
  list?: Maybe<StringQueryOperatorInput>;
  _rawChildren?: Maybe<JsonQueryOperatorInput>;
};

export type SanityBlockFilterListInput = {
  elemMatch?: Maybe<SanityBlockFilterInput>;
};

export type SanityCode = {
  __typename?: "SanityCode";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["String"]>;
  language?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  highlightedLines?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export type SanityCodeFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  code?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  highlightedLines?: Maybe<FloatQueryOperatorInput>;
};

export type SanityCodeFilterListInput = {
  elemMatch?: Maybe<SanityCodeFilterInput>;
};

export type SanityContentTranslations = {
  __typename?: "SanityContentTranslations";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  es?: Maybe<Array<Maybe<SanityBlock>>>;
  en?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawEs?: Maybe<Scalars["JSON"]>;
  _rawEn?: Maybe<Scalars["JSON"]>;
};

export type SanityContentTranslations_RawEsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityContentTranslations_RawEnArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityContentTranslationsFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  es?: Maybe<SanityBlockFilterListInput>;
  en?: Maybe<SanityBlockFilterListInput>;
  _rawEs?: Maybe<JsonQueryOperatorInput>;
  _rawEn?: Maybe<JsonQueryOperatorInput>;
};

export type SanityDefinitions = SanityDocument &
  Node & {
    __typename?: "SanityDefinitions";
    _id?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    _createdAt?: Maybe<Scalars["Date"]>;
    _updatedAt?: Maybe<Scalars["Date"]>;
    _rev?: Maybe<Scalars["String"]>;
    _key?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    slug?: Maybe<SanitySlug>;
    technology?: Maybe<Array<Maybe<SanityTechnologies>>>;
    content?: Maybe<SanityContentTranslations>;
    code?: Maybe<Array<Maybe<SanityCode>>>;
    _rawSlug?: Maybe<Scalars["JSON"]>;
    _rawTechnology?: Maybe<Scalars["JSON"]>;
    _rawContent?: Maybe<Scalars["JSON"]>;
    _rawCode?: Maybe<Scalars["JSON"]>;
    id: Scalars["ID"];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type SanityDefinitions_CreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SanityDefinitions_UpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SanityDefinitions_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityDefinitions_RawTechnologyArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityDefinitions_RawContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityDefinitions_RawCodeArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityDefinitionsConnection = {
  __typename?: "SanityDefinitionsConnection";
  totalCount: Scalars["Int"];
  edges: Array<SanityDefinitionsEdge>;
  nodes: Array<SanityDefinitions>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SanityDefinitionsGroupConnection>;
};

export type SanityDefinitionsConnectionDistinctArgs = {
  field: SanityDefinitionsFieldsEnum;
};

export type SanityDefinitionsConnectionMaxArgs = {
  field: SanityDefinitionsFieldsEnum;
};

export type SanityDefinitionsConnectionMinArgs = {
  field: SanityDefinitionsFieldsEnum;
};

export type SanityDefinitionsConnectionSumArgs = {
  field: SanityDefinitionsFieldsEnum;
};

export type SanityDefinitionsConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SanityDefinitionsFieldsEnum;
};

export type SanityDefinitionsEdge = {
  __typename?: "SanityDefinitionsEdge";
  next?: Maybe<SanityDefinitions>;
  node: SanityDefinitions;
  previous?: Maybe<SanityDefinitions>;
};

export enum SanityDefinitionsFieldsEnum {
  _id = "_id",
  _type = "_type",
  _createdAt = "_createdAt",
  _updatedAt = "_updatedAt",
  _rev = "_rev",
  _key = "_key",
  title = "title",
  slug____key = "slug____key",
  slug____type = "slug____type",
  slug___current = "slug___current",
  technology = "technology",
  technology____id = "technology____id",
  technology____type = "technology____type",
  technology____createdAt = "technology____createdAt",
  technology____updatedAt = "technology____updatedAt",
  technology____rev = "technology____rev",
  technology____key = "technology____key",
  technology___technologie = "technology___technologie",
  technology___id = "technology___id",
  technology___parent___id = "technology___parent___id",
  technology___parent___parent___id = "technology___parent___parent___id",
  technology___parent___parent___children = "technology___parent___parent___children",
  technology___parent___children = "technology___parent___children",
  technology___parent___children___id = "technology___parent___children___id",
  technology___parent___children___children = "technology___parent___children___children",
  technology___parent___internal___content = "technology___parent___internal___content",
  technology___parent___internal___contentDigest = "technology___parent___internal___contentDigest",
  technology___parent___internal___description = "technology___parent___internal___description",
  technology___parent___internal___fieldOwners = "technology___parent___internal___fieldOwners",
  technology___parent___internal___ignoreType = "technology___parent___internal___ignoreType",
  technology___parent___internal___mediaType = "technology___parent___internal___mediaType",
  technology___parent___internal___owner = "technology___parent___internal___owner",
  technology___parent___internal___type = "technology___parent___internal___type",
  technology___children = "technology___children",
  technology___children___id = "technology___children___id",
  technology___children___parent___id = "technology___children___parent___id",
  technology___children___parent___children = "technology___children___parent___children",
  technology___children___children = "technology___children___children",
  technology___children___children___id = "technology___children___children___id",
  technology___children___children___children = "technology___children___children___children",
  technology___children___internal___content = "technology___children___internal___content",
  technology___children___internal___contentDigest = "technology___children___internal___contentDigest",
  technology___children___internal___description = "technology___children___internal___description",
  technology___children___internal___fieldOwners = "technology___children___internal___fieldOwners",
  technology___children___internal___ignoreType = "technology___children___internal___ignoreType",
  technology___children___internal___mediaType = "technology___children___internal___mediaType",
  technology___children___internal___owner = "technology___children___internal___owner",
  technology___children___internal___type = "technology___children___internal___type",
  technology___internal___content = "technology___internal___content",
  technology___internal___contentDigest = "technology___internal___contentDigest",
  technology___internal___description = "technology___internal___description",
  technology___internal___fieldOwners = "technology___internal___fieldOwners",
  technology___internal___ignoreType = "technology___internal___ignoreType",
  technology___internal___mediaType = "technology___internal___mediaType",
  technology___internal___owner = "technology___internal___owner",
  technology___internal___type = "technology___internal___type",
  content____key = "content____key",
  content____type = "content____type",
  content___es = "content___es",
  content___es____key = "content___es____key",
  content___es____type = "content___es____type",
  content___es___children = "content___es___children",
  content___es___children____key = "content___es___children____key",
  content___es___children____type = "content___es___children____type",
  content___es___children___marks = "content___es___children___marks",
  content___es___children___text = "content___es___children___text",
  content___es___style = "content___es___style",
  content___es___list = "content___es___list",
  content___es____rawChildren = "content___es____rawChildren",
  content___en = "content___en",
  content___en____key = "content___en____key",
  content___en____type = "content___en____type",
  content___en___children = "content___en___children",
  content___en___children____key = "content___en___children____key",
  content___en___children____type = "content___en___children____type",
  content___en___children___marks = "content___en___children___marks",
  content___en___children___text = "content___en___children___text",
  content___en___style = "content___en___style",
  content___en___list = "content___en___list",
  content___en____rawChildren = "content___en____rawChildren",
  content____rawEs = "content____rawEs",
  content____rawEn = "content____rawEn",
  code = "code",
  code____key = "code____key",
  code____type = "code____type",
  code___code = "code___code",
  code___language = "code___language",
  code___filename = "code___filename",
  code___highlightedLines = "code___highlightedLines",
  _rawSlug = "_rawSlug",
  _rawTechnology = "_rawTechnology",
  _rawContent = "_rawContent",
  _rawCode = "_rawCode",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type SanityDefinitionsFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  technology?: Maybe<SanityTechnologiesFilterListInput>;
  content?: Maybe<SanityContentTranslationsFilterInput>;
  code?: Maybe<SanityCodeFilterListInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawTechnology?: Maybe<JsonQueryOperatorInput>;
  _rawContent?: Maybe<JsonQueryOperatorInput>;
  _rawCode?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityDefinitionsGroupConnection = {
  __typename?: "SanityDefinitionsGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SanityDefinitionsEdge>;
  nodes: Array<SanityDefinitions>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SanityDefinitionsSortInput = {
  fields?: Maybe<Array<Maybe<SanityDefinitionsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** A Sanity document */
export type SanityDocument = {
  _id?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  _createdAt?: Maybe<Scalars["Date"]>;
  _updatedAt?: Maybe<Scalars["Date"]>;
  _rev?: Maybe<Scalars["String"]>;
};

export type SanityFile = {
  __typename?: "SanityFile";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  asset?: Maybe<SanityFileAsset>;
  _rawAsset?: Maybe<Scalars["JSON"]>;
};

export type SanityFile_RawAssetArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFileAsset = SanityDocument &
  Node & {
    __typename?: "SanityFileAsset";
    _id?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    _createdAt?: Maybe<Scalars["Date"]>;
    _updatedAt?: Maybe<Scalars["Date"]>;
    _rev?: Maybe<Scalars["String"]>;
    _key?: Maybe<Scalars["String"]>;
    originalFilename?: Maybe<Scalars["String"]>;
    label?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    altText?: Maybe<Scalars["String"]>;
    sha1hash?: Maybe<Scalars["String"]>;
    extension?: Maybe<Scalars["String"]>;
    mimeType?: Maybe<Scalars["String"]>;
    size?: Maybe<Scalars["Float"]>;
    assetId?: Maybe<Scalars["String"]>;
    path?: Maybe<Scalars["String"]>;
    url?: Maybe<Scalars["String"]>;
    source?: Maybe<SanityAssetSourceData>;
    _rawSource?: Maybe<Scalars["JSON"]>;
    id: Scalars["ID"];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type SanityFileAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SanityFileAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SanityFileAsset_RawSourceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFileAssetConnection = {
  __typename?: "SanityFileAssetConnection";
  totalCount: Scalars["Int"];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SanityFileAssetGroupConnection>;
};

export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetEdge = {
  __typename?: "SanityFileAssetEdge";
  next?: Maybe<SanityFileAsset>;
  node: SanityFileAsset;
  previous?: Maybe<SanityFileAsset>;
};

export enum SanityFileAssetFieldsEnum {
  _id = "_id",
  _type = "_type",
  _createdAt = "_createdAt",
  _updatedAt = "_updatedAt",
  _rev = "_rev",
  _key = "_key",
  originalFilename = "originalFilename",
  label = "label",
  title = "title",
  description = "description",
  altText = "altText",
  sha1hash = "sha1hash",
  extension = "extension",
  mimeType = "mimeType",
  size = "size",
  assetId = "assetId",
  path = "path",
  url = "url",
  source____key = "source____key",
  source____type = "source____type",
  source___name = "source___name",
  source___id = "source___id",
  source___url = "source___url",
  _rawSource = "_rawSource",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type SanityFileAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  altText?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityFileAssetGroupConnection = {
  __typename?: "SanityFileAssetGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SanityFileAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityFileAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SanityGatsbyImagePlaceholder {
  DOMINANT_COLOR = "DOMINANT_COLOR",
  BLURRED = "BLURRED",
  NONE = "NONE",
}

export type SanityGeopoint = {
  __typename?: "SanityGeopoint";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
  alt?: Maybe<Scalars["Float"]>;
};

export type SanityGeopointFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  lat?: Maybe<FloatQueryOperatorInput>;
  lng?: Maybe<FloatQueryOperatorInput>;
  alt?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImage = {
  __typename?: "SanityImage";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
  _rawAsset?: Maybe<Scalars["JSON"]>;
  _rawHotspot?: Maybe<Scalars["JSON"]>;
  _rawCrop?: Maybe<Scalars["JSON"]>;
};

export type SanityImage_RawAssetArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImage_RawHotspotArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImage_RawCropArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset = SanityDocument &
  Node & {
    __typename?: "SanityImageAsset";
    _id?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    _createdAt?: Maybe<Scalars["Date"]>;
    _updatedAt?: Maybe<Scalars["Date"]>;
    _rev?: Maybe<Scalars["String"]>;
    _key?: Maybe<Scalars["String"]>;
    originalFilename?: Maybe<Scalars["String"]>;
    label?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    altText?: Maybe<Scalars["String"]>;
    sha1hash?: Maybe<Scalars["String"]>;
    extension?: Maybe<Scalars["String"]>;
    mimeType?: Maybe<Scalars["String"]>;
    size?: Maybe<Scalars["Float"]>;
    assetId?: Maybe<Scalars["String"]>;
    path?: Maybe<Scalars["String"]>;
    url?: Maybe<Scalars["String"]>;
    metadata?: Maybe<SanityImageMetadata>;
    source?: Maybe<SanityAssetSourceData>;
    _rawMetadata?: Maybe<Scalars["JSON"]>;
    _rawSource?: Maybe<Scalars["JSON"]>;
    gatsbyImageData: Scalars["JSON"];
    id: Scalars["ID"];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type SanityImageAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SanityImageAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset_RawSourceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAssetGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  placeholder?: Maybe<SanityGatsbyImagePlaceholder>;
  formats?: Maybe<Array<Maybe<GatsbyImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  sizes?: Maybe<Scalars["String"]>;
  backgroundColor?: Maybe<Scalars["String"]>;
  fit?: Maybe<SanityImageFit>;
};

export type SanityImageAssetConnection = {
  __typename?: "SanityImageAssetConnection";
  totalCount: Scalars["Int"];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SanityImageAssetGroupConnection>;
};

export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetEdge = {
  __typename?: "SanityImageAssetEdge";
  next?: Maybe<SanityImageAsset>;
  node: SanityImageAsset;
  previous?: Maybe<SanityImageAsset>;
};

export enum SanityImageAssetFieldsEnum {
  _id = "_id",
  _type = "_type",
  _createdAt = "_createdAt",
  _updatedAt = "_updatedAt",
  _rev = "_rev",
  _key = "_key",
  originalFilename = "originalFilename",
  label = "label",
  title = "title",
  description = "description",
  altText = "altText",
  sha1hash = "sha1hash",
  extension = "extension",
  mimeType = "mimeType",
  size = "size",
  assetId = "assetId",
  path = "path",
  url = "url",
  metadata____key = "metadata____key",
  metadata____type = "metadata____type",
  metadata___location____key = "metadata___location____key",
  metadata___location____type = "metadata___location____type",
  metadata___location___lat = "metadata___location___lat",
  metadata___location___lng = "metadata___location___lng",
  metadata___location___alt = "metadata___location___alt",
  metadata___dimensions____key = "metadata___dimensions____key",
  metadata___dimensions____type = "metadata___dimensions____type",
  metadata___dimensions___height = "metadata___dimensions___height",
  metadata___dimensions___width = "metadata___dimensions___width",
  metadata___dimensions___aspectRatio = "metadata___dimensions___aspectRatio",
  metadata___palette____key = "metadata___palette____key",
  metadata___palette____type = "metadata___palette____type",
  metadata___palette___darkMuted____key = "metadata___palette___darkMuted____key",
  metadata___palette___darkMuted____type = "metadata___palette___darkMuted____type",
  metadata___palette___darkMuted___background = "metadata___palette___darkMuted___background",
  metadata___palette___darkMuted___foreground = "metadata___palette___darkMuted___foreground",
  metadata___palette___darkMuted___population = "metadata___palette___darkMuted___population",
  metadata___palette___darkMuted___title = "metadata___palette___darkMuted___title",
  metadata___palette___lightVibrant____key = "metadata___palette___lightVibrant____key",
  metadata___palette___lightVibrant____type = "metadata___palette___lightVibrant____type",
  metadata___palette___lightVibrant___background = "metadata___palette___lightVibrant___background",
  metadata___palette___lightVibrant___foreground = "metadata___palette___lightVibrant___foreground",
  metadata___palette___lightVibrant___population = "metadata___palette___lightVibrant___population",
  metadata___palette___lightVibrant___title = "metadata___palette___lightVibrant___title",
  metadata___palette___darkVibrant____key = "metadata___palette___darkVibrant____key",
  metadata___palette___darkVibrant____type = "metadata___palette___darkVibrant____type",
  metadata___palette___darkVibrant___background = "metadata___palette___darkVibrant___background",
  metadata___palette___darkVibrant___foreground = "metadata___palette___darkVibrant___foreground",
  metadata___palette___darkVibrant___population = "metadata___palette___darkVibrant___population",
  metadata___palette___darkVibrant___title = "metadata___palette___darkVibrant___title",
  metadata___palette___vibrant____key = "metadata___palette___vibrant____key",
  metadata___palette___vibrant____type = "metadata___palette___vibrant____type",
  metadata___palette___vibrant___background = "metadata___palette___vibrant___background",
  metadata___palette___vibrant___foreground = "metadata___palette___vibrant___foreground",
  metadata___palette___vibrant___population = "metadata___palette___vibrant___population",
  metadata___palette___vibrant___title = "metadata___palette___vibrant___title",
  metadata___palette___dominant____key = "metadata___palette___dominant____key",
  metadata___palette___dominant____type = "metadata___palette___dominant____type",
  metadata___palette___dominant___background = "metadata___palette___dominant___background",
  metadata___palette___dominant___foreground = "metadata___palette___dominant___foreground",
  metadata___palette___dominant___population = "metadata___palette___dominant___population",
  metadata___palette___dominant___title = "metadata___palette___dominant___title",
  metadata___palette___lightMuted____key = "metadata___palette___lightMuted____key",
  metadata___palette___lightMuted____type = "metadata___palette___lightMuted____type",
  metadata___palette___lightMuted___background = "metadata___palette___lightMuted___background",
  metadata___palette___lightMuted___foreground = "metadata___palette___lightMuted___foreground",
  metadata___palette___lightMuted___population = "metadata___palette___lightMuted___population",
  metadata___palette___lightMuted___title = "metadata___palette___lightMuted___title",
  metadata___palette___muted____key = "metadata___palette___muted____key",
  metadata___palette___muted____type = "metadata___palette___muted____type",
  metadata___palette___muted___background = "metadata___palette___muted___background",
  metadata___palette___muted___foreground = "metadata___palette___muted___foreground",
  metadata___palette___muted___population = "metadata___palette___muted___population",
  metadata___palette___muted___title = "metadata___palette___muted___title",
  metadata___palette____rawDarkMuted = "metadata___palette____rawDarkMuted",
  metadata___palette____rawLightVibrant = "metadata___palette____rawLightVibrant",
  metadata___palette____rawDarkVibrant = "metadata___palette____rawDarkVibrant",
  metadata___palette____rawVibrant = "metadata___palette____rawVibrant",
  metadata___palette____rawDominant = "metadata___palette____rawDominant",
  metadata___palette____rawLightMuted = "metadata___palette____rawLightMuted",
  metadata___palette____rawMuted = "metadata___palette____rawMuted",
  metadata___lqip = "metadata___lqip",
  metadata___hasAlpha = "metadata___hasAlpha",
  metadata___isOpaque = "metadata___isOpaque",
  metadata____rawLocation = "metadata____rawLocation",
  metadata____rawDimensions = "metadata____rawDimensions",
  metadata____rawPalette = "metadata____rawPalette",
  source____key = "source____key",
  source____type = "source____type",
  source___name = "source___name",
  source___id = "source___id",
  source___url = "source___url",
  _rawMetadata = "_rawMetadata",
  _rawSource = "_rawSource",
  gatsbyImageData = "gatsbyImageData",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type SanityImageAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  altText?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  metadata?: Maybe<SanityImageMetadataFilterInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata?: Maybe<JsonQueryOperatorInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityImageAssetGroupConnection = {
  __typename?: "SanityImageAssetGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SanityImageAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityImageAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityImageCrop = {
  __typename?: "SanityImageCrop";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  top?: Maybe<Scalars["Float"]>;
  bottom?: Maybe<Scalars["Float"]>;
  left?: Maybe<Scalars["Float"]>;
  right?: Maybe<Scalars["Float"]>;
};

export type SanityImageDimensions = {
  __typename?: "SanityImageDimensions";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
};

export type SanityImageDimensionsFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export enum SanityImageFit {
  CLIP = "CLIP",
  CROP = "CROP",
  FILL = "FILL",
  FILLMAX = "FILLMAX",
  MAX = "MAX",
  SCALE = "SCALE",
  MIN = "MIN",
}

export type SanityImageHotspot = {
  __typename?: "SanityImageHotspot";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type SanityImageMetadata = {
  __typename?: "SanityImageMetadata";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  location?: Maybe<SanityGeopoint>;
  dimensions?: Maybe<SanityImageDimensions>;
  palette?: Maybe<SanityImagePalette>;
  lqip?: Maybe<Scalars["String"]>;
  hasAlpha?: Maybe<Scalars["Boolean"]>;
  isOpaque?: Maybe<Scalars["Boolean"]>;
  _rawLocation?: Maybe<Scalars["JSON"]>;
  _rawDimensions?: Maybe<Scalars["JSON"]>;
  _rawPalette?: Maybe<Scalars["JSON"]>;
};

export type SanityImageMetadata_RawLocationArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageMetadata_RawDimensionsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageMetadata_RawPaletteArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageMetadataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<SanityGeopointFilterInput>;
  dimensions?: Maybe<SanityImageDimensionsFilterInput>;
  palette?: Maybe<SanityImagePaletteFilterInput>;
  lqip?: Maybe<StringQueryOperatorInput>;
  hasAlpha?: Maybe<BooleanQueryOperatorInput>;
  isOpaque?: Maybe<BooleanQueryOperatorInput>;
  _rawLocation?: Maybe<JsonQueryOperatorInput>;
  _rawDimensions?: Maybe<JsonQueryOperatorInput>;
  _rawPalette?: Maybe<JsonQueryOperatorInput>;
};

export type SanityImagePalette = {
  __typename?: "SanityImagePalette";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  _rawDarkMuted?: Maybe<Scalars["JSON"]>;
  _rawLightVibrant?: Maybe<Scalars["JSON"]>;
  _rawDarkVibrant?: Maybe<Scalars["JSON"]>;
  _rawVibrant?: Maybe<Scalars["JSON"]>;
  _rawDominant?: Maybe<Scalars["JSON"]>;
  _rawLightMuted?: Maybe<Scalars["JSON"]>;
  _rawMuted?: Maybe<Scalars["JSON"]>;
};

export type SanityImagePalette_RawDarkMutedArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette_RawLightVibrantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette_RawDarkVibrantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette_RawVibrantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette_RawDominantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette_RawLightMutedArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette_RawMutedArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePaletteFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  darkMuted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  vibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  dominant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  lightMuted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  muted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  _rawDarkMuted?: Maybe<JsonQueryOperatorInput>;
  _rawLightVibrant?: Maybe<JsonQueryOperatorInput>;
  _rawDarkVibrant?: Maybe<JsonQueryOperatorInput>;
  _rawVibrant?: Maybe<JsonQueryOperatorInput>;
  _rawDominant?: Maybe<JsonQueryOperatorInput>;
  _rawLightMuted?: Maybe<JsonQueryOperatorInput>;
  _rawMuted?: Maybe<JsonQueryOperatorInput>;
};

export type SanityImagePaletteSwatch = {
  __typename?: "SanityImagePaletteSwatch";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  background?: Maybe<Scalars["String"]>;
  foreground?: Maybe<Scalars["String"]>;
  population?: Maybe<Scalars["Float"]>;
  title?: Maybe<Scalars["String"]>;
};

export type SanityImagePaletteSwatchFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  background?: Maybe<StringQueryOperatorInput>;
  foreground?: Maybe<StringQueryOperatorInput>;
  population?: Maybe<FloatQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SanityLanguages = SanityDocument &
  Node & {
    __typename?: "SanityLanguages";
    _id?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    _createdAt?: Maybe<Scalars["Date"]>;
    _updatedAt?: Maybe<Scalars["Date"]>;
    _rev?: Maybe<Scalars["String"]>;
    _key?: Maybe<Scalars["String"]>;
    language?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type SanityLanguages_CreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SanityLanguages_UpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SanityLanguagesConnection = {
  __typename?: "SanityLanguagesConnection";
  totalCount: Scalars["Int"];
  edges: Array<SanityLanguagesEdge>;
  nodes: Array<SanityLanguages>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SanityLanguagesGroupConnection>;
};

export type SanityLanguagesConnectionDistinctArgs = {
  field: SanityLanguagesFieldsEnum;
};

export type SanityLanguagesConnectionMaxArgs = {
  field: SanityLanguagesFieldsEnum;
};

export type SanityLanguagesConnectionMinArgs = {
  field: SanityLanguagesFieldsEnum;
};

export type SanityLanguagesConnectionSumArgs = {
  field: SanityLanguagesFieldsEnum;
};

export type SanityLanguagesConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SanityLanguagesFieldsEnum;
};

export type SanityLanguagesEdge = {
  __typename?: "SanityLanguagesEdge";
  next?: Maybe<SanityLanguages>;
  node: SanityLanguages;
  previous?: Maybe<SanityLanguages>;
};

export enum SanityLanguagesFieldsEnum {
  _id = "_id",
  _type = "_type",
  _createdAt = "_createdAt",
  _updatedAt = "_updatedAt",
  _rev = "_rev",
  _key = "_key",
  language = "language",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type SanityLanguagesFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityLanguagesGroupConnection = {
  __typename?: "SanityLanguagesGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SanityLanguagesEdge>;
  nodes: Array<SanityLanguages>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SanityLanguagesSortInput = {
  fields?: Maybe<Array<Maybe<SanityLanguagesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityPages = SanityDocument &
  Node & {
    __typename?: "SanityPages";
    _id?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    _createdAt?: Maybe<Scalars["Date"]>;
    _updatedAt?: Maybe<Scalars["Date"]>;
    _rev?: Maybe<Scalars["String"]>;
    _key?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    slug?: Maybe<SanitySlug>;
    content?: Maybe<SanityContentTranslations>;
    code?: Maybe<Array<Maybe<SanityCode>>>;
    _rawSlug?: Maybe<Scalars["JSON"]>;
    _rawContent?: Maybe<Scalars["JSON"]>;
    _rawCode?: Maybe<Scalars["JSON"]>;
    id: Scalars["ID"];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type SanityPages_CreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SanityPages_UpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SanityPages_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPages_RawContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPages_RawCodeArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPagesConnection = {
  __typename?: "SanityPagesConnection";
  totalCount: Scalars["Int"];
  edges: Array<SanityPagesEdge>;
  nodes: Array<SanityPages>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SanityPagesGroupConnection>;
};

export type SanityPagesConnectionDistinctArgs = {
  field: SanityPagesFieldsEnum;
};

export type SanityPagesConnectionMaxArgs = {
  field: SanityPagesFieldsEnum;
};

export type SanityPagesConnectionMinArgs = {
  field: SanityPagesFieldsEnum;
};

export type SanityPagesConnectionSumArgs = {
  field: SanityPagesFieldsEnum;
};

export type SanityPagesConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SanityPagesFieldsEnum;
};

export type SanityPagesEdge = {
  __typename?: "SanityPagesEdge";
  next?: Maybe<SanityPages>;
  node: SanityPages;
  previous?: Maybe<SanityPages>;
};

export enum SanityPagesFieldsEnum {
  _id = "_id",
  _type = "_type",
  _createdAt = "_createdAt",
  _updatedAt = "_updatedAt",
  _rev = "_rev",
  _key = "_key",
  title = "title",
  slug____key = "slug____key",
  slug____type = "slug____type",
  slug___current = "slug___current",
  content____key = "content____key",
  content____type = "content____type",
  content___es = "content___es",
  content___es____key = "content___es____key",
  content___es____type = "content___es____type",
  content___es___children = "content___es___children",
  content___es___children____key = "content___es___children____key",
  content___es___children____type = "content___es___children____type",
  content___es___children___marks = "content___es___children___marks",
  content___es___children___text = "content___es___children___text",
  content___es___style = "content___es___style",
  content___es___list = "content___es___list",
  content___es____rawChildren = "content___es____rawChildren",
  content___en = "content___en",
  content___en____key = "content___en____key",
  content___en____type = "content___en____type",
  content___en___children = "content___en___children",
  content___en___children____key = "content___en___children____key",
  content___en___children____type = "content___en___children____type",
  content___en___children___marks = "content___en___children___marks",
  content___en___children___text = "content___en___children___text",
  content___en___style = "content___en___style",
  content___en___list = "content___en___list",
  content___en____rawChildren = "content___en____rawChildren",
  content____rawEs = "content____rawEs",
  content____rawEn = "content____rawEn",
  code = "code",
  code____key = "code____key",
  code____type = "code____type",
  code___code = "code___code",
  code___language = "code___language",
  code___filename = "code___filename",
  code___highlightedLines = "code___highlightedLines",
  _rawSlug = "_rawSlug",
  _rawContent = "_rawContent",
  _rawCode = "_rawCode",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type SanityPagesFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  content?: Maybe<SanityContentTranslationsFilterInput>;
  code?: Maybe<SanityCodeFilterListInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawContent?: Maybe<JsonQueryOperatorInput>;
  _rawCode?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityPagesGroupConnection = {
  __typename?: "SanityPagesGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SanityPagesEdge>;
  nodes: Array<SanityPages>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SanityPagesSortInput = {
  fields?: Maybe<Array<Maybe<SanityPagesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars["Int"];
};

export type SanitySlug = {
  __typename?: "SanitySlug";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  current?: Maybe<Scalars["String"]>;
};

export type SanitySlugFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  current?: Maybe<StringQueryOperatorInput>;
};

export type SanitySpan = {
  __typename?: "SanitySpan";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  marks?: Maybe<Array<Maybe<Scalars["String"]>>>;
  text?: Maybe<Scalars["String"]>;
};

export type SanitySpanFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  marks?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type SanitySpanFilterListInput = {
  elemMatch?: Maybe<SanitySpanFilterInput>;
};

export type SanityTechnologies = SanityDocument &
  Node & {
    __typename?: "SanityTechnologies";
    _id?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    _createdAt?: Maybe<Scalars["Date"]>;
    _updatedAt?: Maybe<Scalars["Date"]>;
    _rev?: Maybe<Scalars["String"]>;
    _key?: Maybe<Scalars["String"]>;
    technologie?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type SanityTechnologies_CreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SanityTechnologies_UpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SanityTechnologiesConnection = {
  __typename?: "SanityTechnologiesConnection";
  totalCount: Scalars["Int"];
  edges: Array<SanityTechnologiesEdge>;
  nodes: Array<SanityTechnologies>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SanityTechnologiesGroupConnection>;
};

export type SanityTechnologiesConnectionDistinctArgs = {
  field: SanityTechnologiesFieldsEnum;
};

export type SanityTechnologiesConnectionMaxArgs = {
  field: SanityTechnologiesFieldsEnum;
};

export type SanityTechnologiesConnectionMinArgs = {
  field: SanityTechnologiesFieldsEnum;
};

export type SanityTechnologiesConnectionSumArgs = {
  field: SanityTechnologiesFieldsEnum;
};

export type SanityTechnologiesConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SanityTechnologiesFieldsEnum;
};

export type SanityTechnologiesEdge = {
  __typename?: "SanityTechnologiesEdge";
  next?: Maybe<SanityTechnologies>;
  node: SanityTechnologies;
  previous?: Maybe<SanityTechnologies>;
};

export enum SanityTechnologiesFieldsEnum {
  _id = "_id",
  _type = "_type",
  _createdAt = "_createdAt",
  _updatedAt = "_updatedAt",
  _rev = "_rev",
  _key = "_key",
  technologie = "technologie",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type SanityTechnologiesFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  technologie?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityTechnologiesFilterListInput = {
  elemMatch?: Maybe<SanityTechnologiesFilterInput>;
};

export type SanityTechnologiesGroupConnection = {
  __typename?: "SanityTechnologiesGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SanityTechnologiesEdge>;
  nodes: Array<SanityTechnologies>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SanityTechnologiesSortInput = {
  fields?: Maybe<Array<Maybe<SanityTechnologiesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Site = Node & {
  __typename?: "Site";
  buildTime?: Maybe<Scalars["Date"]>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars["Int"]>;
  host?: Maybe<Scalars["String"]>;
  polyfill?: Maybe<Scalars["Boolean"]>;
  pathPrefix?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
  __typename?: "SiteBuildMetadata";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars["Date"]>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataConnection = {
  __typename?: "SiteBuildMetadataConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: "SiteBuildMetadataEdge";
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  buildTime = "buildTime",
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: "SiteBuildMetadataGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: "SiteConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: "SiteEdge";
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = "buildTime",
  siteMetadata___title = "siteMetadata___title",
  siteMetadata___description = "siteMetadata___description",
  siteMetadata___siteUrl = "siteMetadata___siteUrl",
  siteMetadata___enlgishDescription = "siteMetadata___enlgishDescription",
  siteMetadata___spanishDescription = "siteMetadata___spanishDescription",
  siteMetadata___twitter = "siteMetadata___twitter",
  siteMetadata___image = "siteMetadata___image",
  port = "port",
  host = "host",
  polyfill = "polyfill",
  pathPrefix = "pathPrefix",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunction = Node & {
  __typename?: "SiteFunction";
  apiRoute: Scalars["String"];
  originalFilePath: Scalars["String"];
  relativeCompiledFilePath: Scalars["String"];
  absoluteCompiledFilePath: Scalars["String"];
  matchPath?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteFunctionConnection = {
  __typename?: "SiteFunctionConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SiteFunctionGroupConnection>;
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: "SiteFunctionEdge";
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  apiRoute = "apiRoute",
  originalFilePath = "originalFilePath",
  relativeCompiledFilePath = "relativeCompiledFilePath",
  absoluteCompiledFilePath = "absoluteCompiledFilePath",
  matchPath = "matchPath",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type SiteFunctionFilterInput = {
  apiRoute?: Maybe<StringQueryOperatorInput>;
  originalFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: "SiteFunctionGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: "SiteGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePage = Node & {
  __typename?: "SitePage";
  path: Scalars["String"];
  component: Scalars["String"];
  internalComponentName: Scalars["String"];
  componentChunkName: Scalars["String"];
  matchPath?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars["String"]>;
};

export type SitePageConnection = {
  __typename?: "SitePageConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: "SitePageContext";
  lang?: Maybe<Scalars["String"]>;
  technology?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
};

export type SitePageContextFilterInput = {
  lang?: Maybe<StringQueryOperatorInput>;
  technology?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: "SitePageEdge";
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  path = "path",
  component = "component",
  internalComponentName = "internalComponentName",
  componentChunkName = "componentChunkName",
  matchPath = "matchPath",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  isCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
  context___lang = "context___lang",
  context___technology = "context___technology",
  context___slug = "context___slug",
  pluginCreator___id = "pluginCreator___id",
  pluginCreator___parent___id = "pluginCreator___parent___id",
  pluginCreator___parent___parent___id = "pluginCreator___parent___parent___id",
  pluginCreator___parent___parent___children = "pluginCreator___parent___parent___children",
  pluginCreator___parent___children = "pluginCreator___parent___children",
  pluginCreator___parent___children___id = "pluginCreator___parent___children___id",
  pluginCreator___parent___children___children = "pluginCreator___parent___children___children",
  pluginCreator___parent___internal___content = "pluginCreator___parent___internal___content",
  pluginCreator___parent___internal___contentDigest = "pluginCreator___parent___internal___contentDigest",
  pluginCreator___parent___internal___description = "pluginCreator___parent___internal___description",
  pluginCreator___parent___internal___fieldOwners = "pluginCreator___parent___internal___fieldOwners",
  pluginCreator___parent___internal___ignoreType = "pluginCreator___parent___internal___ignoreType",
  pluginCreator___parent___internal___mediaType = "pluginCreator___parent___internal___mediaType",
  pluginCreator___parent___internal___owner = "pluginCreator___parent___internal___owner",
  pluginCreator___parent___internal___type = "pluginCreator___parent___internal___type",
  pluginCreator___children = "pluginCreator___children",
  pluginCreator___children___id = "pluginCreator___children___id",
  pluginCreator___children___parent___id = "pluginCreator___children___parent___id",
  pluginCreator___children___parent___children = "pluginCreator___children___parent___children",
  pluginCreator___children___children = "pluginCreator___children___children",
  pluginCreator___children___children___id = "pluginCreator___children___children___id",
  pluginCreator___children___children___children = "pluginCreator___children___children___children",
  pluginCreator___children___internal___content = "pluginCreator___children___internal___content",
  pluginCreator___children___internal___contentDigest = "pluginCreator___children___internal___contentDigest",
  pluginCreator___children___internal___description = "pluginCreator___children___internal___description",
  pluginCreator___children___internal___fieldOwners = "pluginCreator___children___internal___fieldOwners",
  pluginCreator___children___internal___ignoreType = "pluginCreator___children___internal___ignoreType",
  pluginCreator___children___internal___mediaType = "pluginCreator___children___internal___mediaType",
  pluginCreator___children___internal___owner = "pluginCreator___children___internal___owner",
  pluginCreator___children___internal___type = "pluginCreator___children___internal___type",
  pluginCreator___internal___content = "pluginCreator___internal___content",
  pluginCreator___internal___contentDigest = "pluginCreator___internal___contentDigest",
  pluginCreator___internal___description = "pluginCreator___internal___description",
  pluginCreator___internal___fieldOwners = "pluginCreator___internal___fieldOwners",
  pluginCreator___internal___ignoreType = "pluginCreator___internal___ignoreType",
  pluginCreator___internal___mediaType = "pluginCreator___internal___mediaType",
  pluginCreator___internal___owner = "pluginCreator___internal___owner",
  pluginCreator___internal___type = "pluginCreator___internal___type",
  pluginCreator___resolve = "pluginCreator___resolve",
  pluginCreator___name = "pluginCreator___name",
  pluginCreator___version = "pluginCreator___version",
  pluginCreator___pluginOptions___displayName = "pluginCreator___pluginOptions___displayName",
  pluginCreator___pluginOptions___fileName = "pluginCreator___pluginOptions___fileName",
  pluginCreator___pluginOptions___minify = "pluginCreator___pluginOptions___minify",
  pluginCreator___pluginOptions___namespace = "pluginCreator___pluginOptions___namespace",
  pluginCreator___pluginOptions___transpileTemplateLiterals = "pluginCreator___pluginOptions___transpileTemplateLiterals",
  pluginCreator___pluginOptions___pure = "pluginCreator___pluginOptions___pure",
  pluginCreator___pluginOptions___projectId = "pluginCreator___pluginOptions___projectId",
  pluginCreator___pluginOptions___dataset = "pluginCreator___pluginOptions___dataset",
  pluginCreator___pluginOptions___watchMode = "pluginCreator___pluginOptions___watchMode",
  pluginCreator___pluginOptions___graphqlTag = "pluginCreator___pluginOptions___graphqlTag",
  pluginCreator___pluginOptions___token = "pluginCreator___pluginOptions___token",
  pluginCreator___pluginOptions___fonts___google = "pluginCreator___pluginOptions___fonts___google",
  pluginCreator___pluginOptions___path = "pluginCreator___pluginOptions___path",
  pluginCreator___pluginOptions___pathCheck = "pluginCreator___pluginOptions___pathCheck",
  pluginCreator___pluginOptions___allExtensions = "pluginCreator___pluginOptions___allExtensions",
  pluginCreator___pluginOptions___isTSX = "pluginCreator___pluginOptions___isTSX",
  pluginCreator___pluginOptions___jsxPragma = "pluginCreator___pluginOptions___jsxPragma",
  pluginCreator___nodeAPIs = "pluginCreator___nodeAPIs",
  pluginCreator___browserAPIs = "pluginCreator___browserAPIs",
  pluginCreator___ssrAPIs = "pluginCreator___ssrAPIs",
  pluginCreator___pluginFilepath = "pluginCreator___pluginFilepath",
  pluginCreator___packageJson___name = "pluginCreator___packageJson___name",
  pluginCreator___packageJson___description = "pluginCreator___packageJson___description",
  pluginCreator___packageJson___version = "pluginCreator___packageJson___version",
  pluginCreator___packageJson___main = "pluginCreator___packageJson___main",
  pluginCreator___packageJson___author = "pluginCreator___packageJson___author",
  pluginCreator___packageJson___license = "pluginCreator___packageJson___license",
  pluginCreator___packageJson___dependencies = "pluginCreator___packageJson___dependencies",
  pluginCreator___packageJson___dependencies___name = "pluginCreator___packageJson___dependencies___name",
  pluginCreator___packageJson___dependencies___version = "pluginCreator___packageJson___dependencies___version",
  pluginCreator___packageJson___devDependencies = "pluginCreator___packageJson___devDependencies",
  pluginCreator___packageJson___devDependencies___name = "pluginCreator___packageJson___devDependencies___name",
  pluginCreator___packageJson___devDependencies___version = "pluginCreator___packageJson___devDependencies___version",
  pluginCreator___packageJson___peerDependencies = "pluginCreator___packageJson___peerDependencies",
  pluginCreator___packageJson___peerDependencies___name = "pluginCreator___packageJson___peerDependencies___name",
  pluginCreator___packageJson___peerDependencies___version = "pluginCreator___packageJson___peerDependencies___version",
  pluginCreator___packageJson___keywords = "pluginCreator___packageJson___keywords",
  pluginCreatorId = "pluginCreatorId",
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: "SitePageGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: "SitePlugin";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  pluginFilepath?: Maybe<Scalars["String"]>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: "SitePluginConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: "SitePluginEdge";
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  resolve = "resolve",
  name = "name",
  version = "version",
  pluginOptions___displayName = "pluginOptions___displayName",
  pluginOptions___fileName = "pluginOptions___fileName",
  pluginOptions___minify = "pluginOptions___minify",
  pluginOptions___namespace = "pluginOptions___namespace",
  pluginOptions___transpileTemplateLiterals = "pluginOptions___transpileTemplateLiterals",
  pluginOptions___pure = "pluginOptions___pure",
  pluginOptions___projectId = "pluginOptions___projectId",
  pluginOptions___dataset = "pluginOptions___dataset",
  pluginOptions___watchMode = "pluginOptions___watchMode",
  pluginOptions___graphqlTag = "pluginOptions___graphqlTag",
  pluginOptions___token = "pluginOptions___token",
  pluginOptions___fonts___google = "pluginOptions___fonts___google",
  pluginOptions___fonts___google___family = "pluginOptions___fonts___google___family",
  pluginOptions___fonts___google___variants = "pluginOptions___fonts___google___variants",
  pluginOptions___path = "pluginOptions___path",
  pluginOptions___pathCheck = "pluginOptions___pathCheck",
  pluginOptions___allExtensions = "pluginOptions___allExtensions",
  pluginOptions___isTSX = "pluginOptions___isTSX",
  pluginOptions___jsxPragma = "pluginOptions___jsxPragma",
  nodeAPIs = "nodeAPIs",
  browserAPIs = "browserAPIs",
  ssrAPIs = "ssrAPIs",
  pluginFilepath = "pluginFilepath",
  packageJson___name = "packageJson___name",
  packageJson___description = "packageJson___description",
  packageJson___version = "packageJson___version",
  packageJson___main = "packageJson___main",
  packageJson___author = "packageJson___author",
  packageJson___license = "packageJson___license",
  packageJson___dependencies = "packageJson___dependencies",
  packageJson___dependencies___name = "packageJson___dependencies___name",
  packageJson___dependencies___version = "packageJson___dependencies___version",
  packageJson___devDependencies = "packageJson___devDependencies",
  packageJson___devDependencies___name = "packageJson___devDependencies___name",
  packageJson___devDependencies___version = "packageJson___devDependencies___version",
  packageJson___peerDependencies = "packageJson___peerDependencies",
  packageJson___peerDependencies___name = "packageJson___peerDependencies___name",
  packageJson___peerDependencies___version = "packageJson___peerDependencies___version",
  packageJson___keywords = "packageJson___keywords",
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: "SitePluginGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJson = {
  __typename?: "SitePluginPackageJson";
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  main?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  license?: Maybe<Scalars["String"]>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: "SitePluginPackageJsonDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: "SitePluginPackageJsonDevDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: "SitePluginPackageJsonPeerDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: "SitePluginPluginOptions";
  displayName?: Maybe<Scalars["Boolean"]>;
  fileName?: Maybe<Scalars["Boolean"]>;
  minify?: Maybe<Scalars["Boolean"]>;
  namespace?: Maybe<Scalars["String"]>;
  transpileTemplateLiterals?: Maybe<Scalars["Boolean"]>;
  pure?: Maybe<Scalars["Boolean"]>;
  projectId?: Maybe<Scalars["String"]>;
  dataset?: Maybe<Scalars["String"]>;
  watchMode?: Maybe<Scalars["Boolean"]>;
  graphqlTag?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  fonts?: Maybe<SitePluginPluginOptionsFonts>;
  path?: Maybe<Scalars["String"]>;
  pathCheck?: Maybe<Scalars["Boolean"]>;
  allExtensions?: Maybe<Scalars["Boolean"]>;
  isTSX?: Maybe<Scalars["Boolean"]>;
  jsxPragma?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsFilterInput = {
  displayName?: Maybe<BooleanQueryOperatorInput>;
  fileName?: Maybe<BooleanQueryOperatorInput>;
  minify?: Maybe<BooleanQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>;
  pure?: Maybe<BooleanQueryOperatorInput>;
  projectId?: Maybe<StringQueryOperatorInput>;
  dataset?: Maybe<StringQueryOperatorInput>;
  watchMode?: Maybe<BooleanQueryOperatorInput>;
  graphqlTag?: Maybe<StringQueryOperatorInput>;
  token?: Maybe<StringQueryOperatorInput>;
  fonts?: Maybe<SitePluginPluginOptionsFontsFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFonts = {
  __typename?: "SitePluginPluginOptionsFonts";
  google?: Maybe<Array<Maybe<SitePluginPluginOptionsFontsGoogle>>>;
};

export type SitePluginPluginOptionsFontsFilterInput = {
  google?: Maybe<SitePluginPluginOptionsFontsGoogleFilterListInput>;
};

export type SitePluginPluginOptionsFontsGoogle = {
  __typename?: "SitePluginPluginOptionsFontsGoogle";
  family?: Maybe<Scalars["String"]>;
  variants?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPluginOptionsFontsGoogleFilterInput = {
  family?: Maybe<StringQueryOperatorInput>;
  variants?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFontsGoogleFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFontsGoogleFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata";
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  siteUrl?: Maybe<Scalars["String"]>;
  enlgishDescription?: Maybe<Scalars["String"]>;
  spanishDescription?: Maybe<Scalars["String"]>;
  twitter?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  enlgishDescription?: Maybe<StringQueryOperatorInput>;
  spanishDescription?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = "ASC",
  DESC = "DESC",
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["String"]>;
  glob?: Maybe<Scalars["String"]>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = { __typename?: "Query" } & {
  allSanityDefinitions: { __typename?: "SanityDefinitionsConnection" } & Pick<
    SanityDefinitionsConnection,
    "totalCount"
  > & {
      nodes: Array<
        { __typename?: "SanityDefinitions" } & Pick<
          SanityDefinitions,
          "id" | "title"
        > & {
            technology?: Maybe<
              Array<
                Maybe<
                  { __typename?: "SanityTechnologies" } & Pick<
                    SanityTechnologies,
                    "technologie"
                  >
                >
              >
            >;
          }
      >;
    };
};

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_2_Query = { __typename?: "Query" } & {
  sanityPages?: Maybe<
    { __typename?: "SanityPages" } & Pick<
      SanityPages,
      "id" | "title" | "_rawContent"
    > & {
        code?: Maybe<
          Array<Maybe<{ __typename?: "SanityCode" } & Pick<SanityCode, "code">>>
        >;
      }
  >;
};

export type Unnamed_3_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_3_Query = { __typename?: "Query" } & {
  allSanityLanguages: { __typename?: "SanityLanguagesConnection" } & {
    nodes: Array<
      { __typename?: "SanityLanguages" } & Pick<
        SanityLanguages,
        "id" | "language"
      >
    >;
  };
};

export type Unnamed_4_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_4_Query = { __typename?: "Query" } & {
  site?: Maybe<
    { __typename?: "Site" } & {
      siteMetadata?: Maybe<
        { __typename?: "SiteSiteMetadata" } & Pick<
          SiteSiteMetadata,
          | "enlgishDescription"
          | "image"
          | "siteUrl"
          | "spanishDescription"
          | "title"
          | "twitter"
        >
      >;
    }
  >;
};

export type Unnamed_5_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_5_Query = { __typename?: "Query" } & {
  allSanityTechnologies: { __typename?: "SanityTechnologiesConnection" } & {
    nodes: Array<
      { __typename?: "SanityTechnologies" } & Pick<
        SanityTechnologies,
        "id" | "technologie"
      >
    >;
  };
};

export type Unnamed_6_QueryVariables = Exact<{
  slug: Scalars["String"];
  technology: Scalars["String"];
}>;

export type Unnamed_6_Query = { __typename?: "Query" } & {
  sanityDefinitions?: Maybe<
    { __typename?: "SanityDefinitions" } & Pick<
      SanityDefinitions,
      "id" | "title" | "_rawContent" | "_updatedAt"
    > & {
        technology?: Maybe<
          Array<
            Maybe<
              { __typename?: "SanityTechnologies" } & Pick<
                SanityTechnologies,
                "technologie"
              >
            >
          >
        >;
        code?: Maybe<
          Array<Maybe<{ __typename?: "SanityCode" } & Pick<SanityCode, "code">>>
        >;
        content?: Maybe<
          { __typename?: "SanityContentTranslations" } & {
            en?: Maybe<
              Array<
                Maybe<
                  { __typename?: "SanityBlock" } & {
                    children?: Maybe<
                      Array<
                        Maybe<
                          { __typename?: "SanitySpan" } & Pick<
                            SanitySpan,
                            "text"
                          >
                        >
                      >
                    >;
                  }
                >
              >
            >;
            es?: Maybe<
              Array<
                Maybe<
                  { __typename?: "SanityBlock" } & {
                    children?: Maybe<
                      Array<
                        Maybe<
                          { __typename?: "SanitySpan" } & Pick<
                            SanitySpan,
                            "text"
                          >
                        >
                      >
                    >;
                  }
                >
              >
            >;
          }
        >;
      }
  >;
};
