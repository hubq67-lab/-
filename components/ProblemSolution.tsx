import React from 'react';
import { PAIN_POINTS, SOLUTIONS } from '../constants';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Problems */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            이런 경험, 한번쯤 있으시죠?
          </h2>
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 space-y-4 shadow-sm border border-gray-100">
            {PAIN_POINTS.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <AlertCircle className="text-red-500 shrink-0 mt-1" size={20} />
                <p className="text-gray-700 font-medium text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div>
          <div className="text-center mb-10">
            <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Why Jephyros</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              제피로스 철물점이<br/>해결해 드립니다
            </h2>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            {SOLUTIONS.map((solution, idx) => (
              <div key={idx} className="flex gap-4 p-4 md:p-6 rounded-xl bg-blue-50/50 hover:bg-blue-50 transition-colors">
                <div className="shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;