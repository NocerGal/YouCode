import { Typography } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/badge';

import { AdminLessonItemType } from './lessons.query';
import Link from 'next/link';

export type LessonItemProps = {
  lesson: AdminLessonItemType;
};

export const AdminLessonItem = ({ lesson }: LessonItemProps) => {
  return (
    <Link href={`/admin/courses/${lesson.courseId}/lessons/${lesson.id}`}>
      <div className="flex items-center rounded border border-border bg-card px-4 py-2 transition-colors hover:bg-accent">
        <Typography variant="large">{lesson.name}</Typography>
        <Badge className="ml-auto">{lesson.state}</Badge>
      </div>
    </Link>
  );
};
