import { getLesson } from './lesson.query';
import { getAuthSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { LessonNavigation } from './LessonNavigation';
import { Lesson } from './Lesson';
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from '@/components/layout/layout';
import { buttonVariants } from '@/components/ui/button';

import { Suspense } from 'react';
import { LessonNavigationSkeleton } from './LessonNavigationSkeleton';
import { LessonSkeleton } from './LessonSkeleton';

export default async function LessonPage({
  params,
}: {
  params: {
    lessonId: string;
    courseId: string;
  };
}) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="flex items-start gap-4 p-4">
      <Suspense fallback={<LessonNavigationSkeleton />}>
        <LessonNavigation courseId={params.courseId} />
      </Suspense>
      <Suspense fallback={<LessonSkeleton />}></Suspense>
      <Lesson {...params} />
    </div>
  );
}
