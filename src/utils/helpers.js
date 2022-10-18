export const handleKeyDown = (event, exitFunc, addFunc) => {
  if (event.key === "Escape") {
    exitFunc();
  } else if (event.key === "Enter") {
    addFunc();
  }
};
