import loadingGif from '../assets/images/kuru.gif';
import { TwinklingStar } from './twinkling-star/TwinklingStart';

const LoadingScreen = ({ slideUp }: { slideUp: boolean }) => {
  return (
    <div
      className={`
        fixed inset-0 bg-black flex items-center justify-center z-[9999]
        transition-transform duration-1000 ease-in-out
        ${slideUp ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <TwinklingStar />
      <img
        src={loadingGif}
        alt="Loading..."
        className="w-32 h-32 animate-pulse"
      />
    </div>
  );
};

export default LoadingScreen;
