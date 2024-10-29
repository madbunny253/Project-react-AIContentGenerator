import React from 'react';
import Link from 'next/link';

function Billing() {
  return (
    <div className="flex flex-col items-center mt-32 min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Upgrade With Monthly Plan</h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
        {/* Free Tier Card */}
        <div className="w-full max-w-md p-8 bg-white border border-black rounded-lg flex flex-col items-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-700 text-center">Free</h2>
          <p className="text-5xl font-extrabold mb-4 text-center">0$<span className="text-xl font-medium">/month</span></p>
          <ul className="space-y-3 text-gray-600 mb-8 text-center">
            <li>✓ 10,000 Words/Month</li>
            <li>✓ 50+ Content Templates</li>
            <li>✓ Unlimited Download & Copy</li>
            <li>✓ No History</li>
          </ul>
          <Link href="/dashboard">
            <button className="w-full px-12 py-3 bg-gray-600 text-white border-2 border-gray-600 rounded-full font-semibold">
              Currently Active Plan
            </button>
          </Link>
        </div>

        {/* Premium Tier Card */}
        <div className="w-full max-w-md p-8 bg-white border border-primary rounded-lg flex flex-col items-center">
          <h2 className="mb-4 text-2xl font-bold text-primary text-center">Monthly</h2>
          <p className="text-5xl font-extrabold mb-4 text-primary text-center">9.99$<span className="text-xl font-medium">/month</span></p>
          <ul className="space-y-3 text-gray-600 mb-8 text-center">
            <li>✓ 1,00,000 Words/Month</li>
            <li>✓ 50+ Template Access</li>
            <li>✓ Unlimited Download & Copy</li>
            <li>✓ 1 Month of History</li>
          </ul>
          <Link href="/dashboard">
            <button className="w-full px-14 py-3 text-primary border-2 border-primary rounded-full font-semibold hover:bg-primary hover:text-white transition text-center">
              Get Started
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Billing;
