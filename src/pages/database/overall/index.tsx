/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import '../../../styles/globals.css';
import Link from 'next/link';


export default function Database() {
const [showUploadModal, setShowUploadModal] = useState(false);

const toggleUploadModal = () => {
    setShowUploadModal(!showUploadModal);
  };

  return (
    <div className="p-6 rounded-lg shadow-lg bg-slate-700 bg-opacity-10">
      <div className="flex justify-between items-center pb-4 border-b border-blue-800">
        <h2 className="text-lg font-semibold content-center justify-center">ToF Database</h2>

        <button onClick={toggleUploadModal} className="bg-slate-100 border-indigo-900 border-2 dark:bg-indigo-900 hover:bg-indigo-100 hover:dark:bg-indigo-700 text-sm py-2 px-4 rounded">
            + Upload Gear
        </button>
      </div>
      {/* Tabs Section */}
      
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-xs">
              <th className="pb-4 pt-2">#</th>
              <th className="pb-4 pt-2">Nickname</th>
              <th className="pb-4 pt-2">UID</th>
              <th className="pb-4 pt-2">Element</th>
              <th className="pb-4 pt-2">Base Stats</th>
              <th className="pb-4 pt-2">Overall</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-left text-xs">
              <th className="pb-4 pt-2">1</th>
              <th className="pb-4 pt-2">Glock</th>
              <th className="pb-4 pt-2">12013421</th>
              <th className="pb-4 pt-2">Helm</th>
              <th className="pb-4 pt-2">Armor</th>
              <th className="pb-4 pt-2">Belt</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-1">
          <span className="px-3 py-1 border rounded text-blue-300 border-blue-300">1</span>
          <span className="px-3 py-1 hover:bg-blue-700 cursor-pointer rounded">5</span>
        </div>
        <div className="flex gap-1">
          <span className="px-3 py-1 hover:bg-blue-700 cursor-pointer rounded">
            <img src="https://icons.getbootstrap.com/assets/icons/chevron-left.svg" alt="Prev" className="w-4 h-4" />
          </span>
          <span className="px-3 py-1 hover:bg-blue-700 cursor-pointer rounded">
            <img src="https://icons.getbootstrap.com/assets/icons/chevron-right.svg" alt="Next" className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
    
  );
}