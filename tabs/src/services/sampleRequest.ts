import SampleWidgetModel from "../models/sampleWidgetModel";

// dummy data
const sampleData: SampleWidgetModel[] = [
  {
    id: "id1",
    content: "Duis dignissim elit",
  },
  {
    id: "id2",
    content: "Maecenas dapibus velit",
  },
  {
    id: "id3",
    content: "Aliquam non justo",
  },
];

/**
 * Retrive sample data
 * @returns data for sample widget
 */
export const getSampleData = (): SampleWidgetModel[] => {
  return sampleData;
};
