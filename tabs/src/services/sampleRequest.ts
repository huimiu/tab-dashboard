import { SampleWidgetModel } from "../models/sampleWidgetModel";

// dummy data
const sampleData: SampleWidgetModel = {
  items: [
    {
      id: "id1",
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet",
    },
    {
      id: "id2",
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet",
    },
    {
      id: "id3",
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet",
    },
  ],
};

/**
 * Retrive sample data
 * @returns data for sample widget
 */
export const getSampleData = (): SampleWidgetModel => {
  return sampleData;
};

export const chart1Points = [
  {
    x: new Date("2022/01/01"),
    y: 27000,
  },
  {
    x: new Date("2022/01/05"),
    y: 23000,
  },
  {
    x: new Date("2022/01/09"),
    y: 26000,
  },
  {
    x: new Date("2022/01/13"),
    y: 17000,
  },
  {
    x: new Date("2022/01/17"),
    y: 26000,
  },
  {
    x: new Date("2022/01/21"),
    y: 27000,
  },
  {
    x: new Date("2022/01/25"),
    y: 27500,
  },
  {
    x: new Date("2022/01/29"),
    y: 28000,
  },
];

export const chart2Points = [
  {
    x: new Date("2022/01/01"),
    y: 18000,
  },
  {
    x: new Date("2022/01/05"),
    y: 14000,
  },
  {
    x: new Date("2022/01/09"),
    y: 19000,
  },
  {
    x: new Date("2022/01/13"),
    y: 13000,
  },
  {
    x: new Date("2022/01/17"),
    y: 12000,
  },
  {
    x: new Date("2022/01/21"),
    y: 14000,
  },
  {
    x: new Date("2022/01/25"),
    y: 15000,
  },
  {
    x: new Date("2022/01/29"),
    y: 16000,
  },
];
