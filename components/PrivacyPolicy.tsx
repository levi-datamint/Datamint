import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-52 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in-up">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-lg prose-mint max-w-none text-gray-600">
        <p className="lead text-xl text-gray-700 mb-8">
          At Datamint, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us, such as when you create an account, update your profile, or communicate with us. This may include:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Contact information (name, email address, phone number)</li>
          <li>Business information (company name, financial data for collections processing)</li>
          <li>Login credentials (username and password)</li>
          <li>Payment information (credit card details, billing address)</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to provide, maintain, and improve our services, including:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Processing transactions and managing accounts</li>
          <li>Sending related information, including confirmations, invoices, and technical notices</li>
          <li>Communicating with you about products, services, offers, and events</li>
          <li>Monitoring and analyzing trends, usage, and activities in connection with our services</li>
          <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Email Access & Data Use</h2>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Email Data Access</h3>
        <p className="mb-4">
          Our application may access and process email data from a user’s Google account solely to analyze incoming messages and associate them with existing entities in the system (such as requests, tickets, or workflows) in order to determine and update their status.
        </p>
        <p className="mb-4">
          We only request the minimum required read-only permissions. Email content is processed strictly for this purpose and is not used for advertising, marketing, profiling, or any unrelated analytics. Emails that are not relevant to known entities are ignored.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Data Storage and Security</h3>
        <p className="mb-4">
          Email data is not stored long-term unless required for audit or traceability of a specific entity. Any stored data is encrypted and protected using industry-standard security measures. Users may revoke email access at any time, which immediately stops all email processing.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Sharing of Information</h2>
        <p className="mb-4">
          We do not share your personal information with third parties except as described in this privacy policy. We may share information with:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Service providers who perform services on our behalf</li>
          <li>Professional advisors, such as lawyers, auditors, and insurers</li>
          <li>Government bodies and law enforcement agencies, when required by law</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
        <p className="mb-4">
          Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, delete, or restrict the use of your data. To exercise these rights, please contact us at privacy@datamint.ai.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
          <p className="font-semibold text-gray-900">Datamint Inc.</p>
          {/* <p>123 Financial District Blvd, Suite 400</p> */}
          {/* <p>New York, NY 10005</p> */}
          <p className="mt-2 text-mint-700">itay@datamint.biz</p>
        </div>
      </div>
    </div>
  );
};