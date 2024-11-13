import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { baseEndpoint } from "../../client/constans";
import { act } from "react";

interface Course {
  id: string;
  image: string;
  rating: number;
  authorId: string;
  description: string;
  duration: string;
  title: string;
  tags: string;
}

interface CoursesState {
  courses: Course[];
  loading: boolean;
  error: string | null;
  searchString: string;
  filterByTag: string;
  filteredCourses: object[];
  tags: object[];
}

export const listCourses = createAsyncThunk<Course[], string | undefined>(
  "courses/listCourses",
  async (searchInput) => {
    const { data } = await axios.get<Course[]>(`${baseEndpoint}/courses`);

    if (searchInput) {
      return data.filter(
        (course) =>
          course.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          course.description.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    return data;
  }
);

const initialState: CoursesState = {
  courses: [],
  loading: false,
  error: null,
  searchString: "",
  filterByTag: "All Courses",
  filteredCourses: [],
  tags: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    filter: (state: any, action: any) => {
      state.filterByTag = action.payload.title;
      if (action.payload.value === "all") {
        state.filteredCourses = state.courses;
      } else {
        state.filteredCourses = state.courses.filter((course: any) =>
          course.tags.includes(action.payload.value)
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(listCourses.pending, (state) => {
      state.loading = true;
      state.courses = [];
    });

    builder.addCase(
      listCourses.fulfilled,
      (state, action: PayloadAction<Course[]>) => {
        state.courses = action.payload;
        state.filteredCourses = action.payload;
        state.loading = false;
      }
    );

    builder.addCase(listCourses.rejected, (state, action) => {
      state.error = action.error.message || "Failed to load courses";
      state.loading = false;
    });
  },
});

export default coursesSlice.reducer;
export const { filter, setActiveTab, getAllTags }: any = coursesSlice.actions;
