/* eslint-disable @next/next/no-img-element */
import React from 'react';
import '../../styles/globals.css';
import Link from 'next/link';


export default function Database() {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-slate-700 bg-opacity-10">
      <div className="flex justify-between items-center pb-4 border-b border-blue-800">
        <h2 className="text-lg font-semibold content-center justify-center">ToF Database</h2>

        <button className="bg-indigo-900 hover:bg-indigo-600 text-sm text-white py-2 px-4 rounded">
          + Upload Gear
        </button>
      </div>
      {/* Tabs Section */}
      <div className="flex justify-between items-center mt-4 border-b border-blue-800">
        {/* Gear Pieces Tabs */}
        <div className="flex gap-4">
          <Link legacyBehavior href="/database/helm"><a className=" hover:underline">Helm</a></Link>
          <Link legacyBehavior href="/database/armor"><a className=" hover:underline">Armor</a></Link>
          <Link legacyBehavior href="/database/belt"><a className=" hover:underline">Belt</a></Link>
          <Link legacyBehavior href="/database/bracers"><a className=" hover:underline">Bracers</a></Link>
          <Link legacyBehavior href="/database/handguards"><a className=" hover:underline">Handguards</a></Link>
          <Link legacyBehavior href="/database/sabatons"><a className=" hover:underline">Sabatons</a></Link>
          <Link legacyBehavior href="/database/spaulders"><a className=" hover:underline">Spaulders</a></Link>
        </div>

        {/* Elements Tabs */}
        <div className="flex gap-4">
          <Link legacyBehavior href="/database/frost"><a className=" hover:underline">Frost</a></Link>
          <Link legacyBehavior href="/database/flame"><a className=" hover:underline">Flame</a></Link>
          <Link legacyBehavior href="/database/physical"><a className=" hover:underline">Physical</a></Link>
          <Link legacyBehavior href="/database/volt"><a className=" hover:underline">Volt</a></Link>
        </div>
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-xs">
              <th className="pb-4 pt-2">#</th>
              <th className="pb-4 pt-2">Nickname</th>
              <th className="pb-4 pt-2">UID</th>
              <th className="pb-4 pt-2">
                Helmet
                <img src="\images\gear\helm_gold.webp" alt="Helmet" className="inline-block w-7 h-7 ml-2" />
              </th>
              <th className="pb-4 pt-2">
                Armor
                <img src="\images\gear\armor_gold.webp" alt="Armor" className="inline-block w-7 h-7 ml-2" />
              </th>
              <th className="pb-4 pt-2">
                Belt
                <img src="\images\gear\belt_gold.webp" alt="Belt" className="inline-block w-7 h-7 ml-2" />
              </th>
              <th className="pb-4 pt-2">
                Bracers
                <img src="\images\gear\bracer_gold.webp" alt="Bracer" className="inline-block w-7 h-7 ml-2" />
              </th>
              <th className="pb-4 pt-2">
                Handguards
                <img src="\images\gear\handguards_gold.webp" alt="Handguards" className="inline-block w-7 h-7 ml-2" />
              </th>
              <th className="pb-4 pt-2">
                Sabatons
                <img src="\images\gear\sabatons_gold.webp" alt="Sabatons" className="inline-block w-7 h-7 ml-2" />
              </th>
              <th className="pb-4 pt-2">
                Spaulders
                <img src="\images\gear\spaulders_gold.webp" alt="Spaulders" className="inline-block w-7 h-7 ml-2" />
              </th>
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
              <th className="pb-4 pt-2">Bracers</th>
              <th className="pb-4 pt-2">Handguards</th>
              <th className="pb-4 pt-2">Sabatons</th>
              <th className="pb-4 pt-2">Spaulders</th>
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