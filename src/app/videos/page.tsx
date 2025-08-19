import Gallery from '@/components/Gallery';
import { videos } from '@/data/videos';

export default function VideosPage() {
  return <Gallery data={videos} />;
}
