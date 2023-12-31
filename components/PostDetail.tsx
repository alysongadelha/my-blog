import { getContentFragment } from "@/utils/getContentFragment";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { PostDetail } from "@/interfaces";

type Props = {
  post: PostDetail;
};

const PostDetail = ({ post }: Props) => {
  if (!post) return;

  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          width={200}
          height={200}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0 text-gray-700">
        <div className="flex items-center mb-8 w-full">
          <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <Image
              src={post.author.photo.url}
              alt={post.author.name}
              width={30}
              height={30}
              className="align-middle rounded-full h-8 w-8"
            />
            <p className="inline align-middle text-gray-700 ml-2 text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{moment(post.createdAt).format("DD MMM, YYYY")}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold text-gray-700">
          {post.title}
        </h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map(
            (item: { text: any }, itemIndex: any) =>
              getContentFragment(itemIndex, item.text, item)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
