import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import {
  DocumentRenderer,
  DocumentRendererProps
} from "@keystone-6/document-renderer";
import Header from "../../Header/Header";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./SinglePost.module.scss";
import moment from "moment";

const renderers: DocumentRendererProps["renderers"] = {
  inline: {
    bold: ({}) => {
      return <strong>{children}</strong>;
    }
  },
  block: {
    paragraph: ({ children, textAlign }) => {
      return <p>{children}</p>;
    }
  }
};
const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    blogPost(where: { id: $id }) {
      title
      publishedAt
      content {
        document
      }
    }
  }
`;

const SinglePost = ({ id }: any) => {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id
    }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  const { blogPost } = data;

  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.content}>
          <Link href="/blog">
            <FaArrowLeft
              className={styles.backButton}
              size={"20px"}
            ></FaArrowLeft>
          </Link>
          <h1>{blogPost.title}</h1>
          <p>{moment(blogPost.publishedAt).format("MM-DD-YYYY HH:mm A")}</p>
          <DocumentRenderer
            document={blogPost.content.document}
            renderers={renderers}
          />
        </div>
      </div>
    </>
  );
};

export default SinglePost;
