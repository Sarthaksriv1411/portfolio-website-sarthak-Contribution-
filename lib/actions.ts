'use server';

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export async function sendContactEmail(data: ContactFormData) {
    try {
        // Validate input
        if (!data.name || !data.email || !data.message) {
            return {
                success: false,
                error: 'All fields are required',
            };
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            return {
                success: false,
                error: 'Invalid email address',
            };
        }

        // Send email using Web3Forms (FREE - no API key needed in backend)
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                access_key: process.env.WEB3FORMS_ACCESS_KEY,
                name: data.name,
                email: data.email,
                message: data.message,
                subject: `Portfolio Contact: Message from ${data.name}`,
                from_name: 'Portfolio Contact Form',
                replyto: data.email,
            }),
        });

        const result = await response.json();

        if (result.success) {
            return {
                success: true,
                message: 'Email sent successfully!',
            };
        } else {
            return {
                success: false,
                error: 'Failed to send email. Please try again.',
            };
        }
    } catch (error) {
        console.error('Email send error:', error);
        return {
            success: false,
            error: 'Failed to send email. Please try again.',
        };
    }
}
