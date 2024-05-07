import {buildMockSearch} from '../../test/mock-search';
import {buildMockExecuteTrigger} from '../../test/mock-trigger-execute';
import {buildMockNotifyTrigger} from '../../test/mock-trigger-notify';
import {buildMockQueryTrigger} from '../../test/mock-trigger-query';
import {buildMockRedirectTrigger} from '../../test/mock-trigger-redirect';
import {TransitiveSearchAction, executeSearch} from '../search/search-actions';
import {
  applyQueryTriggerModification,
  updateIgnoreQueryTrigger,
} from './triggers-actions';
import {triggerReducer} from './triggers-slice';
import {
  handleApplyQueryTriggerModification,
  handleFetchItemsFulfilled,
  handleFetchItemsPending,
  handleUpdateIgnoreQueryTrigger,
} from './triggers-slice-functions';
import {TriggerState, getTriggerInitialState} from './triggers-state';

describe('triggers slice', () => {
  let initialState: TriggerState;
  let initialStateCopy: TriggerState;
  let expectedState: TriggerState;
  let finalState: TriggerState;

  beforeEach(() => {
    initialState = getTriggerInitialState();
    initialStateCopy = JSON.parse(
      JSON.stringify(initialState)
    ) as typeof initialState;
  });
  it('should have initial state', () => {
    expect(triggerReducer(undefined, {type: 'randomAction'})).toEqual(
      initialState
    );
  });

  it('on #executeSearch.pending, updates state using #handleFetchItemsPending', () => {
    expectedState = handleFetchItemsPending(initialStateCopy);
    const action = executeSearch.pending('', {} as TransitiveSearchAction);
    finalState = triggerReducer(initialState, action);

    expect(finalState).toEqual(expectedState);
  });

  it('on #executeSearch.fulfilled, updates state using #handleFetchItemsFulfilled', () => {
    const searchResponse = buildMockSearch();
    searchResponse.response.triggers = [
      buildMockQueryTrigger(),
      buildMockNotifyTrigger(),
      buildMockExecuteTrigger(),
      buildMockRedirectTrigger(),
    ];
    const action = executeSearch.fulfilled(
      searchResponse,
      '',
      {} as TransitiveSearchAction
    );
    expectedState = handleFetchItemsFulfilled(
      initialStateCopy,
      action.payload.response.triggers
    );
    finalState = triggerReducer(initialState, action);

    expect(finalState).toEqual(expectedState);
  });

  it('on #applyQueryTriggerModification, updates state using #handleApplyQueryTriggerModification', () => {
    const action = applyQueryTriggerModification({
      newQuery: 'new query',
      originalQuery: 'original query',
    });
    expectedState = handleApplyQueryTriggerModification(
      initialStateCopy,
      action.payload
    );
    finalState = triggerReducer(initialState, action);

    expect(finalState).toEqual(expectedState);
  });

  it('on #updateIgnoreQueryTrigger, updates state using #handleUpdateIgnoreQueryTrigger', () => {
    const action = updateIgnoreQueryTrigger('query to ignore');
    expectedState = handleUpdateIgnoreQueryTrigger(
      initialStateCopy,
      action.payload
    );
    finalState = triggerReducer(initialState, action);

    expect(finalState).toEqual(expectedState);
  });
});
