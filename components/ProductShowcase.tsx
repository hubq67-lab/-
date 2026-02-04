import React from 'react';
import { PRODUCTS } from '../constants';
import { Icon } from './Icons';

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="py-16 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">없는 게 없는 만물상</h2>
          <p className="text-gray-600">
            현장 공구부터 가정용 수리 자재까지,<br/>
            필요한 모든 것을 한곳에서 만나보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                <Icon name={product.iconName} className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 break-keep">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white p-6 rounded-xl border border-dashed border-gray-300">
          <p className="text-gray-600 mb-2">찾으시는 물건이 목록에 없나요?</p>
          <p className="text-lg font-bold text-blue-600">
            사장님께 직접 물어보세요! 친절하게 찾아드립니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;