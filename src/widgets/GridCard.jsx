export default function GridCard({ image, title, description, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        bg-dark-card border border-dark-grid
        flex flex-col
        hover:shadow-lg hover:-translate-y-1 transition
        cursor-pointer
        group
      "
      style={{ minWidth: 0 }}
    >
      <div className="aspect-[16/9] w-full bg-placeholder overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition"
        />
      </div>
      <div className="flex flex-col p-4 flex-1">
        <h3 className="font-semibold text-lg mb-1 text-dark-text">{title}</h3>
        <p className="text-dark-text text-sm flex-1 whitespace-pre-line">{description}</p>
      </div>
    </a>
  );
}
