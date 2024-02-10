'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { LESSON_STATUS, LessonDetailsSchema } from './lesson.schema';
import { lessionActionEditDetails } from '../lesson.action';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export type LessonDetailsFormProps = {
  defaultValue: LessonDetailsSchema & {
    id: string;
  };
};

export const LessonDetails = ({ defaultValue }: LessonDetailsFormProps) => {
  const form = useZodForm({
    schema: LessonDetailsSchema,
    defaultValues: defaultValue,
  });

  const router = useRouter();

  return (
    <Form
      form={form}
      className="flex flex-col gap-4 p-4"
      onSubmit={async (values) => {
        const { data, serverError } = await lessionActionEditDetails({
          lessonId: defaultValue.id,
          data: values,
        });

        if (data) {
          toast.success(data.message);

          router.refresh();
          return;
        }

        toast.error('Some error occurred', {
          description: serverError,
        });
        return;
      }}
    >
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="NextReact" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="state"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a state" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {LESSON_STATUS.map((state) => (
                  <SelectItem value={state} className="capitalize">
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />

      <Button type="submit">Submit</Button>
    </Form>
  );
};
