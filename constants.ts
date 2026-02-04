import { Product, StoreInfo, Feature } from './types';

export const STORE_INFO: StoreInfo = {
  name: "제피로스 철물점",
  address: "경기도 안산시 상록구 충장로5길 9, 1층",
  phone: "0314170482",
  phoneFormatted: "031-417-0482",
  blogUrl: "https://blog.naver.com/zephyros3968",
  // Using a search query link since we don't have exact coordinates in the prompt
  kakaoMapUrl: "https://map.kakao.com/link/search/제피로스철물점", 
  naverMapUrl: "https://map.naver.com/v5/search/제피로스철물점" 
};

export const HERO_CONTENT = {
  headline: "안산 이동 주민들의 든든한 공구 창고",
  subheadline: "작은 나사 하나부터 집수리 자재까지,\n가까운 제피로스에서 바로 해결하세요.",
  locationBadge: "안산시 이동 한대앞역 인근"
};

export const PAIN_POINTS: string[] = [
  "급하게 필요한 공구가 있는데 멀리 가야 하나요?",
  "수리해야 하는데 도구 이름도 모르겠고 막막하신가요?",
  "인터넷 주문 기다리기엔 당장 급하신가요?"
];

export const SOLUTIONS: Feature[] = [
  {
    title: "가까운 동네 철물점",
    description: "멀리 갈 필요 없습니다. 안산 이동 주민들 곁에 언제나 열려 있습니다."
  },
  {
    title: "친절한 상담과 설명",
    description: "무엇을 사야 할지 몰라도 괜찮습니다. 상황을 말씀해주시면 딱 맞는 물건을 찾아드립니다."
  },
  {
    title: "다양한 자재 구비",
    description: "방충망, 샷시 부속부터 실리콘, 안전용품까지 현장에 필요한 모든 것이 있습니다."
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: '창호/샷시 자재',
    description: '방충망, 롤방충망, 샷시부속, 현관방충망, 크리센트, 호차',
    iconName: 'home'
  },
  {
    id: 'p2',
    name: '생활/욕실 자재',
    description: '디지털 도어락, 수전(수도꼭지), 빨래건조대, 실리콘, 폼',
    iconName: 'zap'
  },
  {
    id: 'p3',
    name: '공구/철물',
    description: '전동공구, 수공구, 피스(나사), 절단석, 각종 철물 일체',
    iconName: 'tool'
  },
  {
    id: 'p4',
    name: '안전/기타',
    description: '안전용품, 작업장갑, 멀티탭, 등기구(LED), 넥산(캐노피)',
    iconName: 'shield'
  }
];