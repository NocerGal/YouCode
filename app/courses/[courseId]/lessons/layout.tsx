import React, { PropsWithChildren, Suspense } from 'react';
import { LessonNavigation } from './[lessonId]/LessonNavigation';
import { LessonNavigationSkeleton } from './LessonNavigationSkeleton';

export default function lessons({
  children,
  params,
}: PropsWithChildren<{ params: { courseId: string } }>) {
  return (
    <div className="flex items-start gap-4 p-4">
      <Suspense fallback={<LessonNavigationSkeleton />}>
        <LessonNavigation courseId={params.courseId} />
      </Suspense>
      {children}
    </div>
  );
}
