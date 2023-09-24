import { Comment } from "@/interfaces";
import { queryPostComment } from "@/services/gql";
import { GraphQLClient, gql } from "graphql-request";
import { NextResponse } from "next/server";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

export async function POST(req: Request, res: NextResponse) {
  if (!graphqlAPI || !graphcmsToken)
    throw new Error("ENDPOINT is not available");

  if (!req.body) throw new Error("Some field missing");

  const requestBody: Comment = await req.json();

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`,
    },
  });

  try {
    let result = await graphQLClient.request(queryPostComment, {
      ...requestBody,
    });
    return NextResponse.json({
      msg: `Successfully created new Comment: ${result}`,
      status: 200,
      result,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      error: `Error on '/api/register': ${error}`,
      success: false,
      status: 500,
    });
  }
}
