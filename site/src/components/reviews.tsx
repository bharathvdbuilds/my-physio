import { actionClass, Eyebrow, Shell } from "@/components/ui";
import { ratingVerified, site } from "@/lib/site";

export function Reviews() {
  const verified = ratingVerified();
  const hasRating = site.googleRating != null && site.googleReviewCount != null;

  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="reviews-title">
      <Shell className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <Eyebrow>{verified ? "Google rating" : "Reported rating"}</Eyebrow>
          {hasRating ? (
            <>
              <p className="font-display text-7xl tracking-[-0.04em] text-navy sm:text-8xl">
                {site.googleRating?.toFixed(1)}
              </p>
              <p className="mt-3 text-lg text-mist">{site.googleReviewCount} reviews</p>
            </>
          ) : (
            <p className="text-lg text-mist">A public rating has not been added.</p>
          )}
        </div>
        <div>
          <h2 id="reviews-title" className="text-[2rem] leading-[1.12] text-navy sm:text-4xl">
            Reviews
          </h2>
          <p className="mt-4 max-w-md text-[17px] leading-8 text-mist">{site.testimonialsNote}</p>
          {!verified && hasRating ? (
            <p className="mt-4 max-w-md text-sm leading-6 text-mist">
              The {site.googleRating?.toFixed(1)} figure from {site.googleReviewCount} reviews is reported only.
            </p>
          ) : null}
          {site.googleBusinessProfileURL ? (
            <a
              href={site.googleBusinessProfileURL}
              target="_blank"
              rel="noopener noreferrer"
              className={actionClass("outline", "mt-8")}
            >
              View Google Reviews
            </a>
          ) : null}
        </div>
      </Shell>
    </section>
  );
}
