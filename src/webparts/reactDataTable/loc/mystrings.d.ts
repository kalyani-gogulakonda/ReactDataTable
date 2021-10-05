declare interface IReactDataTableWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  DataTableTitleFieldLabel: string;
  ConfigureWebpartButtonLabel: string;
  ConfigureWebpartDescription: string;
  ListFieldValidation: string;
  ListPickerLabel: string;
  MultiSelectFieldLabel: string;
  SortingToggleLabel: string;
  SortByLabel: string;
  SearchingToggleLabel: string;
  SearchByLabel: string;
  PaginationLabel: string;
  DownloadAsCSVLabel: string;
  DownloadAsPDFLabel: string;
  CSVToggleLabel: string;
  PDFToggleLabel: string;
  EvenRowColorLabel: string;
  OddRowColorLabel: string;
  OrderListItemsLabel: string;
  ListConfigurationGroupName: string;
  SearchAndSortGroupName: string;
  AdvancedFeaturesGroupName: string;
}

declare module 'ReactDataTableWebPartStrings' {
  const strings: IReactDataTableWebPartStrings;
  export = strings;
}
