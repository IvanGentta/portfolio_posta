import Chip from "@/components/Chip";
import ImagesCarrousel from "@/components/ImagesCarrousel";

type Props = {
  news: any;
};

export default function NewsCard({ news }: Props) {
  const formattedDate = new Date(news.published_at).toLocaleDateString(
    "es-AR",
    {
      month: "long",
      year: "numeric",
    }
  );

  return (
    <li
      className="
      border border-primary bg-primary/10 backdrop-blur
      shadow-[1px_1px_20px_rgba(140,3,153,0.85)]
      rounded-xl p-4
      max-w-md md:h-[650px]
    "
    >
      <article className="flex flex-col h-full justify-between">
        <div>
          <h3 className="text-xs text-gray-400 capitalize underline underline-offset-2 pb-2">
            {formattedDate}
          </h3>
          <h2 className="text-xl font-bold font-titulo pl-2">{news.title}</h2>
          <div className="flex flex-wrap py-2">
            <ul className="flex flex-wrap items-center gap-2">
              {news.news_tags
                ?.filter((nt: any) => nt.tags)
                .map((nt: any) => (
                  <Chip key={nt.tags.id} name={nt.tags.name} />
                ))}
            </ul>
          </div>
          <p className="mt-2">{news.content}</p>
          {news.external_url && (
            <h3 className="pt-5">
              LINK:{" "}
              <a
                href={news.external_url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-blue-500 underline break-all"
              >
                {news.external_url}
              </a>
            </h3>
          )}
        </div>

        <div className="w-full flex-1 flex items-center justify-center mt-4">
          {news.news_images?.length > 0 && (
            <ImagesCarrousel images={news.news_images} title={news.title} />
          )}
        </div>
      </article>
    </li>
  );
}
