import { h, Component } from 'preact';
import Pinboard from '@haroenv/react-pinboard';
import { connectInfiniteHits } from 'react-instantsearch/connectors';

import { SingleHit, HighlightMatch, OpenDetail, SnippetMatch } from '../App';
import MainDetailHit from './MainDetailHit';
import MainTranscriptHit from './MainTranscriptHit';
import { OnRefine } from './Tags';

export interface Transcript {
  objectID: string;
  start: number;
  text: string;
  _highlightResult: {
    text: HighlightMatch;
  };
  _snippetResult: {
    text: SnippetMatch,
  },
}
export interface TranscriptHit extends SingleHit {
  transcriptions: { [objectID: string]: Transcript };
}

function hasTranscript(hit: TranscriptHit | SingleHit): hit is TranscriptHit {
  return (
    (hit as TranscriptHit).transcriptions !== undefined &&
    Object.keys((hit as TranscriptHit).transcriptions).length > 0
  );
}

function transcriptIfRelevant(
  hit: SingleHit | TranscriptHit
): Transcript | null {
  try {
    if (hit._highlightResult.text.matchLevel !== 'none') {
      const { objectID, start, text, id } = hit;
      return {
        objectID,
        start,
        text,
        _highlightResult: {
          text: hit._highlightResult.text,
        },
        _snippetResult: {
          text: hit._snippetResult.text,
        },
      };
    }
    return null;
  } catch (_) {
    return null;
  }
}

function transformToTranscripts(hits: SingleHit[]) {
  return hits.reduce<(SingleHit | TranscriptHit)[]>((acc, hit) => {
    if (hit._distinctSeqID === 0 || typeof hit._distinctSeqID === 'undefined') {
      // first or no distinct, simply push
      const hitTranscriptions = transcriptIfRelevant(hit);
      return [
        ...acc,
        {
          ...hit,
          transcriptions: {
            ...hitTranscriptions
              ? { [hitTranscriptions.objectID]: hitTranscriptions }
              : {},
          },
        },
      ];
    } else if (hit._distinctSeqID > 0) {
      const previous = acc[acc.length - 1];
      const firstHits = acc.splice(0, acc.length - 1);

      const lastTranscriptions = {
        text: hit.text,
        _highlightResult: {
          text: hit._highlightResult.text,
        },
        _snippetResult: {
          text: hit._snippetResult.text,
        },
      };

      const previousTranscriptions = transcriptIfRelevant(previous);
      const hitTranscriptions = transcriptIfRelevant(hit);
      return [
        // all of the hits minus the last one
        ...firstHits,
        {
          // the properties of the last one
          ...previous,
          transcriptions: {
            ...hasTranscript(previous) ? previous.transcriptions : {},
            ...previousTranscriptions
              ? { [previousTranscriptions.objectID]: previousTranscriptions }
              : {},
            ...hitTranscriptions
              ? { [hitTranscriptions.objectID]: hitTranscriptions }
              : {},
          },
        },
      ];
    }
    return [...acc, hit];
  }, []);
}

interface InfiniteHit {
  hits: SingleHit[];
  hasMore: boolean;
  refine(): void;
}
interface Props extends InfiniteHit {
  openDetail: OpenDetail;
  onRefine: OnRefine;
}
class Hits extends Component<Props, null> {
  loadMore = () => {
    console.log('click');
    this.props.refine();
  };

  render() {
    const { hasMore, hits: _originalHits, onRefine, openDetail } = this.props;
    const hits = transformToTranscripts(_originalHits);

    return (
      <div>
        {hits &&
          hits.length > 0 && (
            <Pinboard
              cols={[
                { media: '(min-width: 1000px)', cols: 4 },
                { media: '(min-width: 800px)', cols: 3 },
                { media: '(min-width: 500px)', cols: 2 },
                { media: '', cols: 1 },
              ]}
            >
              {hits.map(
                (hit, index) =>
                  hasTranscript(hit) ? (
                    <MainTranscriptHit
                      key={hit.objectID}
                      hit={hit}
                      index={index}
                      onRefine={onRefine}
                      openDetail={openDetail}
                    />
                  ) : (
                      <MainDetailHit
                        key={hit.objectID}
                        hit={hit}
                        index={index}
                        onRefine={onRefine}
                        openDetail={openDetail}
                      />
                    )
              )}
            </Pinboard>
          )}
        {/* todo: doesn't work yet because pinboard uses the children */
        /*
          <button onClick={this.loadMore} disabled={!hasMore}>
            Load more
          </button>
          */}
      </div>
    );
  }
}

export default connectInfiniteHits(Hits);
