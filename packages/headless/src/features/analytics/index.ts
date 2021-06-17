import {
  SearchEventPayload as SearchEventPayloadAlias,
  CustomEventPayload as CustomEventPayloadAlias,
  ClickEventPayload as ClickEventPayloadAlias,
  logInterfaceLoad as logInterfaceLoadAlias,
  logInterfaceChange as logInterfaceChangeAlias,
  logClickEvent as logClickEventAlias,
  logCustomEvent as logCustomEventAlias,
  logSearchEvent as logSearchEventAlias,
} from './analytics-actions';
/**
 * @deprecated - This namespace will be removed. Please use `loadSearchAnalyticsActions` instead.
 */
export namespace AnalyticsActions {
  export type SearchEventPayload = SearchEventPayloadAlias;
  export type CustomEventPayload = CustomEventPayloadAlias;
  export type ClickEventPayload = ClickEventPayloadAlias;
  export const logInterfaceLoad = logInterfaceLoadAlias;
  export const logInterfaceChange = logInterfaceChangeAlias;
  export const logClickEvent = logClickEventAlias;
  export const logCustomEvent = logCustomEventAlias;
  export const logSearchEvent = logSearchEventAlias;
}

import {
  logDidYouMeanClick as logDidYouMeanClickAlias,
  logDidYouMeanAutomatic as logDidYouMeanAutomaticAlias,
} from '../did-you-mean/did-you-mean-analytics-actions';
/**
 * @deprecated - This namespace will be removed. Please use `loadSearchAnalyticsActions` instead.
 */
export namespace DidYouMeanAnalyticsActions {
  export const logDidYouMeanClick = logDidYouMeanClickAlias;
  export const logDidYouMeanAutomatic = logDidYouMeanAutomaticAlias;
}

import {
  logFacetShowMore as logFacetShowMoreAlias,
  logFacetShowLess as logFacetShowLessAlias,
  logFacetSelect as logFacetSelectAlias,
  logFacetDeselect as logFacetDeselectAlias,
  logFacetClearAll as logFacetClearAllAlias,
  logFacetSearch as logFacetSearchAlias,
  logFacetUpdateSort as logFacetUpdateSortAlias,
  logFacetBreadcrumb as logFacetBreadcrumbAlias,
} from '../facets/facet-set/facet-set-analytics-actions';
/**
 * @deprecated - This namespace will be removed. Please use `loadSearchAnalyticsActions` instead.
 */
export namespace FacetAnalyticsActions {
  export const logFacetShowMore = logFacetShowMoreAlias;
  export const logFacetShowLess = logFacetShowLessAlias;
  export const logFacetSelect = logFacetSelectAlias;
  export const logFacetDeselect = logFacetDeselectAlias;
  export const logFacetClearAll = logFacetClearAllAlias;
  export const logFacetSearch = logFacetSearchAlias;
  export const logFacetUpdateSort = logFacetUpdateSortAlias;
  export const logFacetBreadcrumb = logFacetBreadcrumbAlias;
}

import {logClearBreadcrumbs as logClearBreadcrumbsAlias} from '../facets/generic/facet-generic-analytics-actions';
/**
 * @deprecated - This namespace will be removed. Please use `loadSearchAnalyticsActions` instead.
 */
export namespace FacetGenericAnalyticsActions {
  export const logClearBreadcrumbs = logClearBreadcrumbsAlias;
}

import {logDateFacetBreadcrumb as logDateFacetBreadcrumbAlias} from '../facets/range-facets/date-facet-set/date-facet-analytics-actions';
/**
 * @deprecated - This namespace will be removed. Please use `loadSearchAnalyticsActions` instead.
 */
export namespace DateFacetAnalyticsActions {
  export const logDateFacetBreadcrumb = logDateFacetBreadcrumbAlias;
}

import {logNumericFacetBreadcrumb as logNumericFacetBreadcrumbAlias} from '../facets/range-facets/numeric-facet-set/numeric-facet-analytics-actions';
/**
 * @deprecated - This namespace will be removed. Please use `loadSearchAnalyticsActions` instead.
 */
export namespace NumericFacetAnalyticsActions {
  export const logNumericFacetBreadcrumb = logNumericFacetBreadcrumbAlias;
}

import {logCategoryFacetBreadcrumb as logCategoryFacetBreadcrumbAlias} from '../facets/category-facet-set/category-facet-set-analytics-actions';
/**
 * @deprecated - This namespace will be removed. Please use `loadSearchAnalyticsActions` instead.
 */
export namespace CategoryFacetAnalyticsActions {
  export const logCategoryFacetBreadcrumb = logCategoryFacetBreadcrumbAlias;
}

import {
  logNavigateForward as logNavigateForwardAlias,
  logNavigateBackward as logNavigateBackwardAlias,
} from '../history/history-analytics-actions';
/**
 * @deprecated - This namespace will be removed. Please use `loadSearchAnalyticsActions` instead.
 */
export namespace HistoryAnalyticsActions {
  export const logNavigateForward = logNavigateForwardAlias;
  export const logNavigateBackward = logNavigateBackwardAlias;
}

import {
  logPageNext as logPageNextAlias,
  logPagePrevious as logPagePreviousAlias,
  logPageNumber as logPageNumberAlias,
  logPagerResize as logPagerResizeAlias,
} from '../pagination/pagination-analytics-actions';
/**
 * @deprecated - This namespace will be removed. Please use `loadSearchAnalyticsActions` instead.
 */
export namespace PaginationAnalyticsActions {
  export const logPageNext = logPageNextAlias;
  export const logPagePrevious = logPagePreviousAlias;
  export const logPageNumber = logPageNumberAlias;
  export const logPagerResize = logPagerResizeAlias;
}

import {logProductRecommendations as logProductRecommendationsAlias} from '../product-recommendations/product-recommendations-analytics.actions';
/**
 * @deprecated - This namespace will be removed. Please use `loadSearchAnalyticsActions` instead.
 */
export namespace ProductRecommendationAnalyticsActions {
  export const logProductRecommendations = logProductRecommendationsAlias;
}

import {logSearchboxSubmit as logSearchboxSubmitAlias} from '../query/query-analytics-actions';
/**
 * @deprecated - This namespace will be removed. Please use `loadSearchAnalyticsActions` instead.
 */
export namespace QueryAnalyticsActions {
  export const logSearchboxSubmit = logSearchboxSubmitAlias;
}

import {logQuerySuggestionClick as logQuerySuggestionClickAlias} from '../query-suggest/query-suggest-analytics-actions';
/**
 * @deprecated - This namespace will be removed. Please use `loadSearchAnalyticsActions` instead.
 */
export namespace QuerySuggestAnalyticsActions {
  export const logQuerySuggestionClick = logQuerySuggestionClickAlias;
}

import {
  logRecommendationUpdate as logRecommendationUpdateAlias,
  logRecommendationOpen as logRecommendationOpenAlias,
} from '../recommendation/recommendation-analytics-actions';
/**
 * @deprecated - This namespace will be removed. Please use `loadClickAnalyticsActions` from "@coveo/headless/recommendation" instead.
 */
export namespace RecommendationAnalyticsActions {
  export const logRecommendationUpdate = logRecommendationUpdateAlias;
  export const logRecommendationOpen = logRecommendationOpenAlias;
}

import {logTriggerRedirect as logTriggerRedirectAlias} from '../redirection/redirection-analytics-actions';
/**
 * @deprecated - This namespace will be removed. Please use `loadSearchAnalyticsActions` instead.
 */
export namespace RedirectionAnalyticsActions {
  export const logTriggerRedirect = logTriggerRedirectAlias;
}

import {logDocumentOpen as logDocumentOpenAlias} from '../result/result-analytics-actions';
/**
 * @deprecated - This namespace will be removed. Please use `loadClickAnalyticsActions` instead.
 */
export namespace ResultAnalyticsActions {
  export const logDocumentOpen = logDocumentOpenAlias;
}

import {logResultsSort as logResultsSortAlias} from '../sort-criteria/sort-criteria-analytics-actions';
/**
 * @deprecated - This namespace will be removed. Please use `loadSearchAnalyticsActions` instead.
 */
export namespace SortCriterionAnalyticsActions {
  export const logResultsSort = logResultsSortAlias;
}
import {
  logFetchMoreResults as logFetchMoreResultsAlias,
  logQueryError as logQueryErrorAlias,
} from '../search/search-analytics-actions';
/**
 * @deprecated - This namespace will be removed. Please use `loadSearchAnalyticsActions` instead.
 */
export namespace SearchAnalyticsActions {
  export const logFetchMoreResults = logFetchMoreResultsAlias;
  export const logQueryError = logQueryErrorAlias;
}

export * from './search-analytics-actions-loader';
export * from './click-analytics-actions-loader';
export * from './generic-analytics-actions-loader';
