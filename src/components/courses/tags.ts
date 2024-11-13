interface Ifilters {
    title: string;
    value: string;
  }

  export const filters: Ifilters[] = [
    {
      title: "All Courses",
      value: "all",
    },
    {
      title: "The Newest",
      value: "newest",
    },
    {
      title: "Top Rated",
      value: "top-rated",
    },
    {
      title: "Most Popular",
      value: "popular",
    },
  ];