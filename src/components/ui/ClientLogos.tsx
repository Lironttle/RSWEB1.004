import AutoScroll from 'embla-carousel-auto-scroll';
import { Carousel, CarouselContent, CarouselItem } from './Carousel';

interface Logo {
  id: string;
  description: string;
  image: string;
}

const logos: Logo[] = [
  {
    id: 'logo-1',
    description: 'L&Q',
    image: '/images/clients/lq.png',
  },
  {
    id: 'logo-2',
    description: 'Peabody',
    image: '/images/clients/peabody.png',
  },
  {
    id: 'logo-3',
    description: 'Newham London',
    image: '/images/clients/newham-london.png',
  },
  {
    id: 'logo-4',
    description: 'Wates',
    image: '/images/clients/wates.png',
  },
  {
    id: 'logo-5',
    description: 'Interserve',
    image: '/images/clients/interserve.png',
  },
  {
    id: 'logo-6',
    description: 'Sarah Bonnell',
    image: '/images/clients/sarah-bonnell.jpg',
  },
  {
    id: 'logo-7',
    description: 'Southwark Council',
    image: '/images/clients/southwark-council.jpg',
  },
  {
    id: 'logo-8',
    description: 'Havering',
    image: '/images/clients/havering.jpg',
  },
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-dark">
          Our Clients
        </h2>
        <p className="text-muted mt-2">Trusted by leading organisations across London</p>
      </div>
      <div className="pt-10 md:pt-12">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="mx-8 flex shrink-0 items-center justify-center">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className="h-20 w-auto max-w-[160px] object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
