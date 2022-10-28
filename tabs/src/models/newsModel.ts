export interface NewsModelItem {
  id: string;
  title: string;
  content: string;
  img: string;
}

export interface NewsWidgetModel {
  items: NewsModelItem[];
}