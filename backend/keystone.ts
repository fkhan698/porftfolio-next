/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/
import "dotenv/config"

import { config } from "@keystone-6/core"

// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
import { lists } from "./schema"
import { User } from "./schemas/User"
import { BlogPost } from "./schemas/BlogPost"
import { BlogImage } from "./schemas/BlogImage"

// Keystone auth is configured separately - check out the basic auth setup we are importing from our auth file.
import { withAuth, session } from "./auth"
const databaseURL = process.env.DB_URL || ""

export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    // the db sets the database provider - we're using sqlite for the fastest startup experience
    graphql: {
      playground: true,
      cors: {
        origin: ["https://faizanzkhan.com/", "http://localhost:3000"],
        credentials: true,
      },
    },

    server: {
      cors: { origin: ["http://localhost:3001"], credentials: true },
      port: 3000,
    },

    db: {
      provider: "postgresql",
      url: databaseURL,
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui

    lists: {
      User,
      BlogPost,
      BlogImage,
    },
    session,
  })
)
