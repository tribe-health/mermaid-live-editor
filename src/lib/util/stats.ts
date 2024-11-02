import { browser } from '$app/environment';
import type PlausibleInstance from 'plausible-tracker';
import { env } from './env';
export let plausible: ReturnType<typeof PlausibleInstance> | undefined;

export const initAnalytics = async (): Promise<void> => {
  if (browser && !plausible) {
    try {
      const { default: Plausible } = await import('plausible-tracker');
      plausible = Plausible({
        domain: env.domain,
        hashMode: false,
        // All tracked stats are public and available at https://p.mermaid.live/mermaid.live
        apiHost: env.analyticsUrl
      });
    } catch (error) {
      console.log(error);
      console.info('Analytics blocked ;)');
    }
  }
};

export const detectType = (text: string): string | undefined => {
  const possibleDiagramTypes = [
    'classDiagram',
    'erDiagram',
    'flowChart',
    'gantt',
    'gitGraph',
    'graph',
    'journey',
    'pie',
    'stateDiagram',
    'quadrantChart',
    'mindmap'
  ];
  const firstLine = text
    .replaceAll(/^\s*%%.*\n/g, '\n')
    .trimStart()
    .split(' ')[0]
    .toLowerCase();
  const detectedDiagram = possibleDiagramTypes.find((d) => firstLine.includes(d.toLowerCase()));
  return detectedDiagram;
};

export const countLines = (code: string): number => {
  return (code.match(/\n/g)?.length ?? 0) + 1;
};

export const saveStatistics = ({
  code,
  renderTime,
  isRough
}: {
  code: string;
  renderTime: number;
  isRough: boolean;
}): void => {
  const graphType = detectType(code);
  if (!graphType) {
    return;
  }
  const length = countLines(code);
  const lengthBucket = getBucket(length);
  const renderTimeMsBucket = getBucket(renderTime);
  logEvent('render', { graphType, length, lengthBucket, renderTimeMsBucket, isRough });
};

const getBucket = (length: number): string => {
  return length < 10
    ? '0-10'
    : length < 25
      ? '10-25'
      : length < 50
        ? '25-50'
        : length < 100
          ? '50-100'
          : length < 200
            ? '100-200'
            : length < 500
              ? '200-500'
              : length < 700
                ? '500-700'
                : length < 1000
                  ? '700-1000'
                  : length < 1500
                    ? '1000-1500'
                    : length < 2500
                      ? '1500-2500'
                      : length < 4500
                        ? '2500-4500'
                        : length < 7000
                          ? '4500-7000'
                          : length < 10_000
                            ? '7000-10000'
                            : '10000+';
};

const minutesToMilliSeconds = (minutes: number): number => {
  return minutes * 60_000;
};

const defaultDelay = minutesToMilliSeconds(1);
const delaysPerEvent = {
  render: minutesToMilliSeconds(5),
  panZoom: minutesToMilliSeconds(10),
  copyClipboard: defaultDelay,
  download: defaultDelay,
  copyMarkdown: defaultDelay,
  loadGist: defaultDelay,
  loadSampleDiagram: defaultDelay,
  renderDiagram: defaultDelay,
  history: defaultDelay,
  migration: defaultDelay,
  themeChange: defaultDelay,
  bannerClick: defaultDelay,
  version: defaultDelay
};
export type AnalyticsEvent = keyof typeof delaysPerEvent;
const timeouts: Map<string, number> = new Map<string, number>();
// manual debounce to reduce the number of events sent to analytics
export const logEvent = (
  name: AnalyticsEvent,
  data?: Record<string, string | number | boolean>
): void => {
  if (!plausible) {
    return;
  }
  const key = data ? JSON.stringify({ name, data }) : name;
  if (timeouts.has(key)) {
    clearTimeout(timeouts.get(key));
  } else {
    plausible.trackEvent(
      name,
      { props: data },
      { url: window.location.origin + window.location.pathname }
    );
  }
  timeouts.set(
    key,
    window.setTimeout(() => timeouts.delete(key), delaysPerEvent[name])
  );
};
