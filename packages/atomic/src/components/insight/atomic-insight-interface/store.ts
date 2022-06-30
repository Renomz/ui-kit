import {
  AtomicCommonStoreData,
  createAtomicCommonStore,
} from '@components/common/interface/store';

export interface AtomicSvgInsightStoreData extends AtomicCommonStoreData {}

export function createAtomicSvcInsightStore() {
  return createAtomicCommonStore<AtomicSvgInsightStoreData>({
    loadingFlags: [],
    iconAssetsPath: '',
  });
}
