'use client';

import { useState, useEffect } from 'react';

const SymposiumPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm w-full animate-slide-in-right">
      <div className="theme-bg-secondary theme-border border rounded-lg shadow-xl relative overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500" />
        <div className="p-5 pt-4">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 theme-text-muted hover:theme-text-primary transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-start gap-3 mb-3 pr-6">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold theme-text-primary">
              9th Young AGErs Symposium 2026
            </h3>
            <p className="text-sm theme-text-muted">
              10 year anniversary of Young AGErs
            </p>
          </div>
        </div>

        <div className="space-y-1.5 text-sm theme-text-secondary mb-4">
          <p><span className="font-semibold theme-text-primary">Location:</span> Dresden</p>
          <p><span className="font-semibold theme-text-primary">Dates:</span> October 1st &ndash; 2nd, 2026</p>
          <p><span className="font-semibold theme-text-primary">Registration deadline:</span> August 1st, 2026</p>
          <p><span className="font-semibold theme-text-primary">Abstract deadline:</span> September 1st, 2026</p>
        </div>

        <div className="flex gap-3">
          <a
            href="/registration/Registration_form_Young_AGErs_Symposium_2026.pdf"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md font-medium transition-colors"
          >
            Registration Form
          </a>
          <a
            href="/registration/Template_Abstract_2026.docx"
            download
            className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm px-4 py-2 rounded-md font-medium transition-colors"
          >
            Abstract Template
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SymposiumPopup;
