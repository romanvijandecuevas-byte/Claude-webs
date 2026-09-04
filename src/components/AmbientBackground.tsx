export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      <div className="animate-drift-a absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="animate-drift-b absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-secondary blur-3xl opacity-70" />
      <div className="animate-drift-c absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-3xl" />
    </div>
  )
}
