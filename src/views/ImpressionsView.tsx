import React from 'react';
import { IMPRESSIONS_DATA } from '../data/inkcreedData';

interface ImpressionsViewProps {
  onNavigate: (path: string) => void;
}

export const ImpressionsView: React.FC<ImpressionsViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1180px] mx-auto px-6 lg:px-12 py-16 md:py-24">
      {/* Title & Dek */}
      <div className="mb-12 pb-8 border-b border-[#D5DBE0]">
        <div className="ui-label mb-2">Run Sheet Archive</div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#14181C] tracking-tight">
          The Press Impressions
        </h1>
        <p className="mt-3 text-base text-[#5C6770] max-w-2xl leading-relaxed">
          The mechanical register of every roller pass. Monitored for roller deflection, cylinder bite, and ink dwell across 444 plates.
        </p>
      </div>

      {/* Impression gauge summary stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="p-6 bg-[#E7EBEE] border border-[#D5DBE0]">
          <div className="ui-label text-[10px]">Tonnage Calibrated</div>
          <div className="font-display text-2xl font-bold text-[#14181C] mt-2 font-mono-tabular">
            380 KG
          </div>
          <div className="text-xs text-[#5C6770] mt-1">Nominal bed bite</div>
        </div>
        <div className="p-6 bg-[#E7EBEE] border border-[#D5DBE0]">
          <div className="ui-label text-[10px]">Active Register</div>
          <div className="font-display text-2xl font-bold text-[#14181C] mt-2 font-mono-tabular">
            312 / 444
          </div>
          <div className="text-xs text-[#5C6770] mt-1">Plates entered</div>
        </div>
        <div className="p-6 bg-[#E7EBEE] border border-[#D5DBE0]">
          <div className="ui-label text-[10px]">Etch Depth</div>
          <div className="font-display text-2xl font-bold text-[#14181C] mt-2 font-mono-tabular">
            12 µM
          </div>
          <div className="text-xs text-[#5C6770] mt-1">Intaglio groove</div>
        </div>
        <div className="p-6 bg-[#E7EBEE] border border-[#D5DBE0]">
          <div className="ui-label text-[10px]">Run Provenance</div>
          <div className="font-display text-2xl font-bold text-[#1F4E79] mt-2">
            Solana
          </div>
          <div className="text-xs text-[#5C6770] mt-1">Immutable stamp</div>
        </div>
      </div>

      {/* Run Sheet Table */}
      <div className="border border-[#D5DBE0] overflow-x-auto bg-[#F3F5F7]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#D5DBE0] bg-[#E7EBEE] text-[11px] font-mono-tabular uppercase tracking-wider text-[#5C6770]">
              <th className="py-3.5 px-4 font-semibold">Plate</th>
              <th className="py-3.5 px-4 font-semibold">Practice</th>
              <th className="py-3.5 px-4 font-semibold">Impression Date</th>
              <th className="py-3.5 px-4 font-semibold">Cylinder Kiss</th>
              <th className="py-3.5 px-4 font-semibold">Stock Ground</th>
              <th className="py-3.5 px-4 font-semibold">Signatory</th>
              <th className="py-3.5 px-4 font-semibold text-right">Run Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#D5DBE0] text-xs font-mono-tabular">
            {IMPRESSIONS_DATA.map((imp) => (
              <tr
                key={imp.plateNo}
                className="hover:bg-[#E7EBEE]/50 transition-colors"
              >
                <td className="py-4 px-4 font-semibold text-[#14181C]">
                  No. {imp.plateNo}
                </td>
                <td className="py-4 px-4 text-[#5C6770]">{imp.practice}</td>
                <td className="py-4 px-4 text-[#5C6770]">{imp.date}</td>
                <td className="py-4 px-4 text-[#14181C]">{imp.pressure}</td>
                <td className="py-4 px-4 text-[#5C6770]">{imp.stock}</td>
                <td className="py-4 px-4 font-medium text-[#14181C]">{imp.signatory}</td>
                <td className="py-4 px-4 text-right">
                  <span
                    className={`inline-block px-2 py-0.5 border text-[10px] uppercase font-semibold ${
                      imp.runStatus === 'Countersigned'
                        ? 'border-[#D5DBE0] bg-[#E7EBEE] text-[#5C6770]'
                        : 'border-[#1F4E79] bg-[#1F4E79] text-white'
                    }`}
                  >
                    {imp.runStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Note under table */}
      <div className="mt-8 flex flex-col sm:flex-row items-baseline justify-between gap-4 text-xs text-[#5C6770]">
        <p>Proof sheets are stored in hermetic zinc cabinets at the InkCreed workshop archive.</p>
        <button
          onClick={() => onNavigate('/register')}
          className="text-xs font-semibold uppercase tracking-wider text-[#1F4E79] hover:underline shrink-0"
        >
          Countersign the next open plate →
        </button>
      </div>
    </div>
  );
};
