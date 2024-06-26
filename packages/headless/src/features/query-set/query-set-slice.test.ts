import {buildMockSearch} from '../../test/mock-search';
import {restoreSearchParameters as commerceRestoreSearchParameters} from '../commerce/search-parameters/search-parameter-actions';
import {change} from '../history/history-actions';
import {getHistoryInitialState} from '../history/history-state';
import {selectQuerySuggestion} from '../query-suggest/query-suggest-actions';
import {logSearchboxSubmit} from '../query/query-analytics-actions';
import {restoreSearchParameters} from '../search-parameters/search-parameter-actions';
import {executeSearch} from '../search/search-actions';
import {registerQuerySetQuery, updateQuerySetQuery} from './query-set-actions';
import {querySetReducer} from './query-set-slice';
import {getQuerySetInitialState, QuerySetState} from './query-set-state';

describe('querySet slice', () => {
  let state: QuerySetState;

  function registerQueryWithId(id: string, query = '') {
    const action = registerQuerySetQuery({id, query});
    state = querySetReducer(state, action);
  }

  beforeEach(() => {
    state = getQuerySetInitialState();
  });

  it('initializes the reducer with the initial state', () => {
    const finalState = querySetReducer(undefined, {type: ''});
    expect(finalState).toEqual(getQuerySetInitialState());
  });

  it('registers a query', () => {
    const id = '1';
    const query = 'query';

    const action = registerQuerySetQuery({id, query});
    const finalState = querySetReducer(state, action);

    expect(finalState[id]).toBe(query);
  });

  it('does not register a second query on the same id', () => {
    const id = '1';
    const query = 'query';

    registerQueryWithId(id);
    const action = registerQuerySetQuery({id, query});
    const finalState = querySetReducer(state, action);

    expect(finalState[id]).toBe(state[id]);
  });

  it('does not update the query if the id does not exist', () => {
    const id = '1';
    const query = 'query';
    const action = updateQuerySetQuery({id, query});

    const finalState = querySetReducer(state, action);
    expect(finalState[id]).toBe(undefined);
  });

  it('updates the query if the id exists', () => {
    const id = '1';
    const query = 'query';

    registerQueryWithId(id);
    const action = updateQuerySetQuery({id, query});
    const finalState = querySetReducer(state, action);

    expect(finalState[id]).toBe(query);
  });

  it(`when a query suggestion is selected,
  it updates the query if the id exists`, () => {
    const id = '1';
    const query = 'query';

    registerQueryWithId(id);
    const action = selectQuerySuggestion({id, expression: query});
    const finalState = querySetReducer(state, action);

    expect(finalState[id]).toBe(query);
  });

  it(`when a query suggestion is selected,
  it does not update the query if the id does not exist`, () => {
    const id = '1';

    const action = selectQuerySuggestion({id, expression: 'query'});
    const finalState = querySetReducer(state, action);

    expect(finalState[id]).toBe(undefined);
  });

  it('sets all queries to queryExecuted on executeSearch.fulfilled', () => {
    registerQueryWithId('foo');
    registerQueryWithId('bar');

    const expectedQuerySet = {foo: 'world', bar: 'world'};
    const searchState = buildMockSearch({queryExecuted: 'world'});
    const nextState = querySetReducer(
      state,
      executeSearch.fulfilled(searchState, '', {legacy: logSearchboxSubmit()})
    );
    expect(nextState).toEqual(expectedQuerySet);
  });

  it.each([
    {action: restoreSearchParameters},
    {action: commerceRestoreSearchParameters},
  ])('sets all queries to q on #$action, when "q" defined', ({action}) => {
    registerQueryWithId('foo');
    registerQueryWithId('bar');

    const expectedQuerySet = {foo: 'world', bar: 'world'};
    const nextState = querySetReducer(state, action({q: 'world'}));
    expect(nextState).toEqual(expectedQuerySet);
  });

  it.each([
    {action: restoreSearchParameters},
    {action: commerceRestoreSearchParameters},
  ])('does not modify query on #$action, when "q" not defined', ({action}) => {
    registerQueryWithId('foo', 'foo');
    registerQueryWithId('bar', 'bar');

    const expectedQuerySet = {foo: 'foo', bar: 'bar'};
    const nextState = querySetReducer(state, action({}));
    expect(nextState).toEqual(expectedQuerySet);
  });

  it('allows to restore a query set on history change', () => {
    registerQueryWithId('foo');
    registerQueryWithId('hello');

    const expectedQuerySet = {foo: 'bar', hello: 'world'};
    const historyChange = {
      ...getHistoryInitialState(),
      querySet: expectedQuerySet,
    };

    const nextState = querySetReducer(
      state,
      change.fulfilled(historyChange, '')
    );

    expect(nextState).toEqual(expectedQuerySet);
  });
});
