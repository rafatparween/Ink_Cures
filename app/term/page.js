
const TermPage = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto p-8 space-y-8 bg-gray-100 text-gray-800">
                <h1 className="text-4xl font-bold text-gray-900 text-center">Terms and Conditions</h1>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900">Terms of Use</h2>
                    <ul className="list-disc list-inside text-lg space-y-2">
                        <li>All content provided is for informational purposes only.</li>
                        <li>Users may not reproduce, distribute, or exploit any content from this site without prior written permission.</li>
                        <li> Ink Cures  reserves the right to update or modify these terms at any time without notice.</li>
                        <li>Use of this website is at your own risk. We are not liable for any damages or losses resulting from the use of the information provided.</li>
                    </ul>
                    <p className="text-lg mt-2">
                        Your continued use of the website following the posting of any changes to these Terms of Use constitutes acceptance of those changes.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900">Cookie Notice</h2>
                    <p className="text-lg">
                        Our website uses cookies to enhance your browsing experience and analyze website traffic. Cookies are small data files stored on your device when you visit a website.
                    </p>
                    <ul className="list-disc list-inside text-lg space-y-2 mt-2">
                        <li>Understand how users interact with our content</li>
                        <li>Improve website performance and functionality</li>
                    </ul>
                    <p className="text-lg mt-2">
                        By continuing to browse our site, you consent to our use of cookies. You can disable cookies in your browser settings at any time. However, please note that disabling cookies may affect your ability to access certain features of our website.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900">Third-Party Links Disclaimer</h2>
                    <p className="text-lg">
                        This website may contain links to external websites that are not provided, maintained, or affiliated with  Ink Cures .
                        We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external sites.
                         Ink Cures  is not responsible for the content, privacy practices, or policies of any third-party websites linked from our platform.
                        Users are encouraged to review the privacy policies and terms of use of any third-party websites they visit through links on our site.
                    </p>
                </section>

                {/* Existing sections continue below unchanged */}

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900">The Contract</h2>
                    <ul className="list-disc list-inside text-lg space-y-4">
                        <li>The clients and  Ink Cures  will have an independent contractor relationship, with neither party intending or implying a partnership or joint venture.</li>
                        <li>Both parties will agree on a start date for the services, and costs will be applied in accordance with that date.</li>
                        <li>Clients will receive regular reports on the performance of services.</li>
                        <li>Either party must provide at least 10 business days’ notice before canceling or transferring service duties to another service vendor.</li>
                        <li>A person who is not a party to the contract shall have no rights under or in connection with it.</li>
                        <li> Ink Cures reserves the right to subcontract some service tasks to a third-party service provider.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900">Payment</h2>
                    <ul className="list-disc list-inside text-lg space-y-4">
                        <li>Clients must pay the full cost upfront when signing up for a monthly service plan with  Ink Cures .</li>
                        <li>For fixed quotes, clients must pay 50% of the agreed amount in advance, with the remaining 50% due within seven days of the service start date.</li>
                        <li> Ink Cures  will bill clients monthly in advance.</li>
                        <li>If a client fails to pay an invoice on time,  Ink Cures  reserves the right to immediately discontinue services without prior notice.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900">Liability</h2>
                    <ul className="list-disc list-inside text-lg space-y-4">
                        <li> Ink Cures will not be liable for any consequential or indirect losses due to delays in service deliverables caused by natural or uncontrollable events.</li>
                        <li>Clients agree to indemnify and hold  Ink Cures  harmless from any claims, losses, liabilities, and expenses arising from services provided, including third-party claims related to false advertising, intellectual property violations, or content submissions for publication.</li>
                        <li>Due to the nature of digital media, any content provided by clients for publication will be publicly accessible upon publication.  Ink Cures  is not responsible for screening such material or any resultant losses.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900">Waiver</h2>
                    <ul className="list-disc list-inside text-lg space-y-4">
                        <li>Failure to enforce strict performance of any provision of the contract does not constitute a waiver of any obligations or rights.</li>
                        <li>Waivers are only valid if communicated in writing.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900">Privacy Rights</h2>
                    <ul className="list-disc list-inside text-lg space-y-4">
                        <li>Information such as name, email, and contact details shared through our forms will remain private and will not be disclosed to third parties without prior consent, except for internal use.</li>
                        <li> Ink Cures  uses SSL encryption to protect sensitive data during online transactions. However, no method of online transmission is 100% secure, and absolute security cannot be guaranteed.</li>
                        <li>Cookies may be used to track browsing preferences and gather statistical data to improve user experience. These cookies do not access personal information.</li>
                        <li>Third-party advertisers linked on our site may use cookies to gather statistical information, but they do not have access to personal data.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900">Modification of Terms</h2>
                    <p className="text-lg">
                         Ink Cures  reserves the right to modify these terms and conditions at any time, including during an ongoing contract. Clients will be notified of any changes via email or updates on our website.
                    </p>
                </section>

                <footer className="text-center text-gray-600">
                    <p className="text-sm">© 2025  Ink Cures . All Rights Reserved.</p>
                    <p className="text-sm">
                        For any questions or concerns regarding these terms, please contact us at
                        <a href="mailto:support@hewlettprintersolution.online" className="text-blue-500 hover:underline"> support@hewlettprintersolution.online</a>.
                    </p>
                </footer>
            </div>
        </>
    )
};

export default TermPage;
