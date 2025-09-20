import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080", // your Go backend
  }),
  tagTypes: [
    "Auth",
    "Members",
    "Leaders",
    "Groups",
    "Attendance",
    "Events",
    "Donations",
    "Expenses",
    "Announcements",
    "DashboardMetrics",
  ],
  endpoints: (builder) => ({
    // We’ll add actual queries/mutations later
    getMembers: builder.query<any[], void>({
      query: () => "/members",
      providesTags: ["Members"],
    }),
    getEvents: builder.query<any[], void>({
      query: () => "/events",
      providesTags: ["Events"],
    }),
    // etc...
  }),
});

export const {
  useGetMembersQuery,
  useGetEventsQuery,
} = api;
