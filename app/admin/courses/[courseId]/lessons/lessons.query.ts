import { prisma } from '@/lib/prisma';

export const getCourseLessons = async ({
  creatorId,
  courseId,
}: {
  creatorId: string;
  courseId: string;
}) => {
  const lessons = await prisma.course.findFirst({
    where: {
      id: courseId,
      creatorId: creatorId,
    },
    select: {
      id: true,
      name: true,
      lessons: true,
    },
  });

  return lessons;
};
