import Swal from "sweetalert2";

export const PlayerWin = Swal.mixin({
  title: "You Win!",
  text: "",
  allowOutsideClick: false,
  showDenyButton: false,
  confirmButtonColor: "#34A4FF",
  confirmButtonText: "Play Again!",
});


export const Draw = Swal.mixin({
  title: "Draw",
  text: "",
  allowOutsideClick: false,
  showDenyButton: false,
  confirmButtonColor: "#34A4FF",
  confirmButtonText: "Play Again!",
});
