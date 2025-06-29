
'use client';

const Disclaimer = () => {
    return (
        <div className="bg-white text-gray-800 px-4 md:px-20 py-10 md:py-20">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-blue-900">Disclaimer</h1>

            {/* New Disclaimer Text */}
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-900 p-6 mb-10 rounded-md">
                <p className="mb-4">
                    <strong>Ink Cures </strong> is an independent informational website and is not affiliated with or endorsed by any printer manufacturers, including but not limited to HP (Hewlett-Packard), Epson, Canon, Brother, or Lexmark.
                </p>
                <p className="mb-4">
                    All brand names, trademarks, logos, and product images are the property of their respective owners and are used strictly for informational and reference purposes only.
                </p>
                <p>
                    The troubleshooting guides and content provided on this site are based on general user experiences and known issues. While we strive for accuracy, we do not guarantee that the solutions will resolve your specific problem. For brand-authorized assistance, we recommend contacting the official support channels of your printer manufacturer.
                </p>
            </div>

            {/* Existing Content */}
            <div className="space-y-6 text-lg leading-relaxed">
                <p>
                    The information provided by <strong>Ink Cures </strong> ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
                </p>
                <p>
                    Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
                </p>
                <p>
                    The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                </p>
                <p>
                    We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
                </p>
            </div>
        </div>
    );
};

export default Disclaimer;
