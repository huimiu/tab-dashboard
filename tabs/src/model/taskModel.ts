export default interface TaskModel {
  id?: string;
  content: string;
  status?: string;
  importance?: string;
  createdDateTime?: string;
  lastModifiedDateTime?: string;
  url?: string;
}
