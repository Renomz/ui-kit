import {buildMockRaw, buildMockResult} from '../../test';
import {
  MockInsightEngine,
  buildMockInsightEngine,
} from '../../test/mock-engine';
import {buildMockInsightState} from '../../test/mock-insight-state';
import {buildMockSearchState} from '../../test/mock-search-state';
import {
  logShowMoreFoldedResults,
  logShowLessFoldedResults,
} from './folding-insight-analytics-actions';
import {getFoldingInitialState} from './folding-state';

const mockLogShowMoreFoldedResults = jest.fn();
const mockLogShowLessFoldedResults = jest.fn();

jest.mock('coveo.analytics', () => {
  const mockCoveoInsightClient = jest.fn(() => ({
    disable: jest.fn(),
    logShowMoreFoldedResults: mockLogShowMoreFoldedResults,
    logShowLessFoldedResults: mockLogShowLessFoldedResults,
  }));

  return {
    CoveoInsightClient: mockCoveoInsightClient,
    history: {HistoryStore: jest.fn()},
  };
});

const examplePermanentId = 'example permanent id';

const expectedDocumentInfo = {
  queryPipeline: '',
  documentUri: 'example documentUri',
  documentUriHash: 'example documentUriHash',
  collectionName: 'example collectionName',
  sourceName: 'example sourceName',
  documentPosition: 1,
  documentTitle: 'example documentTitle',
  documentUrl: 'example documentUrl',
  rankingModifier: 'example rankingModifier',
  documentAuthor: 'unknown',
};

const resultParams = {
  title: 'example documentTitle',
  uri: 'example documentUri',
  printableUri: 'printable-uri',
  clickUri: 'example documentUrl',
  uniqueId: 'unique-id',
  excerpt: 'exceprt',
  firstSentences: 'first-sentences',
  flags: 'flags',
  rankingModifier: 'example rankingModifier',
  raw: buildMockRaw({
    urihash: 'example documentUriHash',
    source: 'example sourceName',
    collection: 'example collectionName',
    permanentid: examplePermanentId,
  }),
};
const exampleResult = buildMockResult(resultParams);

const exampleSubject = 'example subject';
const exampleDescription = 'example description';
const exampleCaseId = '1234';
const exampleCaseNumber = '5678';

const expectedCaseContext = {
  caseContext: {
    Case_Subject: exampleSubject,
    Case_Description: exampleDescription,
  },
  caseId: exampleCaseId,
  caseNumber: exampleCaseNumber,
};

const expectedDocumentIdentifier = {
  contentIDKey: 'permanentid',
  contentIDValue: examplePermanentId,
};

describe('the analytics related to the folding feature in the insight use case', () => {
  let engine: MockInsightEngine;

  beforeEach(() => {
    engine = buildMockInsightEngine({
      state: buildMockInsightState({
        insightCaseContext: {
          caseContext: {
            Case_Subject: exampleSubject,
            Case_Description: exampleDescription,
          },
          caseId: exampleCaseId,
          caseNumber: exampleCaseNumber,
        },
        folding: {
          ...getFoldingInitialState(),
        },
        search: buildMockSearchState({
          results: [exampleResult],
        }),
      }),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should log #logShowMoreFoldedResults with the result payload', async () => {
    await engine.dispatch(logShowMoreFoldedResults(exampleResult));

    const mockToUse = mockLogShowMoreFoldedResults;
    expect(mockToUse).toBeCalledTimes(1);
    expect(mockToUse.mock.calls[0][0]).toStrictEqual(expectedDocumentInfo);
    expect(mockToUse.mock.calls[0][1]).toStrictEqual(
      expectedDocumentIdentifier
    );
    expect(mockToUse.mock.calls[0][2]).toStrictEqual(expectedCaseContext);
  });

  it('should log #logShowLessFoldedResults', async () => {
    await engine.dispatch(logShowLessFoldedResults());

    const mockToUse = mockLogShowLessFoldedResults;
    expect(mockToUse).toBeCalledTimes(1);
    expect(mockToUse.mock.calls[0][0]).toStrictEqual(expectedCaseContext);
  });
});