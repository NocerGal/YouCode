import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAuthSession } from '@/lib/auth';
import { LessonItem } from '../LessonItem';
import { getCourse } from '../../course.query';

export type LessonNavigationProps = {
  courseId: string;
};

export const LessonNavigation = async (props: LessonNavigationProps) => {
  const session = await getAuthSession();
  const course = await getCourse({
    courseId: props.courseId,
    userId: session?.user.id,
  });

  if (!course) {
    return null;
  }

  return (
    <Card className="max-w-xs flex-1">
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {course.lessons.map((lesson, index) => (
          <LessonItem lesson={lesson} key={index} />
        ))}
      </CardContent>
    </Card>
  );
};
