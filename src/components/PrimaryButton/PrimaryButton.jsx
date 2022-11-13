import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button type="button" className="mt-4 inline-flex items-center justify-center rounded-md p-2.5 bg-emerald-400 hover:bg-emerald-500 text-white">
            {children}
        </button>
    );
};

export default PrimaryButton;