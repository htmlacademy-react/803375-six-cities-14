import {MAX_STARS_COUNT, PERCENT_MAX} from '../const';

export function getStarRating (rating: number) {
  return `${rating / MAX_STARS_COUNT * PERCENT_MAX}%`;
}
