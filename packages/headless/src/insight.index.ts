// 3rd Party Libraries
export type {Unsubscribe, Middleware} from '@reduxjs/toolkit';

// Main App
export type {
  InsightEngine,
  InsightEngineOptions,
  InsightEngineConfiguration,
} from './app/insight-engine/insight-engine';
export {buildInsightEngine} from './app/insight-engine/insight-engine';

export type {CoreEngine, ExternalEngineOptions} from './app/engine';
export type {
  EngineConfiguration,
  AnalyticsConfiguration,
  AnalyticsRuntimeEnvironment,
} from './app/engine-configuration';
export type {LoggerOptions} from './app/logger';

export type {LogLevel} from './app/logger';

// Action loaders
export * from './features/insight-interface/insight-interface-actions-loader';
export * from './features/insight-search/insight-search-actions-loader';
export * from './features/analytics/insight-analytics-actions-loader';
export * from './features/facets/range-facets/numeric-facet-set/numeric-facet-actions-loader';
export * from './features/recent-results/recent-results-actions-loader';

// Controllers
export type {
  Controller,
  Subscribable,
} from './controllers/controller/headless-controller';
export {buildController} from './controllers/controller/headless-controller';

export type {
  DidYouMean,
  DidYouMeanState,
  QueryCorrection,
  WordCorrection,
} from './controllers/insight/did-you-mean/headless-insight-did-you-mean';
export {buildDidYouMean} from './controllers/insight/did-you-mean/headless-insight-did-you-mean';

export type {
  NumericFacetBreadcrumb,
  FacetBreadcrumb,
  DateFacetBreadcrumb,
  CategoryFacetBreadcrumb,
  StaticFilterBreadcrumb,
  Breadcrumb,
  BreadcrumbValue,
  BreadcrumbManagerState,
  BreadcrumbManager,
  DeselectableValue,
} from './controllers/insight/breadcrumb-manager/headless-insight-breadcrumb-manager';
export {buildBreadcrumbManager} from './controllers/insight/breadcrumb-manager/headless-insight-breadcrumb-manager';

export type {
  SearchParameterManagerProps,
  SearchParameterManagerInitialState,
  SearchParameterManagerState,
  SearchParameterManager,
  SearchParameters,
} from './controllers/insight/search-parameter-manager/headless-insight-search-parameter-manager';
export {buildSearchParameterManager} from './controllers/insight/search-parameter-manager/headless-insight-search-parameter-manager';

export type {
  FacetManagerPayload,
  FacetManagerState,
  FacetManager,
} from './controllers/insight/facet-manager/headless-insight-facet-manager';
export {buildFacetManager} from './controllers/insight/facet-manager/headless-insight-facet-manager';

export type {
  CategoryFacetOptions,
  CategoryFacetSearchOptions,
  CategoryFacetProps,
  CategoryFacetState,
  CategoryFacet,
  CategoryFacetValue,
  CategoryFacetSearch,
  CategoryFacetSearchState,
  CategoryFacetSearchResult,
} from './controllers/insight/facets/category-facet/headless-insight-category-facet';
export {buildCategoryFacet} from './controllers/insight/facets/category-facet/headless-insight-category-facet';

export type {
  FacetOptions,
  FacetSearchOptions,
  FacetProps,
  FacetState,
  Facet,
  FacetValue,
  FacetValueState,
  FacetSearch,
  FacetSearchState,
  SpecificFacetSearchResult,
} from './controllers/insight/facets/facet/headless-insight-facet';
export {buildFacet} from './controllers/insight/facets/facet/headless-insight-facet';

export type {
  DateRangeOptions,
  DateRangeRequest,
  DateRangeInput,
  DateFacetOptions,
  DateFacetProps,
  DateFacetState,
  DateFacet,
} from './controllers/insight/facets/range-facet/date-facet/headless-insight-date-facet';
export {
  buildDateRange,
  buildDateFacet,
} from './controllers/insight/facets/range-facet/date-facet/headless-insight-date-facet';

export type {
  NumericRangeOptions,
  NumericRangeRequest,
  NumericFacetOptions,
  NumericFacetProps,
  NumericFacetState,
  NumericFacet,
} from './controllers/insight/facets/range-facet/numeric-facet/headless-insight-numeric-facet';
export {
  buildNumericRange,
  buildNumericFacet,
} from './controllers/insight/facets/range-facet/numeric-facet/headless-insight-numeric-facet';

export type {
  NumericFilter,
  NumericFilterOptions,
  NumericFilterProps,
  NumericFilterRange,
  NumericFilterState,
  NumericFilterInitialState,
} from './controllers/insight/facets/range-facet/numeric-facet/headless-insight-numeric-filter';
export {buildNumericFilter} from './controllers/insight/facets/range-facet/numeric-facet/headless-insight-numeric-filter';

export type {
  DateFilter,
  DateFilterOptions,
  DateFilterProps,
  DateFilterRange,
  DateFilterState,
  DateFilterInitialState,
} from './controllers/insight/facets/range-facet/date-facet/headless-insight-date-filter';
export {buildDateFilter} from './controllers/insight/facets/range-facet/date-facet/headless-insight-date-filter';

export type {
  PagerInitialState,
  PagerOptions,
  PagerProps,
  PagerState,
  Pager,
} from './controllers/insight/pager/headless-insight-pager';
export {buildPager} from './controllers/insight/pager/headless-insight-pager';

export type {
  QuerySummaryState,
  QuerySummary,
} from './controllers/insight/query-summary/headless-insight-query-summary';
export {buildQuerySummary} from './controllers/insight/query-summary/headless-insight-query-summary';

export type {
  Quickview,
  QuickviewOptions,
  QuickviewProps,
  QuickviewState,
} from './controllers/insight/quickview/headless-insight-quickview';
export {buildQuickview} from './controllers/insight/quickview/headless-insight-quickview';

export type {
  ResultListProps,
  ResultListOptions,
  ResultListState,
  ResultList,
} from './controllers/insight/result-list/headless-insight-result-list';
export {buildResultList} from './controllers/insight/result-list/headless-insight-result-list';

export type {
  InsightInteractiveResultOptions,
  InsightInteractiveResultProps,
  InteractiveResult,
} from './controllers/insight/result-list/headless-insight-interactive-result';
export {buildInteractiveResult} from './controllers/insight/result-list/headless-insight-interactive-result';

export type {
  ResultsPerPageInitialState,
  ResultsPerPageProps,
  ResultsPerPageState,
  ResultsPerPage,
} from './controllers/insight/results-per-page/headless-insight-results-per-page';
export {buildResultsPerPage} from './controllers/insight/results-per-page/headless-insight-results-per-page';

export type {
  SearchBoxOptions,
  SearchBoxProps,
  SearchBoxState,
  SearchBox,
  Suggestion,
  SuggestionHighlightingOptions,
  Delimiters,
} from './controllers/insight/search-box/headless-insight-search-box';
export {buildSearchBox} from './controllers/insight/search-box/headless-insight-search-box';

export type {
  SearchStatus,
  SearchStatusState,
} from './controllers/insight/status/headless-insight-status';
export {buildSearchStatus} from './controllers/insight/status/headless-insight-status';

export type {
  SortInitialState,
  SortProps,
  SortState,
  Sort,
} from './controllers/insight/sort/headless-insight-sort';
export {buildSort} from './controllers/insight/sort/headless-insight-sort';

export type {InsightInterfaceState} from './features/insight-interface/insight-interface-state';
export type {InsightInterface} from './controllers/insight-interface/insight-interface';
export {buildInsightInterface} from './controllers/insight-interface/insight-interface';

// Types & Helpers
export {
  SortOrder,
  buildDateSortCriterion,
  buildCriterionExpression,
  buildRelevanceSortCriterion,
} from './features/sort-criteria/criteria';

export {deserializeRelativeDate} from './api/search/date/relative-date';
