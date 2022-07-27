import {SearchEngine} from '../../app/search-engine/search-engine';
import {
  buildCoreStatus,
  SearchStatusState,
  SearchStatus,
} from '../core/status/headless-core-status';

export type {SearchStatusState, SearchStatus};

/**
 * Creates a `SearchStatus` controller instance.
 *
 * @param engine - The headless engine.
 * @returns A `SearchStatus` controller instance.
 * */
export function buildSearchStatus(engine: SearchEngine): SearchStatus {
  return buildCoreStatus(engine);
}
