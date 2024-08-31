export function formatDateAndTime(inputDate: any): string {
    const dateObj = new Date(inputDate);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();
    return formatDate(`${day}-${month}-${year}`);
  }
  
  export function formatDate(inputDate: any): string {
    const [day, month, year] = inputDate.split("-");
    return `${new Date(year, month - 1, day).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })}`;
  }
  