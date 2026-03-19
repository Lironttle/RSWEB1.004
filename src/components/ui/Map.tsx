import { cn } from '../../lib/utils';

type MapProps = {
  latitude: number;
  longitude: number;
  zoom?: number;
  className?: string;
  title?: string;
};

function Map({ latitude, longitude, zoom = 16, className, title = 'Location' }: MapProps) {
  const bbox = 0.005;
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - bbox},${latitude - bbox},${longitude + bbox},${latitude + bbox}&layer=mapnik&marker=${latitude},${longitude}`;

  return (
    <div className={cn('relative w-full h-full min-h-[300px] rounded-lg overflow-hidden', className)}>
      <iframe
        title={title}
        src={mapUrl}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export { Map };
