"use client";

type Props = {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
};

export default function PaginationControls({ currentPage, pageSize, totalItems, onPageChange }: Props) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;

  const pagesToShow = 5;
  let start = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  let end = Math.min(totalPages, start + pagesToShow - 1);
  if (end - start < pagesToShow - 1) start = Math.max(1, end - pagesToShow + 1);

  return (
    <nav className="flex items-center justify-center gap-3 py-8">
      
      <button onClick={() => canPrev && onPageChange(currentPage - 1)} disabled={!canPrev} className="px-3 py-1 bg-black rounded border border-yellow-400">
        ‹ Anterior
      </button>

      <div className="flex gap-2">
        {Array.from({ length: end - start + 1 }, (_, i) => start + i).map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`px-3 py-1  rounded border ${p === currentPage ? "bg-yellow-400 text-black" : "bg-black border-yellow-400"}`}
          >
            {p}
          </button>
        ))}
      </div>

      <button onClick={() => canNext && onPageChange(currentPage + 1)} disabled={!canNext} className="px-3 py-1 bg-black rounded border border-yellow-400">
        Seguinte ›
      </button>
      
    </nav>
  );
}
