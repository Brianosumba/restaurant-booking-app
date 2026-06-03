type BookingConfirmationProps = {
  onReset: () => void;
};

export default function BookingConfirmation({
  onReset,
}: BookingConfirmationProps) {
  return (
    <div className="rounded-2xl border border-[#F1D8C8] bg-[#FFF8F1] p-5 text-center">
      <h3 className="text-xl font-bold text-[#3A2418]">Booking confirmed!</h3>
      <p className="mt-2 text-sm leading-6 text-[#5C4033]">
        Asante na karibu! Your table has been booked.
      </p>
      <button
        type="button"
        className="mt-4 rounded-full bg-[#B65A3C] px-5 py-3 text-sm font-semibold text-white hover:bg-[#A14A2A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2"
        onClick={onReset}
      >
        Make another booking
      </button>
    </div>
  );
}
