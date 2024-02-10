import {
  Layout,
  LayoutAction,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from '@/components/layout/layout';
import { buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import React from 'react';

export default async function CoursesPage() {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Courses</LayoutTitle>
      </LayoutHeader>
      <LayoutAction>
        <Link
          href={'/admin/courses/new'}
          className={buttonVariants({
            variant: 'secondary',
          })}
        >
          New course
        </Link>
      </LayoutAction>
      <LayoutContent>
        <Link href={'/admin/courses'}>Courses</Link>
      </LayoutContent>
    </Layout>
  );
}
