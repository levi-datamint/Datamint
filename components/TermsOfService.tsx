import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="pt-52 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in-up">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-lg prose-mint max-w-none text-gray-600">
        <p className="lead text-xl text-gray-700 mb-8">
          Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Datamint website and service operated by Datamint Inc.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
        <p className="mb-4">
          Permission is granted to temporarily download one copy of the materials (information or software) on Datamint's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Modify or copy the materials;</li>
          <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>Attempt to decompile or reverse engineer any software contained on Datamint's website;</li>
          <li>Remove any copyright or other proprietary notations from the materials; or</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Accounts</h2>
        <p className="mb-4">
          When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Email Processing</h2>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Email Integration</h3>
        <p className="mb-4">
          By connecting a Google account, the user authorizes the application to access and process email content for the limited purpose of analyzing messages and updating the status of entities within the service. The application does not send, modify, or delete emails unless explicitly stated and permitted by the granted scopes.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">User Control</h3>
        <p className="mb-4">
          Users retain full control over their Google account permissions and may revoke access at any time through their Google account settings. Revoking access may limit or disable email-based functionality within the service.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Intellectual Property</h2>
        <p className="mb-4">
          The Service and its original content, features, and functionality are and will remain the exclusive property of Datamint Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
        <p className="mb-4">
          In no event shall Datamint Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed and construed in accordance with the laws of New York, United States, without regard to its conflict of law provisions.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Changes</h2>
        <p className="mb-4">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us at:
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