import flatpickr from "flatpickr";

const initFlatpickr = () => {
  flatpickr(".datepicker", {
    altInput: true,
    allowInput: true,
    minDate: "today"
  });
  // ".timepicker", {
  //   altInput: true,
  //   allowInput: true,
  //   noCalendar: true
  //   enableTime: true,
  //   dateFormat: "H:i",
  //   time_24hr: true
  // \});
}

export { initFlatpickr };
