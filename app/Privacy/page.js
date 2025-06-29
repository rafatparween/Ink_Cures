
'use client';

export const PrivacyPolicy = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto p-8 space-y-8 bg-gray-100 text-gray-800">
                <h1 className="text-4xl font-bold text-gray-900 text-center">Privacy & Policy</h1>

                {/* 🔒 Privacy Policy Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-900">🔒 Privacy Policy</h2>
                    <p className="text-lg">
                        At <strong> Ink Cures </strong>, we take your privacy seriously. Our website is designed to offer helpful content without collecting unnecessary personal data.
                    </p>
                    <p className="text-lg font-medium">What We Collect:</p>
                    <ul className="list-disc list-inside text-lg space-y-2">
                        <li>Anonymous analytics data (e.g., browser type, device type, general location) via tools like Google Analytics.</li>
                        <li>Optional information via contact forms or comments, if available.</li>
                    </ul>
                    <p className="text-lg font-medium">What We Don’t Collect:</p>
                    <ul className="list-disc list-inside text-lg space-y-2">
                        <li>We do not request or store payment details, sensitive personal information, or login credentials.</li>
                        <li>We do not share or sell user data to third parties.</li>
                    </ul>
                    <p className="text-lg">
                        Any data collected is used solely to enhance website performance and user experience. We follow standard security practices to protect any information submitted voluntarily by users.
                    </p>
                    <p className="text-lg">
                        If you have privacy concerns or questions, feel free to contact us at:{" "}
                        <a href="mailto:support@hewlettprinterssolution.com" className="text-blue-500 hover:underline">
                            support@hewlettprinterssolution.online
                        </a>
                    </p>
                    <p className="text-lg">
                        <strong>Please note:</strong> This website may include external links for reference. We are not responsible for the content or privacy practices of third-party sites.
                    </p>
                </section>

                {/* Original Privacy Sections */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-900">Who We Are</h2>
                    <p className="text-lg">
                        We at <strong> Ink Cures </strong>, located at the World Wide Web as{" "}
                        <a href="http://hewlettprintersolution.online" className="text-blue-500 hover:underline">
                            www.hewlettprintersolution.online
                        </a>, value your right to privacy. As a visitor to our website, we understand the importance of your privacy and strive to ensure that your information is protected.
                        We may ask for personal information such as your name, email address, or preferences when you access specific areas of our website or subscribe to our newsletter.
                        Rest assured, your data is securely managed to deliver content and services tailored to your choices.
                    </p>
                    <p className="text-lg">
                        If you provide us with personal details like your name, email, address, or phone number and do not opt-out, we may use this information to contact you for better understanding your requirements.
                        You can opt out of this communication at any time and opt back in whenever you prefer.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900">What Personal Data We Collect & Why</h2>
                    <p className="text-lg">
                        We generally do not collect personal information while you browse our website. Your browser, however, automatically informs us of your device type and operating system.
                        We use cookies and log files to gather non-personally identifiable information such as:
                    </p>
                    <ul className="list-disc list-inside text-lg space-y-2">
                        <li>Internet Protocol (IP) addresses</li>
                        <li>Browser type</li>
                        <li>Internet Service Provider (ISP)</li>
                        <li>Date and time stamps</li>
                        <li>Referring/exit pages</li>
                        <li>Number of clicks</li>
                    </ul>
                    <p className="text-lg">
                        This information is used to analyze trends, administer the website, track user movements, and compile demographic data. It is not linked to any personally identifiable information.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900">How We Protect Your Personal Information</h2>
                    <p className="text-lg">
                        At <strong> Ink Cures </strong>, we prioritize your privacy and security. Sensitive information entered on our website, such as credit card details, is encrypted using Secure Socket Layer (SSL) technology.
                        We adhere to industry standards to safeguard your personal information during transmission and storage.
                    </p>
                    <p className="text-lg">
                        However, no method of transmission over the internet or electronic storage is entirely secure. While we take all commercially reasonable steps to protect your data, we cannot guarantee absolute security.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900">We Value Your Personal Information</h2>
                    <p className="text-lg">
                        If we request general demographic information, it is strictly for reporting purposes, and users remain anonymous. Your phone numbers, email addresses, and postal addresses are never shared for demographic reporting with external entities.
                    </p>
                    <p className="text-lg">
                        We may disclose personal information when required by law or if we believe such action is necessary to comply with legal proceedings, court orders, or legal processes served on our website.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900">Notification of Changes</h2>
                    <p className="text-lg">
                        If <strong> Ink Cures </strong> decides to make changes to this Privacy Policy, we will post the updates on this page and other relevant areas of our website.
                        This ensures that our users are always aware of what information we collect, how we use it, and under what circumstances it may be disclosed.
                    </p>
                </section>

                <footer className="text-center text-gray-600">
                    <p className="text-sm">© 2025  Ink Cures . All Rights Reserved.</p>
                    <p className="text-sm">
                        For any questions or concerns regarding our privacy policy, please contact us at{" "}
                        <a href="mailto:support@hewlettprintersolution.online" className="text-blue-500 hover:underline">
                            support@hewlettprintersolution.online
                        </a>.
                    </p>
                </footer>
            </div>
        </>
    );
};

export default PrivacyPolicy;
