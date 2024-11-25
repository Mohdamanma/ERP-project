import React from 'react';
import { Company } from '../types';
import { X } from 'lucide-react';

interface SignupModalProps {
  company: Company;
  onClose: () => void;
}

export const SignupModal: React.FC<SignupModalProps> = ({ company, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Registration Successful</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-3">
          <div>
            <label className="font-semibold">Company Name:</label>
            <p>{company.companyName}</p>
          </div>
          <div>
            <label className="font-semibold">Registration Number:</label>
            <p>{company.registrationNumber}</p>
          </div>
          <div>
            <label className="font-semibold">Sector:</label>
            <p>{company.sector}</p>
          </div>
          <div>
            <label className="font-semibold">Email:</label>
            <p>{company.email}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continue to Login
        </button>
      </div>
    </div>
  );
};