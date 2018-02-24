# gitbook-plugin-ghcomment

[![npm](https://img.shields.io/npm/v/gitbook-plugin-ghcomment.svg?style=plastic)](https://npmjs.org/package/gitbook-plugin-ghcomment) [![npm](https://img.shields.io/npm/dm/gitbook-plugin-ghcomment.svg?style=plastic)](https://npmjs.org/package/gitbook-plugin-ghcomment) [![npm](https://img.shields.io/npm/dt/gitbook-plugin-ghcomment.svg?style=plastic)](https://npmjs.org/package/gitbook-plugin-ghcomment)

## GitHub issue comment for GitBook

plugin ghcomment is based on <https://github.com/nimojs/github-comments> for displaying comments with GitHub issue.

### add plugin in `book.json`

```
{
  "plugins": [
    "ghcomment"
  ],
  "ghcomment": {
    "owner": "billryan",
    "repo": "blog"
  }
}
```

Replace `owner` and `repo` with your own issue repo. For gitbook markdown text, you should set `issue_id` in the frontmatter.

```
---
created: 2018-02-24_16-30-16
issue_id: 16
title: xxx
---
```
