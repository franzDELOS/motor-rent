"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "auth/register/",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "auth/login/",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } =
  authenticationApi;
