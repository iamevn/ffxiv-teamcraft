import { TimeUtils } from './time.utils';

describe('TimeUtils', () => {

  it('Should find proper intersection for ranges on the same day', () => {
    expect(TimeUtils.getIntersection([12, 14], [8, 16])).toEqual([12, 14]);
    expect(TimeUtils.getIntersection([0, 2], [0, 8])).toEqual([0, 2]);
    expect(TimeUtils.getIntersection([0, 8], [6, 16])).toEqual([6, 8]);
  });

  it('Should return null when no intersections are found', () => {
    expect(TimeUtils.getIntersection([12, 14], [16, 18])).toBeNull();
    expect(TimeUtils.getIntersection([12, 14], [14, 16])).toBeNull();
    expect(TimeUtils.getIntersection([12, 14], [8, 12])).toBeNull();
  });

  it('Should return intersection for complex intervals', () => {
    expect(TimeUtils.getIntersection([22, 4], [0, 8])).toEqual([0, 4]);
    expect(TimeUtils.getIntersection([22, 0], [16, 0])).toEqual([22, 0]);
    expect(TimeUtils.getIntersection([22, 4], [16, 0])).toEqual([22, 0]);
    expect(TimeUtils.getIntersection([22, 4], [16, 8])).toEqual([22, 4]);
    expect(TimeUtils.getIntersection([18, 2], [16, 8])).toEqual([18, 2]);
  });
});
