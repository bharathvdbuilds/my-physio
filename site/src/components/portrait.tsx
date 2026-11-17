import Image from "next/image";
import { hasImage, site } from "@/lib/site";

export function Portrait({
  image,
  priority = false,
}: {
  image: { src: string; alt: string };
  priority?: boolean;
}) {
  if (hasImage(image.src)) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 460px, 100vw"
        className="object-cover"
      />
    );
  }

  return (
    <div className="flex h-full flex-col justify-between p-6 sm:p-8">
      <p className="self-end text-right text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-ink">
        Portrait placeholder
      </p>
      <div className="max-w-[16rem]">
        <p className="font-display text-6xl tracking-[-0.04em] text-navy" aria-hidden="true">
          VV
        </p>
        <p className="mt-3 text-sm leading-6 text-mist">
          Photograph to be added. This panel is not a picture of {site.doctorSignoff}.
        </p>
      </div>
      <div className="max-w-[58%]">
        <p className="font-display text-lg text-navy">{site.doctorName}</p>
        <p className="text-sm leading-6 text-mist">{site.professionalTitle}</p>
      </div>
    </div>
  );
}
