'use server';

import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { CourseFormSchema } from './course.schema';
import { authenticatedAction } from '@/lib/action';

const CourseActionEditProps = z.object({
  courseId: z.string(),
  data: CourseFormSchema,
});

export const courseActionEdit = authenticatedAction(
  CourseActionEditProps,
  async (props, { userId }) => {
    await prisma.course.update({
      where: {
        id: props.courseId,
        creatorId: userId,
      },
      data: props.data,
    });

    return 'Course updated successfully';
  }
);
