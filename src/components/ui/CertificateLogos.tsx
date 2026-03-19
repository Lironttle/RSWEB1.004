import AutoScroll from 'embla-carousel-auto-scroll';
import { Carousel, CarouselContent, CarouselItem } from './Carousel';

interface Certificate {
  id: string;
  description: string;
  image: string;
}

const certificates: Certificate[] = [
  { id: 'cert-1', description: 'Environment Agency', image: '/images/certificates/environment-agency.png' },
  { id: 'cert-2', description: 'Constructionline', image: '/images/certificates/constructionline.png' },
  { id: 'cert-3', description: 'Gas Safe', image: '/images/certificates/gas-safe.png' },
  { id: 'cert-4', description: 'NICEIC Approved Contractor', image: '/images/certificates/niceic.png' },
  { id: 'cert-5', description: 'SafeContractor', image: '/images/certificates/safe-contractor.png' },
  { id: 'cert-6', description: 'Cyber Essentials', image: '/images/certificates/cyber-essentials.png' },
  { id: 'cert-7', description: 'ICO', image: '/images/certificates/ico.png' },
  { id: 'cert-8', description: 'SSIP', image: '/images/certificates/ssip.png' },
  { id: 'cert-9', description: 'National Framework Partnership', image: '/images/certificates/nfp.png' },
];

export default function CertificateLogos() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-dark">
          Trusted & Accredited
        </h2>
        <p className="text-muted mt-2">Industry-recognised certifications and accreditations</p>
      </div>
      <div className="pt-10 md:pt-12">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          >
            <CarouselContent className="ml-0">
              {certificates.map((cert) => (
                <CarouselItem
                  key={cert.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="mx-8 flex shrink-0 items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.description}
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
