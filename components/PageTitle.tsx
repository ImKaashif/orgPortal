export default function PageTitle({
  children,
  title,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex items-center justify-between space-y-2">
      <h2 className="2xl:text-3xl text-2xl font-bold tracking-tight">
        {title}
      </h2>
      {children}
    </div>
  );
}