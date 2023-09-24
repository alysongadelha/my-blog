"use client";
import { getComments } from "@/services";
import moment from "moment";
import { comment } from "postcss";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { CommentWidget } from "@/interfaces";

type Props = {
  slug: string;
};

const Comments = ({ slug }: Props) => {
  const [comments, setComments] = useState<CommentWidget[]>();

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, [slug]);

  return (
    <>
      {comment?.length && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl text-gray-700 mb-8 font-semibold border-b pb-4">
            {comments?.length} Comments
          </h3>
          {comments?.map(({ name, createdAt, comment }) => (
            <div key={createdAt} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4 text-gray-700">
                <span className="font-semibold">{name}</span> on{" "}
                {moment(createdAt).format("DD MMM, YYYY")}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
