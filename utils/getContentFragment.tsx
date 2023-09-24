import React from "react";
import Image from "next/image";

export const getContentFragment = (
  index: any,
  text: any,
  obj: any,
  type?: any
) => {
  let modifiedText = text;

  if (obj) {
    if (obj.bold) {
      modifiedText = <b key={index}>{text}</b>;
    }

    if (obj.italic) {
      modifiedText = <em key={index}>{text}</em>;
    }

    if (obj.underline) {
      modifiedText = <u key={index}>{text}</u>;
    }
  }

  switch (type) {
    case "heading-three":
      return (
        <h3 key={index} className="text-xl font-semibold mb-4">
          {modifiedText.map(
            (
              item:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined,
              i: React.Key | null | undefined
            ) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            )
          )}
        </h3>
      );
    case "paragraph":
      return (
        <p key={index} className="mb-8">
          {modifiedText.map(
            (
              item:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined,
              i: React.Key | null | undefined
            ) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            )
          )}
        </p>
      );
    case "heading-four":
      return (
        <h4 key={index} className="text-md font-semibold mb-4">
          {modifiedText.map(
            (
              item:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined,
              i: React.Key | null | undefined
            ) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            )
          )}
        </h4>
      );
    case "image":
      return (
        <Image
          key={index}
          alt={obj.title}
          height={obj.height}
          width={obj.width}
          src={obj.src}
        />
      );
    default:
      return modifiedText;
  }
};
