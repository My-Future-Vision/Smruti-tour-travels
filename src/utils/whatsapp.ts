export const PHONE_NUMBER = '918596065789';

export const getWhatsAppLink = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
};
