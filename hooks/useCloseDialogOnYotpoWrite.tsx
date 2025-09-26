// NOT IN USE, WILL DELETE LATER

// "use client";

// import { useEffect } from "react";

// export function useCloseDialogOnYotpoWrite(
//   open: boolean,
//   setOpen: (value: boolean) => void
// ) {
//   useEffect(() => {
//     if (!open) return;

//     const interval = setInterval(() => {
//       const writeButton = document.querySelector<HTMLButtonElement>(
//         ".yotpo-review-button" 
//       );
//       if (writeButton) {
//         writeButton.addEventListener("click", () => {
//           setOpen(false); 
//         });
//         clearInterval(interval); 
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [open, setOpen]);
// }
