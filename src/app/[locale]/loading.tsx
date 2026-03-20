export default function Loading() {
  return (
    <main className="container mx-auto flex min-h-[60vh] items-center justify-center px-6">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-purple-400 border-t-transparent" />
      </div>
    </main>
  );
}
