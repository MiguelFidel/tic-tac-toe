import Swal from "sweetalert2";


export const Alert = Swal.mixin({
  title: "Draw",
  text: "",
  width: 200,
  allowOutsideClick: false,
  showDenyButton: false,
  confirmButtonColor: "#34A4FF",
  confirmButtonText: "Play Again!",
});
