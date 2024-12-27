export function MetricCard({
  icon: Icon,
  label,
  value,
  className
}) {
  return (
    (<div
      className={`flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm ${className}`}>
      <div className="rounded-full p-2">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>)
  );
}

