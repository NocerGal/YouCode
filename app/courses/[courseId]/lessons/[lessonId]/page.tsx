import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getLesson } from './lesson.query';
import { MdxProse } from './MdxProse';
import { getAuthSession } from '@/lib/auth';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { SubmitButton } from '@/components/form/SubmitButton';
import { handleLessonState } from './lesson.action';

export default async function LessonPage({
  params: { lessonId, courseId },
}: {
  params: {
    lessonId: string;
    courseId: string;
  };
}) {
  const session = await getAuthSession();
  const lesson = await getLesson(lessonId, session?.user.id);

  if (!lesson) {
    notFound();
  }

  const isAuthorized = await prisma.course.findUnique({
    where: {
      id: courseId,
    },
    select: {
      users: {
        where: {
          userId: session?.user.id ?? '-',
          canceledAt: null,
        },
      },
    },
  });

  if (lesson?.state !== 'PUBLIC' && !isAuthorized?.users.length) {
    throw new Error('Unauthorized');
  }

  // if (lesson.users.length === 0 && session?.user.id) {
  //   await prisma.lessonOnUser.create({
  //     data: {
  //       userId: session?.user.id,
  //       lessonId: lesson.id,
  //     },
  //   });
  // }

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>{lesson.name}</CardTitle>
      </CardHeader>

      <CardContent>
        <MdxProse markdown={lesson.content} />
        <form className="m-auto flex max-w-2xl flex-row-reverse">
          <SubmitButton
            formAction={async () => {
              'use server';
              await handleLessonState({
                lessonId: lesson.id,
                progress:
                  lesson.progress === 'COMPLETED' ? 'IN_PROGRESS' : 'COMPLETED',
              });
            }}
          >
            {lesson.progress === 'COMPLETED'
              ? 'Mark as in progress'
              : 'Completed'}
          </SubmitButton>
        </form>
      </CardContent>
    </Card>
  );
}
