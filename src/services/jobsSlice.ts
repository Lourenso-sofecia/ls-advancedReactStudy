import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Job } from "../@types/job";
import { jobsData } from "../data/jobs";

interface JobsState {
  items: Job[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: JobsState = {
  items: [],
  status: "idle",
};

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  await new Promise((resolve) => setTimeout(resolve, 2500));
  return jobsData as Job[];
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default jobsSlice.reducer;
