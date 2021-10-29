import Route from '@ember/routing/route';
import { csv } from 'd3-fetch';

const GOOGLE_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vS_1zhA83J62qN3aVpKKTYmmXSdJ6AWWqXAlRC7T-eUtwBnbS_4RhugdIH5kz3Gw8NN8ZBkH5EnZJZO/pub?gid=0&single=true&output=csv';

export default class ApplicationRoute extends Route {
  model() {
    return csv(GOOGLE_SHEET_URL);
  }
}
