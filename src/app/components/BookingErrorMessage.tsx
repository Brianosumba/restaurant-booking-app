type BookingErrorMessageProps = {
  message: string;
};

export default function BookingErrorMessage({
  message,
}: BookingErrorMessageProps) {
  return (
    <p className="rounded-xl border border-[#F1D8C8] bg-[#FFF8F1] px-4 py-3 text-sm font-medium text-[#B65A3C]">
      {message}
    </p>
  );
}
