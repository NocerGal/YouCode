import { prisma } from '@/lib/prisma';

export const getAdminLesson = async (lesssonId: string, userId: string) => {
  return await prisma.lesson.findUnique({
    where: {
      id: lesssonId,
      course: {
        creatorId: userId,
      },
    },
  });
};
