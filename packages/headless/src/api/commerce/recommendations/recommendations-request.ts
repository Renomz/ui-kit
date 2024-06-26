import {SlotIdParam} from '../commerce-api-params';
import {BaseCommerceAPIRequest, baseRequest} from '../common/request';

export type CommerceRecommendationsRequest = BaseCommerceAPIRequest &
  SlotIdParam;
export const buildRecommendationsRequest = (
  req: CommerceRecommendationsRequest,
  path: string
) => {
  return {
    ...baseRequest(req, path),
    requestParams: prepareRecommendationsRequestParams(req),
  };
};

const prepareRecommendationsRequestParams = (
  req: CommerceRecommendationsRequest
) => {
  const {
    slotId,
    trackingId,
    clientId,
    context,
    language,
    country,
    currency,
    page,
  } = req;
  return {
    slotId,
    trackingId,
    clientId,
    context,
    language,
    country,
    currency,
    page,
  };
};
