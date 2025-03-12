import { use } from 'react';
import { sleep } from '@/utils/functions';

export function generateStaticParams() {
    return Array(10).fill(null).map((_, index) => ({ num: (index + 1).toString() }));
}

export const dynamicParams = true;

export default function Num({ params }) {
  const { num } = use(params) as { num: string };

  use(sleep(4000))

  return (
    <div>
      <h1>{num}</h1>
    </div>
  )
}
