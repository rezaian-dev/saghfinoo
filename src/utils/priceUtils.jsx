export const formatPrice = (amount) => {
    if (+amount % 1_000_000 !== 0) {
      return `${amount.toLocaleString("fa-IR")} تومان`;
    } else if (amount >= 1_000_000_000) {
      return `${(amount / 1_000_000_000).toLocaleString("fa-IR")} میلیارد تومان`;
    } else if (amount >= 1_000_000) {
      return `${(amount / 1_000_000).toLocaleString("fa-IR")} میلیون تومان`;
    }
    return `${amount.toLocaleString("fa-IR")} تومان`;
  };
  
  export const convertToPersianNumber = (number) => {
    return String(number).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
  }
