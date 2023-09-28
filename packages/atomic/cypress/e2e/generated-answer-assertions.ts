import {AnalyticsTracker} from '../utils/analyticsUtils';
import {should} from './common-assertions';

export function assertLogOpenGeneratedAnswerSource(log: boolean) {
  it(`${should(log)} log a openGeneratedAnswerSource click event`, () => {
    if (log) {
      cy.expectCustomEvent('generatedAnswer', 'openGeneratedAnswerSource');
    } else {
      cy.wait(50);
      cy.wrap(AnalyticsTracker)
        .invoke('getLastCustomEvent')
        .should('not.exist');
    }
  });
}