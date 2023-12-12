import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from '@/components/layout/layout';
import { Typography } from '@/components/ui/Typography';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getRequiredAuthSession } from '@/lib/auth';

import React from 'react';
import { getCourseLessons } from './lessons.query';
import { notFound } from 'next/navigation';
import { LessonItem } from './LessonItem';

export default async function CourseLessonsPage({
  params,
}: {
  params: { courseId: string };
}) {
  const session = await getRequiredAuthSession();

  const lessons = await getCourseLessons({
    creatorId: session.user.id,
    courseId: params.courseId,
  });

  if (!lessons) return notFound();

  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Lessons . {lessons?.name}</LayoutTitle>
      </LayoutHeader>
      <LayoutContent className="flex flex-col gap-4 lg:flex-row">
        <Card className="flex-[2]">
          <CardHeader>
            <CardTitle>Lessons</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {lessons.lessons.map((lesson) => (
              <LessonItem key={lesson.id} lesson={lesson} />
            ))}
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
