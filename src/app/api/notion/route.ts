import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY });

// Notion's API accepts only POST requests to query the database
export const POST = async () => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID as string,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error querying Notion database:', error);
    return NextResponse.json(
      { error: 'Failed to query Notion database' },
      { status: 500 }
    );
  }
};
