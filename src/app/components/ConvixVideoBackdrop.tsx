import { CONVIX_BG_VIDEO_URL, CONVIX_VIDEO_POSTER } from '../constants/convixMedia';

const LEGACY_INLINE_VIDEO_PROPS = {
  'webkit-playsinline': 'true',
  'x5-playsinline': 'true',
} as Record<string, string>;

type ConvixVideoBackdropProps = {
  /** Extra class on the video tag (e.g. opacity). */
  videoClassName?: string;
};

/** Muted looping background video + light overlay. Parent must be `relative overflow-hidden`. */
export default function ConvixVideoBackdrop({ videoClassName = '' }: ConvixVideoBackdropProps) {
  return (
    <>
      <video
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${videoClassName}`.trim()}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disableRemotePlayback
        poster={CONVIX_VIDEO_POSTER}
        src={CONVIX_BG_VIDEO_URL}
        {...LEGACY_INLINE_VIDEO_PROPS}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-white/10" aria-hidden />
    </>
  );
}
