/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    pages: Page;
    showcase: Showcase;
    blog: Blog;
    authors: Author;
    users: User;
    media: Media;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    pages: PagesSelect<false> | PagesSelect<true>;
    showcase: ShowcaseSelect<false> | ShowcaseSelect<true>;
    blog: BlogSelect<false> | BlogSelect<true>;
    authors: AuthorsSelect<false> | AuthorsSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    navigation: Navigation;
    footer: Footer;
  };
  globalsSelect: {
    navigation: NavigationSelect<false> | NavigationSelect<true>;
    footer: FooterSelect<false> | FooterSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  title: string;
  slug: string;
  blocks?: ContainerType[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContainerType".
 */
export interface ContainerType {
  spacing: 'py-4' | 'py-8' | 'py-16' | 'py-24' | 'py-32' | 'py-48' | 'py-64' | '';
  blocks?: (RichTextType | BlogListType | CodeType)[] | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Container';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "RichTextType".
 */
export interface RichTextType {
  richText?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'RichText';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BlogListType".
 */
export interface BlogListType {
  posts?: (number | Blog)[] | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'BlogList';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blog".
 */
export interface Blog {
  id: number;
  /**
   * This will be featured on the homepage
   */
  featured?: boolean | null;
  slug: string;
  authors: (number | Author)[];
  date: string;
  name: string;
  excerpt: string;
  coverImage: number | Media;
  blocks?: (RichTextType | CodeType)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "authors".
 */
export interface Author {
  id: number;
  isCompany?: boolean | null;
  slug: string;
  image?: (number | null) | Media;
  coverImage?: (number | null) | Media;
  name: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  blurData?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CodeType".
 */
export interface CodeType {
  spacing: 'py-4' | 'py-8' | 'py-16' | 'py-24' | 'py-32' | 'py-48' | 'py-64' | '';
  codeLanguage:
    | 'abap'
    | 'actionscript-3'
    | 'ada'
    | 'angular-html'
    | 'angular-ts'
    | 'apache'
    | 'apex'
    | 'apl'
    | 'applescript'
    | 'ara'
    | 'asciidoc'
    | 'asm'
    | 'astro'
    | 'awk'
    | 'ballerina'
    | 'bat'
    | 'beancount'
    | 'berry'
    | 'bibtex'
    | 'bicep'
    | 'blade'
    | 'bsl'
    | 'c'
    | 'cadence'
    | 'cairo'
    | 'clarity'
    | 'clojure'
    | 'cmake'
    | 'cobol'
    | 'codeowners'
    | 'codeql'
    | 'coffee'
    | 'common-lisp'
    | 'coq'
    | 'cpp'
    | 'crystal'
    | 'csharp'
    | 'css'
    | 'csv'
    | 'cue'
    | 'cypher'
    | 'd'
    | 'dart'
    | 'dax'
    | 'desktop'
    | 'diff'
    | 'docker'
    | 'dotenv'
    | 'dream-maker'
    | 'edge'
    | 'elixir'
    | 'elm'
    | 'emacs-lisp'
    | 'erb'
    | 'erlang'
    | 'fennel'
    | 'fish'
    | 'fluent'
    | 'fortran-fixed-form'
    | 'fortran-free-form'
    | 'fsharp'
    | 'gdresource'
    | 'gdscript'
    | 'gdshader'
    | 'genie'
    | 'gherkin'
    | 'git-commit'
    | 'git-rebase'
    | 'gleam'
    | 'glimmer-js'
    | 'glimmer-ts'
    | 'glsl'
    | 'gnuplot'
    | 'go'
    | 'graphql'
    | 'groovy'
    | 'hack'
    | 'haml'
    | 'handlebars'
    | 'haskell'
    | 'haxe'
    | 'hcl'
    | 'hjson'
    | 'hlsl'
    | 'html'
    | 'html-derivative'
    | 'http'
    | 'hxml'
    | 'hy'
    | 'imba'
    | 'ini'
    | 'java'
    | 'javascript'
    | 'jinja'
    | 'jison'
    | 'json'
    | 'json5'
    | 'jsonc'
    | 'jsonl'
    | 'jsonnet'
    | 'jssm'
    | 'jsx'
    | 'julia'
    | 'kotlin'
    | 'kusto'
    | 'latex'
    | 'lean'
    | 'less'
    | 'liquid'
    | 'log'
    | 'logo'
    | 'lua'
    | 'luau'
    | 'make'
    | 'markdown'
    | 'marko'
    | 'matlab'
    | 'mdc'
    | 'mdx'
    | 'mermaid'
    | 'mipsasm'
    | 'mojo'
    | 'move'
    | 'narrat'
    | 'nextflow'
    | 'nginx'
    | 'nim'
    | 'nix'
    | 'nushell'
    | 'objective-c'
    | 'objective-cpp'
    | 'ocaml'
    | 'pascal'
    | 'perl'
    | 'php'
    | 'plsql'
    | 'po'
    | 'polar'
    | 'postcss'
    | 'powerquery'
    | 'powershell'
    | 'prisma'
    | 'prolog'
    | 'proto'
    | 'pug'
    | 'puppet'
    | 'purescript'
    | 'python'
    | 'qml'
    | 'qmldir'
    | 'qss'
    | 'r'
    | 'racket'
    | 'raku'
    | 'razor'
    | 'reg'
    | 'regexp'
    | 'rel'
    | 'riscv'
    | 'rst'
    | 'ruby'
    | 'rust'
    | 'sas'
    | 'sass'
    | 'scala'
    | 'scheme'
    | 'scss'
    | 'sdbl'
    | 'shaderlab'
    | 'shellscript'
    | 'shellsession'
    | 'smalltalk'
    | 'solidity'
    | 'soy'
    | 'sparql'
    | 'splunk'
    | 'sql'
    | 'ssh-config'
    | 'stata'
    | 'stylus'
    | 'svelte'
    | 'swift'
    | 'system-verilog'
    | 'systemd'
    | 'talonscript'
    | 'tasl'
    | 'tcl'
    | 'templ'
    | 'terraform'
    | 'tex'
    | 'toml'
    | 'ts-tags'
    | 'tsv'
    | 'tsx'
    | 'turtle'
    | 'twig'
    | 'typescript'
    | 'typespec'
    | 'typst'
    | 'v'
    | 'vala'
    | 'vb'
    | 'verilog'
    | 'vhdl'
    | 'viml'
    | 'vue'
    | 'vue-html'
    | 'vyper'
    | 'wasm'
    | 'wenyan'
    | 'wgsl'
    | 'wikitext'
    | 'wolfram'
    | 'xml'
    | 'xsl'
    | 'yaml'
    | 'zenscript'
    | 'zig';
  code: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Code';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "showcase".
 */
export interface Showcase {
  id: number;
  /**
   * This will be featured on the homepage
   */
  featured?: boolean | null;
  slug: string;
  authors: (number | Author)[];
  name: string;
  url: string;
  content?: {
    blocks?: RichTextType[] | null;
  };
  details?: {
    screenshot?: (number | null) | Media;
    description?: string | null;
    categories?: ('portfolio' | 'blog')[] | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  permissions: 'readonly' | 'admin';
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null)
    | ({
        relationTo: 'showcase';
        value: number | Showcase;
      } | null)
    | ({
        relationTo: 'blog';
        value: number | Blog;
      } | null)
    | ({
        relationTo: 'authors';
        value: number | Author;
      } | null)
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  slug?: T;
  blocks?:
    | T
    | {
        Container?: T | ContainerTypeSelect<T>;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContainerType_select".
 */
export interface ContainerTypeSelect<T extends boolean = true> {
  spacing?: T;
  blocks?:
    | T
    | {
        RichText?: T | RichTextTypeSelect<T>;
        BlogList?: T | BlogListTypeSelect<T>;
        Code?: T | CodeTypeSelect<T>;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "RichTextType_select".
 */
export interface RichTextTypeSelect<T extends boolean = true> {
  richText?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BlogListType_select".
 */
export interface BlogListTypeSelect<T extends boolean = true> {
  posts?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CodeType_select".
 */
export interface CodeTypeSelect<T extends boolean = true> {
  spacing?: T;
  codeLanguage?: T;
  code?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "showcase_select".
 */
export interface ShowcaseSelect<T extends boolean = true> {
  featured?: T;
  slug?: T;
  authors?: T;
  name?: T;
  url?: T;
  content?:
    | T
    | {
        blocks?:
          | T
          | {
              RichText?: T | RichTextTypeSelect<T>;
            };
      };
  details?:
    | T
    | {
        screenshot?: T;
        description?: T;
        categories?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blog_select".
 */
export interface BlogSelect<T extends boolean = true> {
  featured?: T;
  slug?: T;
  authors?: T;
  date?: T;
  name?: T;
  excerpt?: T;
  coverImage?: T;
  blocks?:
    | T
    | {
        RichText?: T | RichTextTypeSelect<T>;
        Code?: T | CodeTypeSelect<T>;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "authors_select".
 */
export interface AuthorsSelect<T extends boolean = true> {
  isCompany?: T;
  slug?: T;
  image?: T;
  coverImage?: T;
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  permissions?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  blurData?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "navigation".
 */
export interface Navigation {
  id: number;
  items?:
    | {
        link?: (number | null) | Page;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: number;
  links?:
    | {
        link?: (number | null) | Page;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "navigation_select".
 */
export interface NavigationSelect<T extends boolean = true> {
  items?:
    | T
    | {
        link?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer_select".
 */
export interface FooterSelect<T extends boolean = true> {
  links?:
    | T
    | {
        link?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}