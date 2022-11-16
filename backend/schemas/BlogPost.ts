import {
  integer,
  relationship,
  select,
  text,
  timestamp,
} from "@keystone-6/core/fields"
import { list } from "@keystone-6/core"
import { document } from "@keystone-6/fields-document"

import { BlogImage } from "./BlogImage"

export const BlogPost = list({
  fields: {
    title: text(),
    publishedAt: timestamp(),
    status: select({
      options: [
        { label: "Published", value: "published" },
        { label: "Draft", value: "draft" },
      ],
      defaultValue: "draft",
    }),
    content: document({
      formatting: true,
      links: true,
      dividers: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1],
      ],
    }),
  },
})
