import { ListModel } from "../models/listModel";
import ListData from "../data/ListData.json";

/**
 * Retrive sample data
 * @returns data for list widget
 */
export const getListData = async (): Promise<ListModel[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return ListData;
};
