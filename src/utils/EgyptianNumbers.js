export const isValidEgyptianPhoneNumber = phoneNumber => {
  // Regular expression to match Egyptian phone number format
  const egyptianNumberRegex = /^\+20(10|12|15|11)\d{8}$/;
  // Check if the phone number matches the format
  return egyptianNumberRegex.test(phoneNumber);
};
