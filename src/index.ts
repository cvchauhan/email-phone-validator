// index.ts
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

export function isValidPhoneNumber(phoneNumber: string): boolean {
    // Better regex for various phone formats
    const phoneRegex = /^(?:\+?\d{1,3})?[-.\s]?(\(?\d{2,4}\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return phoneRegex.test(phoneNumber);
}
