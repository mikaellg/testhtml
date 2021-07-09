export class PagedResult<T> {
  TotalPages: number;
  Result: T[];
  HasPreviousPage: boolean;
  HasNextPage: boolean;
  TotalRows: number;
}
